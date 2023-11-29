package io.yeahx4.portpolent.service.user;

import io.yeahx4.portpolent.entity.User;
import io.yeahx4.portpolent.entity.consts.AccountType;
import io.yeahx4.portpolent.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean availableToCreate(String handle, String email) {
        Optional<User> emailSearch = this.userRepository.findByEmail(email);
        Optional<User> handleSearch = this.userRepository.findByHandle(handle);

        return emailSearch.isEmpty() && handleSearch.isEmpty();
    }

    public User saveUser(String email, String handle, String username, String password, AccountType type) {
        // TODO : Encrypt password!
        User user = new User(-1, email, handle, username, password, type);
        return this.userRepository.save(user);
    }
}
