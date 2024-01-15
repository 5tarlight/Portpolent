package io.yeahx4.portpolent.user;

import io.yeahx4.portpolent.entity.User;
import io.yeahx4.portpolent.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Transactional
public class UserRepositoryTest {
    @Autowired
    UserRepository userRepository;

    private User getUser1() {
        return User.builder()
                .email("test1@mail.com")
                .handle("handle")
                .username("User1")
                .password("password")
                .build();
    }

    @Test
    @DisplayName("Save user entity")
    void testSaveUser() {
        // given
        User user = this.getUser1();
        // when
        User result = this.userRepository.save(user);
        // then
        Assertions.assertEquals(result.getEmail(), user.getEmail());
        Assertions.assertEquals(result.getHandle(), user.getHandle());
        Assertions.assertEquals(result.getUsername(), user.getUsername());
        Assertions.assertEquals(result.getPassword(), user.getPassword());
    }
}
