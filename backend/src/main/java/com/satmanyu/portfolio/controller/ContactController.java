package com.satmanyu.portfolio.controller;

import com.satmanyu.portfolio.model.ContactMessage;
import com.satmanyu.portfolio.model.ContactMessageRepository;
import com.satmanyu.portfolio.service.ModerationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageRepository repository;
    private final ModerationService moderationService;

    public ContactController(ContactMessageRepository repository, ModerationService moderationService) {
        this.repository = repository;
        this.moderationService = moderationService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> submit(@Valid @RequestBody ContactMessage message) {
        if (moderationService.isAbusive(message.getMessage())) {
            // 422 Unprocessable Entity: request was well-formed, but rejected on content grounds.
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
                    .body(Map.of("status", "flagged", "message", "fuck you bitch"));//"You are not responding well. Goodbye."
        }
        repository.save(message);
        return ResponseEntity.ok(Map.of("status", "success", "message", "Thanks for reaching out! I'll get back to you soon."));
    }
}
