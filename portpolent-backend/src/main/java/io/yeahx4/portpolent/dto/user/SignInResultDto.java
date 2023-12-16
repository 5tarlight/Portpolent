package io.yeahx4.portpolent.dto.user;

import io.yeahx4.portpolent.entity.User;

public record SignInResultDto(
    boolean ok,
    User user,
    String message
) {
}
