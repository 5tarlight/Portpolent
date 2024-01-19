package io.yeahx4.portpolent.user;

import io.yeahx4.portpolent.service.user.UserService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
@SpringBootTest
@WithMockUser
@Transactional
public class UserControllerTest {
    @Autowired
    MockMvc mvc;

    @Autowired(required = false)
    UserService userService;

    private final String validUserBody = "{"
            + "\"email\": \"test@mail.com\","
            + "\"handle\": \"test\","
            + "\"username\": \"TestUser\","
            + "\"password\": \"Strong123**\"}";

    @Test
    @DisplayName("Can sign up")
    void idealSignUp() throws Exception {
        mvc.perform(
                post("/user/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(validUserBody)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("Success"))
                .andExpect(jsonPath("$.data.id").isNumber())
                .andExpect(jsonPath("$.data.createdAt").isNotEmpty())
                .andExpect(jsonPath("$.data.updatedAt").isNotEmpty())
                .andExpect(jsonPath("$.data.email").value("test@mail.com"))
                .andExpect(jsonPath("$.data.handle").value("test"))
                .andExpect(jsonPath("$.data.username").value("TestUser"))
                .andExpect(jsonPath("$.data.password").doesNotExist())
                .andExpect(jsonPath("$.message").isEmpty());
    }

    @Test
    @DisplayName("Cannot sign up with invalid email")
    void signupWithInvalidEmail() throws Exception {
        String invalidEmailUserBody = "{"
                + "\"email\": \"invalidmail\","
                + "\"handle\": \"test\","
                + "\"username\": \"TestUser\","
                + "\"password\": \"Strong123**\"}";

        mvc.perform(
                post("/user/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(invalidEmailUserBody)
        )
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.data").isEmpty())
                .andExpect(jsonPath("$.message.length()").value(1))
                .andExpect(jsonPath("$.status").value("Error"));
    }

    @Test
    @DisplayName("Cannot sign up with invalid handle")
    void signupWithInvalidHandle() throws Exception {
        String invalidHandleUserBody = "{"
                + "\"email\": \"test@mail.com\","
                + "\"handle\": \"Invalid\","
                + "\"username\": \"TestUser\","
                + "\"password\": \"Strong123**\"}";

        mvc.perform(
                        post("/user/signup")
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON)
                                .characterEncoding("UTF-8")
                                .content(invalidHandleUserBody)
                )
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.data").isEmpty())
                .andExpect(jsonPath("$.message.length()").value(1))
                .andExpect(jsonPath("$.status").value("Error"));
    }

    @Test
    @DisplayName("Cannot sign up with invalid username")
    void signupWithInvalidUsername() throws Exception {
        String invalidUsernameUserBody = "{"
                + "\"email\": \"test@mail.com\","
                + "\"handle\": \"test\","
                + "\"username\": \"Test^^\","
                + "\"password\": \"Strong123**\"}";

        mvc.perform(
                        post("/user/signup")
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON)
                                .characterEncoding("UTF-8")
                                .content(invalidUsernameUserBody)
                )
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.data").isEmpty())
                .andExpect(jsonPath("$.message.length()").value(1))
                .andExpect(jsonPath("$.status").value("Error"));
    }

    @Test
    @DisplayName("Cannot sign up with invalid password")
    void signupWithInvalidPassword() throws Exception {
        String invalidPwUserBody = "{"
                + "\"email\": \"test@mail.com\","
                + "\"handle\": \"test\","
                + "\"username\": \"TestUser\","
                + "\"password\": \"weak1234\"}";

        mvc.perform(
                        post("/user/signup")
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON)
                                .characterEncoding("UTF-8")
                                .content(invalidPwUserBody)
                )
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.data").isEmpty())
                .andExpect(jsonPath("$.message.length()").value(1))
                .andExpect(jsonPath("$.status").value("Error"));
    }

    private void signup() throws Exception {
        mvc.perform(
                post("/user/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(validUserBody)
        );
    }

    @Test
    @DisplayName("Search with handle")
    void searchWithHandle() throws Exception {
        signup();

        mvc.perform(get("/user/handle").param("handle", "test"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("Success"))
                .andExpect(jsonPath("$.data.id").isNumber())
                .andExpect(jsonPath("$.data.createdAt").isNotEmpty())
                .andExpect(jsonPath("$.data.updatedAt").isNotEmpty())
                .andExpect(jsonPath("$.data.email").value("test@mail.com"))
                .andExpect(jsonPath("$.data.handle").value("test"))
                .andExpect(jsonPath("$.data.username").value("TestUser"))
                .andExpect(jsonPath("$.data.password").doesNotExist())
                .andExpect(jsonPath("$.message").isEmpty());
    }

    @Test
    @DisplayName("Search with handle which does not exist")
    void handleNotFound() throws Exception {
        mvc.perform(get("/user/handle").param("handle", "notfound"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.status").value("Fail"))
                .andExpect(jsonPath("$.data").isEmpty())
                .andExpect(jsonPath("$.message").value("No user found"));
    }

    private final String loginBody = "{"
            + "\"email\": \"test@mail.com\","
            + "\"password\": \"Strong123**\"}";

    @Test
    @DisplayName("Can log in")
    void canLogin() throws Exception {
        signup();

        mvc.perform(
                post("/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(loginBody)
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("Success"))
                .andExpect(jsonPath("$.data.id").isNumber())
                .andExpect(jsonPath("$.data.createdAt").isNotEmpty())
                .andExpect(jsonPath("$.data.updatedAt").isNotEmpty())
                .andExpect(jsonPath("$.data.email").value("test@mail.com"))
                .andExpect(jsonPath("$.data.handle").value("test"))
                .andExpect(jsonPath("$.data.username").value("TestUser"))
                .andExpect(jsonPath("$.data.password").doesNotExist())
                .andExpect(jsonPath("$.message").isEmpty());
    }

    @Test
    @DisplayName("Cannot log in with wrong email")
    void loginWithWrongEmail() throws Exception {
        signup();
        String wrongEmail = "{"
                + "\"email\": \"test123@mail.com\","
                + "\"password\": \"Strong123**\"}";

        mvc.perform(
                post("/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(wrongEmail)
        )
                .andExpect(jsonPath("$.status").value("Fail"))
                .andExpect(jsonPath("$.data").isEmpty())
                .andExpect(jsonPath("$.message").value("Invalid email or password"));
    }

    @Test
    @DisplayName("Cannot log in with wrong password")
    void loginWithWrongPwl() throws Exception {
        signup();
        String wrongEmail = "{"
                + "\"email\": \"test@mail.com\","
                + "\"password\": \"Strong123*\"}";

        mvc.perform(
                        post("/user/login")
                                .contentType(MediaType.APPLICATION_JSON)
                                .accept(MediaType.APPLICATION_JSON)
                                .characterEncoding("UTF-8")
                                .content(wrongEmail)
                )
                .andExpect(jsonPath("$.status").value("Fail"))
                .andExpect(jsonPath("$.data").isEmpty())
                .andExpect(jsonPath("$.message").value("Invalid email or password"));
    }

    void login() throws Exception {
        mvc.perform(
                post("/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .characterEncoding("UTF-8")
                        .content(loginBody)
        );
    }
}
