package io.yeahx4.portpolent;

import io.yeahx4.portpolent.controller.HelloController;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(HelloController.class)
@WithMockUser()
public class HelloControllerTest {
    @Autowired
    MockMvc mvc;

    @Test
    @DisplayName("Is controller test working?")
    void helloTest() throws Exception {
        mvc.perform(get("/hello/"))
                .andExpect(status().isOk())
                .andExpect(content().string("Hello World"));
    }
}
