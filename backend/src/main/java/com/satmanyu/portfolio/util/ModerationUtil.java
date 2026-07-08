package com.satmanyu.portfolio.util;

import java.util.List;
import java.util.regex.Pattern;

/**
 * Lightweight, editable content filter — mirrors frontend/src/contentFilter.js.
 * Kept as a backend check too, since someone could call the API directly and
 * skip the frontend entirely (e.g. via Postman or curl).
 *
 * Keep this list roughly in sync with the frontend one so the behaviour matches.
 */
public class ModerationUtil {

    private static final List<String> FLAGGED_WORDS = List.of(
            "idiot", "stupid", "nonsense", "shut up"
            // add more words here as needed
    );

    private ModerationUtil() {}

    public static boolean isAbusive(String text) {
        if (text == null || text.isBlank()) return false;
        String lower = text.toLowerCase();
        for (String word : FLAGGED_WORDS) {
            if (word.contains(" ")) {
                if (lower.contains(word)) return true;
            } else if (Pattern.compile("\\b" + Pattern.quote(word) + "\\b").matcher(lower).find()) {
                return true;
            }
        }
        return false;
    }
}
