package io.yeahx4.portpolent.controller.user;

import io.yeahx4.portpolent.dto.user.SignUpDto;
import io.yeahx4.portpolent.entity.User;
import io.yeahx4.portpolent.entity.consts.AccountType;
import io.yeahx4.portpolent.service.user.UserService;
import io.yeahx4.portpolent.util.RestResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<RestResponse<User>> signUp(@RequestBody SignUpDto dto) {
        boolean availableToCreate = this.userService.availableToCreate(dto.handle(), dto.email());

        if (!availableToCreate) {
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

        return new ResponseEntity<>(
                RestResponse.success(user),
                HttpStatus.OK
        );
    }
}
