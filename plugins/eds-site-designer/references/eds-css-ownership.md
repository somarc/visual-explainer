# EDS CSS Ownership

Use this reference during **COMPILE** and code review. Review from the outside in and assign one owner to every visible relationship.

## Ownership layers

| Layer | Owns | Must not own |
|---|---|---|
| Global baseline | Reset, tokens, fonts, default prose, shared accessibility primitives | One page's signature composition |
| Section composition | Full bleed, section background, container/grid mode, inter-block rhythm, local color/type context | Reusable block internals |
| Authored prose flow | Rhythm among headings, paragraphs, lists, figures, tables, default content | Section backgrounds or custom block layout |
| Block internals | The block's bounded layout, variants, media, controls, and states | Parent section layout or unrelated sibling spacing |

Move a rule to the highest layer that genuinely owns the relationship, but no higher.

## Decision questions

1. Would this relationship exist if the block moved to another ordinary section?
   - Yes: it may be a block internal.
   - No: it likely belongs to the section or page composition.
2. Does the rule coordinate two independent blocks or default-content regions?
   - The section owns it.
3. Does the rule describe normal authored flow regardless of block?
   - Prose or global baseline owns it.
4. Does the rule affect every page using a token or primitive?
   - Global may own it, with blast-radius validation.

## Required patterns

- Express section-level modes through explicit authored section classes or an equally explicit page contract.
- Keep block selectors rooted in the block namespace.
- Let parent layout use `gap`; do not make a child manufacture external spacing.
- Put full-bleed and section clipping on the section owner rather than negative block margins.
- Document deliberate cross-layer exceptions and their applicability boundary.

## Reject these patterns

```css
/* Block reaches into parent composition. */
.section:has(.feature-cards) { ... }
.feature-cards-container .section { ... }

/* One block owns its relationship with whatever follows. */
.feature-cards { margin-bottom: 8rem; }

/* Child count secretly selects a page mode. */
.section > div:nth-child(3) { ... }
```

Selectors such as `:has()` are not categorically forbidden; reject them when they hide ownership or infer an authorable mode from incidental placement.

## Ownership ledger

Record visible decisions before implementation:

| Visual relationship | Owner | Authored signal | Selector/file | Width states | Content fallback | Evidence |
|---|---|---|---|---|---|---|

If two layers claim the same relationship, resolve the contract before adding specificity.

## Blast-radius validation

- Global change: representative pages and shared primitives.
- Section change: all pages using that section class and mixed-content states.
- Prose change: default-content combinations and block boundaries.
- Block change: variants, authored edge cases, and every containing section mode.
