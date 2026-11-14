// Serializes structured data for a <script type="application/ld+json"> tag. Escaping "<" keeps
// a stray "</script>" in any string from ending the tag early.
export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
