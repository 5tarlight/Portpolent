package io.yeahx4.portpolent;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PortpolentBackendApplicationTests {
    @Test
    void testShouldWork() {
        int a = 1;
        int b = 2;
        int c = a + b;
        Assertions.assertEquals(c, 3);
    }
}
