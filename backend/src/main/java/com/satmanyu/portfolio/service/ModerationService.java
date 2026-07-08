package com.satmanyu.portfolio.service;

import com.satmanyu.portfolio.util.ModerationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class ModerationService {

    private static final Logger log = LoggerFactory.getLogger(ModerationService.class);

    private static final String SYSTEM_PROMPT = """
            You are a strict content moderator for a portfolio site's contact form.
            Reply with exactly one word and nothing else:
            ABUSIVE - if the message contains insults, harassment, hate speech, or abusive
                      language directed at a person.
            OK      - otherwise.
            """;

    private final ChatClient chatClient;

    // Spring auto-configures a ChatClient.Builder from the spring.ai.openai.* properties
    // (which we've pointed at Groq's endpoint) - we just build a client from it once.
    public ModerationService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    /**
     * Returns true if the message should be blocked.
     * Falls back to the simple keyword filter if the Groq API call fails for any
     * reason (missing key, network issue, rate limit) so the contact form never
     * breaks entirely just because the AI call didn't go through.
     */
    public boolean isAbusive(String text) {
        if (text == null || text.isBlank()) return false;

        try {
            String reply = chatClient.prompt()
                    .system(SYSTEM_PROMPT)
                    .user(text)
                    .call()
                    .content();

            if (reply == null) return ModerationUtil.isAbusive(text);
            return reply.trim().toUpperCase().startsWith("ABUSIVE");

        } catch (Exception e) {
            log.warn("Groq moderation call failed, falling back to keyword filter: {}", e.getMessage());
            return ModerationUtil.isAbusive(text);
        }
    }
}
