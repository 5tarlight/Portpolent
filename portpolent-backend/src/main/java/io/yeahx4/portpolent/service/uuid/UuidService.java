package io.yeahx4.portpolent.service.uuid;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UuidService {
    public String getRandomUuid() {
        return UUID.randomUUID().toString();
    }
}
