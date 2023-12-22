package io.yeahx4.portpolent.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record SignInDto(
        @NotBlank
        @Email
        String email,

        @NotBlank
        String password
) {
}
