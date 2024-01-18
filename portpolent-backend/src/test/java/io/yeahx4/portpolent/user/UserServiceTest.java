package io.yeahx4.portpolent.user;

import io.yeahx4.portpolent.dto.user.SignInResultDto;
import io.yeahx4.portpolent.entity.User;
import io.yeahx4.portpolent.service.user.UserService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@Transactional
public class UserServiceTest {
    @Autowired
    UserService userService;

    private User saveUserFromService(User user) {
        return userService.saveUser(
                user.getEmail(),
                user.getHandle(),
                user.getUsername(),
                user.getPassword(),
                user.getAccountType()
        );
    }

    @Test
    @DisplayName("User should be saved properly")
    void testSaveUser() {
        // given
        User user = UserTestUtil.getUser1();

        // when
        User result = saveUserFromService(user);

        // then
        Assertions.assertTrue(UserTestUtil.isSameExceptForPassword(user, result));
        assertNotEquals(result.getPassword(), user.getPassword()); // Encrypted!
    }

    @Test
    @DisplayName("Duplicated handle should be rejected")
    void canDetectDuplicatedHandle() {
        // given
        User user = UserTestUtil.getUser1();
        saveUserFromService(user);

        // when
        boolean avail = userService.availableToCreate(user.getHandle(), "other-email@example.com");

        // then
        assertFalse(avail);
    }

    @Test
    @DisplayName("Duplicated email should be rejected")
    void canDetectDuplicatedEmail() {
        // given
        User user = UserTestUtil.getUser1();
        saveUserFromService(user);

        // when
        boolean avail = userService.availableToCreate("otherhandle", user.getEmail());

        // then
        assertFalse(avail);
    }

    @Test
    @DisplayName("Password should match with encrypted password")
    void doPasswordMatch() {
        // given
        User user = UserTestUtil.getUser1();
        User result = saveUserFromService(user);

        // when
        boolean doPasswordMatch = userService.doPasswordMatch(user.getPassword(), result.getPassword());

        // then
        assertNotEquals(user.getPassword(), result.getPassword());
        assertTrue(doPasswordMatch);
    }

    @Test
    @DisplayName("User found with handle should be valid")
    void testFindingUserWithHandle() {
        // given
        User user = UserTestUtil.getUser1();
        saveUserFromService(user);

        // when
        Optional<User> result = userService.getUserByHandle(user.getHandle());

        // then
        assertTrue(result.isPresent());
        assertTrue(UserTestUtil.isSameExceptForPassword(user, result.get()));
    }

    @Test
    @DisplayName("User found with id should be valid")
    void testFindingUserWithId() {
        // given
        User user = UserTestUtil.getUser1();
        int id = saveUserFromService(user).getId();

        // when
        Optional<User> result = userService.getUserById(id);

        // then
        assertTrue(result.isPresent());
        assertTrue(UserTestUtil.isSameExceptForPassword(user, result.get()));
    }

    @Test
    @DisplayName("User found with email should be valid")
    void testFindingUserWithEmail() {
        // given
        User user = UserTestUtil.getUser1();
        saveUserFromService(user);

        // when
        Optional<User> result = userService.getUserByEmail(user.getEmail());

        // then
        assertTrue(result.isPresent());
        assertTrue(UserTestUtil.isSameExceptForPassword(user, result.get()));
    }

    @Test
    @DisplayName("User should be able to sign in with valid email and password")
    void testLogin() {
        // given
        User user = UserTestUtil.getUser1();
        saveUserFromService(user);

        // when
        SignInResultDto dto = userService.login(user.getEmail(), user.getPassword());

        // then
        assertTrue(dto.ok());
        assertTrue(UserTestUtil.isSameExceptForPassword(user, dto.user()));
        assertNull(dto.message());
    }

    @Test
    @DisplayName("Log in should fail with invalid email")
    void failWithInvalidEmail() {
        // given
        User user = UserTestUtil.getUser1();
        saveUserFromService(user);

        // when
        SignInResultDto dto = userService.login("invalid@example.com", user.getPassword());

        // then
        assertFalse(dto.ok());
        assertNull(dto.user());
        assertNotNull(dto.message());
    }

    @Test
    @DisplayName("Log in should fail with invalid password")
    void failWithInvalidPassword() {
        // given
        User user = UserTestUtil.getUser1();
        saveUserFromService(user);

        // when
        SignInResultDto dto = userService.login(user.getEmail(), "invalidPw");

        // then
        assertFalse(dto.ok());
        assertNull(dto.user());
        assertNotNull(dto.message());
    }
}
