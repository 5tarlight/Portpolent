package io.yeahx4.portpolent.service.user;

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
        User user = new User(-1, email, handle, username, encrypted, type);
        return this.userRepository.save(user);
    }
}
