package io.yeahx4.portpolent.dto.user;

public record SignUpDto(
        String email,
        String handle,
        String username,
        String password
) {
}
