// Lightweight, editable content filter — checks a message for flagged words
// before it's ever sent. No external API, no ML model needed for this.
//
// Add/remove words freely. Keep them lowercase; matching is case-insensitive
// and uses word boundaries so "class" won't match just because it contains "ass".

const FLAGGED_WORDS = [
  'idiot', 'stupid', 'nonsense', 'shut up',
  // add more words here as needed
];

// Customize this — it's what the person sees in the popup.
export const MODERATION_MESSAGE =
  "Let's keep it respectful here 🙂 Feel free to rewrite your message and send it again.";

export function containsAbusiveContent(text) {
  if (!text) return false;
  const lower = text.toLowerCase();
  return FLAGGED_WORDS.some((word) => {
    // \b word boundaries for single words; plain substring check for phrases with spaces
    if (word.includes(' ')) return lower.includes(word);
    const pattern = new RegExp(`\\b${word}\\b`, 'i');
    return pattern.test(lower);
  });
}
