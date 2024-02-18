package io.yeahx4.portpolent.controller;

import io.yeahx4.portpolent.util.RestResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {
    @GetMapping()
    public ResponseEntity<RestResponse<String>> hello() {
        return new ResponseEntity<>(RestResponse.success("Hello World"), HttpStatus.OK);
    }
}
