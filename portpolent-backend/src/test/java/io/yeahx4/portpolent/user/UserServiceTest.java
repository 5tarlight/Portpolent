package io.yeahx4.portpolent.user;

import io.yeahx4.portpolent.PortpolentBackendApplication;
import io.yeahx4.portpolent.entity.User;
import io.yeahx4.portpolent.service.user.UserService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@ContextConfiguration(classes = PortpolentBackendApplication.class)
@Transactional
public class UserServiceTest {
    @Autowired
    UserService userService;

    private User getUser1() {
        return User.builder()
                .email("test1@mail.com")
                .handle("handle")
                .username("User1")
                .password("password")
                .build();
    }

    @Test
    @DisplayName("User should be saved properly")
    void testSaveUser() {
        // given
        User user = getUser1();

        // when
        User result = userService.saveUser(
                user.getEmail(),
                user.getHandle(),
                user.getUsername(),
                user.getPassword(),
                user.getAccountType()
        );

        // then
        Assertions.assertEquals(result.getEmail(), user.getEmail());
        Assertions.assertEquals(result.getHandle(), user.getHandle());
        Assertions.assertEquals(result.getUsername(), user.getUsername());
        Assertions.assertNotEquals(result.getPassword(), user.getPassword()); // Encrypted!
    }
}
