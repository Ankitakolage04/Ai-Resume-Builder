package com.resume.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Resume AI Backend is running successfully. <br> Please access the Frontend at: <a href='http://localhost:5173'>http://localhost:5173</a>";
    }
}
