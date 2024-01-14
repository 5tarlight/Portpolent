package io.yeahx4.portpolent.service.user;

import io.yeahx4.portpolent.dto.user.SignInResultDto;
import io.yeahx4.portpolent.entity.User;
import io.yeahx4.portpolent.entity.consts.AccountType;
import io.yeahx4.portpolent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository userRepository, BCryptPasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    public boolean availableToCreate(String handle, String email) {
        Optional<User> emailSearch = this.userRepository.findByEmail(email);
        Optional<User> handleSearch = this.userRepository.findByHandle(handle);

        return emailSearch.isEmpty() && handleSearch.isEmpty();
    }

    private String encryptPassword(String password) {
        return this.encoder.encode(password);
    }

    public boolean doPasswordMatch(String original, String encrypted) {
        return this.encoder.matches(original, encrypted);
    }

    public User saveUser(String email, String handle, String username, String password, AccountType type) {
        String encrypted = this.encryptPassword(password);
        User user = User.builder()
                .email(email)
                .handle(handle)
                .username(username)
                .password(encrypted)
                .build();
        return this.userRepository.save(user);
    }

    public Optional<User> getUserById(int id) {
        return this.userRepository.findById(id);
    }

    public Optional<User> getUserByHandle(String handle) {
        return this.userRepository.findByHandle(handle);
    }

    public Optional<User> getUserByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    public SignInResultDto login(String email, String password) {
        Optional<User> emailUser = this.getUserByEmail(email);
        if (emailUser.isEmpty())
            return new SignInResultDto(false, null, "Cannot find user with email " + email);

        User user = emailUser.get();
        boolean passwordMatch = this.doPasswordMatch(password, user.getPassword());
        if (!passwordMatch)
            return new SignInResultDto(false, null, "Password does not match.");

        return new SignInResultDto(true, user, null);
    }
}
