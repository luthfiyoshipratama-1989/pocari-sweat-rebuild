/**
 * Safe JSON-LD serializer.
 *
 * JSON.stringify() does NOT escape `<`, `>` or `&`. When the result is inlined
 * into a <script type="application/ld+json"> block via dangerouslySetInnerHTML,
 * any `</script>` inside a string value terminates the script element and turns
 * the remainder into executable markup (a stored-XSS class bug).
 *
 * Escaping to \u003c / \u003e / \u0026 keeps the JSON semantically identical
 * (these are valid JSON escapes) while making a script-context breakout impossible.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
