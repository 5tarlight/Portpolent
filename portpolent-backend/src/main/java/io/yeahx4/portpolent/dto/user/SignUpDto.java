package io.yeahx4.portpolent.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record SignUpDto(
        @NotBlank(message = "Email Required")
        @Email
        @Size(max = 100)
        String email,

        @Size(min = 4, max = 20)
        @Pattern(regexp = "[a-z0-9]{4,20}")
        @NotBlank(message = "Handle Required")
        String handle,

        @Size(min = 2, max = 10)
        @Pattern(regexp = "[\\w가-힣]{2,10}")
        @NotBlank(message = "Username Required")
        String username,

        @NotBlank(message = "Password Required")
        String password
) {
}
