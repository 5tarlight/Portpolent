package io.yeahx4.portpolent.user;

import io.yeahx4.portpolent.entity.User;
import io.yeahx4.portpolent.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Transactional
public class UserRepositoryTest {
    @Autowired
    UserRepository userRepository;

    @Test
    @DisplayName("Save user entity")
    void testSaveUser() {
        // given
        User user = UserTestUtil.getUser1();

        // when
        User result = userRepository.save(user);

        // then
        Assertions.assertTrue(UserTestUtil.isSameIncludingPassword(user, result));
    }

    @Test
    @DisplayName("Find user with handle")
    void findWithHandle() {
        // given
        User user = UserTestUtil.getUser1();
        userRepository.save(user);

        // when
        Optional<User> result = userRepository.findByHandle(user.getHandle());

        // then
        Assertions.assertTrue(result.isPresent());
        User resultUser = result.get();
        Assertions.assertTrue(UserTestUtil.isSameIncludingPassword(user, resultUser));
    }

    @Test
    @DisplayName("Find user with email")
    void findWithEmail() {
        // given
        User user = UserTestUtil.getUser1();
        userRepository.save(user);

        // when
        Optional<User> result = userRepository.findByEmail(user.getEmail());

        // then
        Assertions.assertTrue(result.isPresent());
        User resultUser = result.get();
        Assertions.assertTrue(UserTestUtil.isSameIncludingPassword(user, resultUser));
    }
}
