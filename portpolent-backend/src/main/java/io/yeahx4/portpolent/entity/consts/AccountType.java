package io.yeahx4.portpolent.entity.consts;

import lombok.Getter;

@Getter
public enum AccountType {
    OWN("ACC_TYPE_OWN"),
//    NAVER("ACC_TYPE_NAVER"),
    GOOGLE("ACC_TYPE_GOOGLE"),
    GITHUB("ACC_TYPE_GITHUB");

    private final String type;

    AccountType(String accType) {
        this.type = accType;
    }
}
