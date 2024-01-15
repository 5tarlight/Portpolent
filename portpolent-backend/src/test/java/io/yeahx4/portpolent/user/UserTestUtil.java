package io.yeahx4.portpolent.user;

import io.yeahx4.portpolent.entity.User;

public final class UserTestUtil {
    public static User getUser1() {
        return User.builder()
                .email("test1@mail.com")
                .handle("handle")
                .username("User1")
                .password("password")
                .build();
    }

    public static boolean isSameExceptForPassword(User user1, User user2) {
        return user1.getEmail().equals(user2.getEmail()) &&
                user1.getHandle().equals(user2.getHandle()) &&
                user1.getAccountType() == user2.getAccountType();
    }

    public static boolean isSameIncludingPassword(User user1, User user2) {
        return isSameExceptForPassword(user1, user2)
                && user1.getPassword().equals(user2.getPassword());
    }
}
