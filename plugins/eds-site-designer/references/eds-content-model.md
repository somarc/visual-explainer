# EDS Content Model

Use this reference during **COMPILE** to translate the locked direction into authorable content and resilient decorated DOM.

## Start with editorial meaning

Model what an author understands: heading, supporting copy, media, evidence, action, comparison, quote, or sequence. Do not make authors operate layout machinery or know selector-sensitive child counts.

## Block decision

Reuse an existing block when its content semantics, optional states, behavior, and visual responsibility match. Create or extend a block when reuse would:

- distort the locked signature composition;
- overload a generic block with page-specific ancestry rules;
- require authors to enter implementation-only markers;
- produce fragile positional selectors;
- conflate section composition with reusable internals.

Reusability follows a coherent contract. It is not measured by how many unrelated presentations one block can absorb.

## Content contract template

For each block or default-content region, record:

| Concern | Contract |
|---|---|
| Editorial purpose | What the author is communicating |
| Authored shape | Rows, columns, default content, metadata, or links |
| Required fields | Minimum meaningful content |
| Optional fields | What may be absent without empty machinery |
| Variants | Explicit author-selectable options |
| Source DOM | Expected markup before decoration |
| Decorated DOM | Semantic structure and classes after decoration |
| Enhancement | CSS-only, progressive JS, or required behavior |
| Fallback | Experience if decoration or optional data is absent |

## Authored variation matrix

At minimum, reason about:

- missing media;
- empty or absent CTA;
- short and very long headings;
- sparse and extra items;
- duplicated modules;
- reordered blocks;
- nested lists and unexpected rich text;
- tables or long unbroken values;
- invalid links or incomplete metadata;
- localization expansion.

Do not hide malformed content to make a screenshot pass. Preserve meaningful content and degrade the presentation coherently.

## Decoration rules

- Preserve native headings, links, lists, figures, tables, buttons, and disclosures when those semantics apply.
- Generate wrappers for layout, not essential editorial meaning.
- Avoid correctness that depends on exact `nth-child` position or child count.
- Avoid moving DOM order solely to match a wide-screen visual order if it damages reading or focus order.
- Keep interactive state names, controls, and live updates understandable without visual styling.

## Content-first acceptance

The model is ready when an author can understand the contract without reading CSS and the experience remains meaningful under partial authoring.
