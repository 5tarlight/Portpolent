package io.yeahx4.portpolent.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record SignUpDto(
        @Email
        @Size(max = 100)
        @NotNull
        String email,

        @Size(min = 4, max = 20)
        @Pattern(regexp = "[a-z0-9]{4,20}")
        @NotNull
        String handle,

        @Size(min = 2, max = 10)
        @Pattern(regexp = "[\\w가-힣]{2,10}")
        @NotNull
        String username,

        @NotNull
        String password
) {
}
