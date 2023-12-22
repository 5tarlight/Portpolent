package io.yeahx4.portpolent.controller.user;

import io.yeahx4.portpolent.dto.user.SignInResultDto;
import io.yeahx4.portpolent.dto.user.SignUpDto;
import io.yeahx4.portpolent.entity.User;
import io.yeahx4.portpolent.entity.consts.AccountType;
import io.yeahx4.portpolent.entity.consts.SessionName;
import io.yeahx4.portpolent.service.user.UserService;
import io.yeahx4.portpolent.util.RestResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<RestResponse<User>> signUp(@RequestBody @Valid SignUpDto dto) {
        boolean availableToCreate = this.userService.availableToCreate(dto.handle(), dto.email());

        if (!availableToCreate) {
            logger.info(
                    "Sign up request failed due to duplicated email or password ("
                    + dto.email() + ", "
                    + dto.handle() + ")"
            );

            return new ResponseEntity<>(
                    RestResponse.fail("Duplicated email or handle."),
                    HttpStatus.BAD_REQUEST
            );
        }

        User user = this.userService.saveUser(
                dto.email(),
                dto.handle(),
                dto.username(),
                dto.password(),
                AccountType.OWN
        );

        logger.info("New user signed up. (" + dto.handle() + ")");

        return new ResponseEntity<>(
                RestResponse.success(user),
                HttpStatus.OK
        );
    }

    @GetMapping("/id")
    public ResponseEntity<RestResponse<User>> getUserById(@RequestParam int id) {
        Optional<User> user = this.userService.getUserById(id);

        if (user.isEmpty()) {
            this.logger.info("Failed user fetch with id " + id);
            return new ResponseEntity<>(
                    RestResponse.fail("No user found"),
                    HttpStatus.NOT_FOUND
            );
        } else {
            this.logger.info("Successful user fetch with id " + id);
            return new ResponseEntity<>(
                    RestResponse.success(user.get()),
                    HttpStatus.OK
            );
        }
    }

    @GetMapping("/handle")
    public ResponseEntity<RestResponse<User>> getUserByHandle(@RequestParam String handle) {
        Optional<User> user = this.userService.getUserByHandle(handle);

        if (user.isEmpty()) {
            this.logger.info("Failed user fetch with handle " + handle);
            return new ResponseEntity<>(
                    RestResponse.fail("No user found"),
                    HttpStatus.NOT_FOUND
            );
        } else {
            this.logger.info("Successful user fetch with handle " + handle);
            return new ResponseEntity<>(
                    RestResponse.success(user.get()),
                    HttpStatus.OK
            );
        }
    }

    @PostMapping("/login")
    public ResponseEntity<RestResponse<User>> login(
            HttpServletRequest request,
            @RequestBody SignUpDto body
    ) {
        SignInResultDto result = this.userService.login(body.email(), body.password());

        if (!result.ok()) {
            this.logger.warn(result.message());
            return new ResponseEntity<>(RestResponse.fail("Invalid email or password."), HttpStatus.BAD_REQUEST);
        } else {
            HttpSession session = request.getSession();
            session.setAttribute(SessionName.LOGIN_USER_ID, result.user().getId());

            this.logger.info("Successful login by user " + result.user().getId());
            return new ResponseEntity<>(RestResponse.success(result.user()), HttpStatus.OK);
        }
    }

    // Obsoleted!
    @GetMapping("/whoami_old")
    public ResponseEntity<RestResponse<User>> _whoAmI(HttpServletRequest req) {
        HttpSession session = req.getSession(false);

        if (session == null) {
            return new ResponseEntity<>(RestResponse.fail("Login first"), HttpStatus.OK);
        } else {
            Integer userId = (Integer) session.getAttribute(SessionName.LOGIN_USER_ID);

            if (userId == null)
                return new ResponseEntity<>(RestResponse.fail("Login first"), HttpStatus.OK);
            else {
                Optional<User> user = this.userService.getUserById(userId);
                return user
                    .map(
                        value -> new ResponseEntity<>(RestResponse.success(value), HttpStatus.OK)
                    ).orElseGet(
                        () -> new ResponseEntity<>(
                            RestResponse.fail("Invalid user identification"),
                            HttpStatus.BAD_REQUEST
                        )
                    );
            }
        }
    }

    @GetMapping("/whoami")
    public ResponseEntity<RestResponse<User>> whoAmI(
            @SessionAttribute(name = SessionName.LOGIN_USER_ID, required = true) Integer userId
    ) {
        Optional<User> user = this.userService.getUserById(userId);

        if (user.isEmpty())
            return new ResponseEntity<>(RestResponse.error("Invalid user id"), HttpStatus.BAD_REQUEST);
        else
            return new ResponseEntity<>(RestResponse.success(user.get()), HttpStatus.OK);
    }
}
