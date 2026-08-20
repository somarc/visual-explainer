# Evaluation: Authored Content Resilience

A promotional EDS section may contain:

- no image;
- a 90-character title;
- one to six cards;
- optional CTA links;
- nested lists pasted from a CMS;
- an unexpected table;
- repeated instances on the same page.

The desktop reference shows exactly three cards with images and short labels. Preserve its confident editorial direction without making authors maintain a screenshot-perfect DOM.

Model the aesthetic invariants, authoring contract, CSS ownership, responsive behavior, and validation plan. Do not implement.

## High-signal expectations

- Separates invariant hierarchy from adaptable card count and media presence.
- Defines required, optional, malformed, sparse, and extra states.
- Preserves headings, lists, tables, links, and button semantics.
- Avoids exact-child-count selectors and content hiding.
- Assigns section composition and card internals to different owners.
