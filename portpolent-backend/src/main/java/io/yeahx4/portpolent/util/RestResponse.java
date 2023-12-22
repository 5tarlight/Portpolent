package io.yeahx4.portpolent.util;

import jakarta.annotation.Nullable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public final class RestResponse<T> {
    private String status;
    @Nullable
    private T data;
    @Nullable
    private String message;

    public static <T> RestResponse<T> success(T data) {
        return new RestResponse<>(ResponseStatus.SUCCESS, data, null);
    }

    public static <T> RestResponse<T> error(String message) {
        return new RestResponse<>(ResponseStatus.ERROR, null, message);
    }

    public static <T> RestResponse<T> fail(String message) {
        return new RestResponse<>(ResponseStatus.FAIL, null, message);
    }
}
