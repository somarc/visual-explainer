---
name: eds-site-designer
description: Create visually distinctive AEM Edge Delivery Services pages by forming and locking an aesthetic direction before translating it into authorable blocks, explicit section composition, correctly owned CSS, accessible behavior, responsive continuity, and browser evidence. Use for EDS art direction, page or block design, screenshot/design translation, visual prototypes, aesthetic hardening, or when an EDS result feels generic or AI-constructed.
license: MIT
compatibility: Works best alongside visual-explainer v0.10.0+ and browser access. Production compilation requires an AEM Edge Delivery Services repository.
metadata:
  author: somarc
  version: "0.1.0"
---

# EDS Site Designer

Create the strong idea first. Then make EDS carry it faithfully.

This skill uses Visual Explainer as the design director, EDS as the compiler and runtime, and responsive browser review as the fidelity gate. It exists because a correct, authorable, performant page can still feel generic. Aesthetic direction must be formed before implementation constraints turn every idea into the same hero, card grid, and stack.

## Core thesis

EDS agents are already good at implementation correctness. Correctness does not create taste.

Visual Explainer produces stronger single-page experiences because it decides composition, typography, rhythm, color logic, hierarchy, and signature moments before writing production code. Preserve that decision model, then translate the approved direction into native EDS blocks, sections, content contracts, and correctly owned CSS.

```text
DIRECT -> LOCK -> COMPILE -> CRITIQUE
  taste    intent     EDS       fidelity
```

Do not collapse these stages into one generic implementation pass. EDS constraints determine how an idea is carried, not whether the idea is allowed to exist.

## Non-negotiable stage contract

**Aesthetic direction MUST be formed, reviewed, and explicitly locked before it is compiled into EDS sections, blocks, and CSS. Compilation implements a direction; it does not discover one through accumulated overrides.**

**These constraints protect creative intent and authorability; they MUST NOT be used to normalize every page into the same composition, suppress a deliberate exception, or replace design judgment with a checklist.**

## Precedence

Apply direction in this order:

1. The user's explicit goals, references, and vetoes.
2. Repository instructions and the project's existing design system.
3. The locked aesthetic contract for this page or experience.
4. EDS authoring, ownership, accessibility, and runtime constraints.
5. This skill's defaults and examples.

Project design tokens provide the instruments. They do not choose the composition.

## Stage 1 — DIRECT

Form the aesthetic before editing production files.

### Discover first

Inspect only what is relevant, but do not design from generic memory. Read:

- repository instructions (`AGENTS.md` and local equivalents);
- `styles/styles.css`, `styles/fonts.css`, and global scripts;
- existing section classes and page templates;
- related block CSS, JS, tests, and authored examples;
- the live page at representative widths;
- supplied screenshots, brand sources, and reference URLs.

Reconstruct the project's design decisions rather than copying isolated declarations. Identify what is intentional, what is boilerplate, and what may be changed.

### State the direction

Before HTML or production CSS, define the decisions that materially distinguish this experience. Do not fill fields ceremonially. The core contract requires the expressive job, visual thesis, dominant composition, signature moment, responsive transformation, and one plausible generic alternative that was explicitly rejected. Add the remaining fields only when they affect the direction:

- **Emotional register** — what the page should feel like.
- **Visual thesis** — one sentence connecting form to content.
- **Content metaphor** — the idea that shapes the composition, if one is useful.
- **Dominant composition** — the page's spatial argument, not a list of components.
- **Signature moment** — the visual interaction or composition readers should remember.
- **Typography tension** — how display, body, label, and technical type roles relate.
- **Color logic** — what each principal color does; do not provide an arbitrary palette.
- **Density and rhythm** — where the page breathes and where it becomes information-dense.
- **Surface and depth model** — which content earns elevation and which remains flat.
- **Motion principle** — motion only when it clarifies hierarchy or state.
- **Responsive transformation** — how the idea changes, not merely how columns stack.
- **Explicit anti-patterns** — what would make this direction generic.
- **Rejected generic alternative** — the plausible safe/default composition not chosen and why.

Use `./references/aesthetic-contract.md` and `./templates/aesthetic-contract.md`.

### Produce a design plate

Load the `visual-explainer` skill and create a self-contained HTML design plate for page or block direction. The plate is a visual source of truth, not production EDS source. Skip it only for a narrowly scoped text-only review or when the user explicitly declines visual proof.

- Show the decisive compositions and representative content states.
- Use realistic content rather than lorem ipsum.
- Demonstrate wide and narrow intent when the transformation is non-obvious.
- Make the signature moment visible.
- Do not disguise a generic layout with decorative effects.
- Tie every locked aesthetic invariant to an observable region or state in the plate or supplied reference.
- Do not edit production files during a direction-only request.

If the direction is uncertain in a way that materially changes the architecture, present a small number of meaningfully different plates. Do not create cosmetic palette variants and call them directions.

## Stage 2 — LOCK

Turn the selected direction into testable invariants before production implementation.

Assign each invariant an ID and record:

| Field | Meaning |
|---|---|
| Invariant | The visual or experiential truth that must survive |
| Why | How it supports the page thesis |
| Evidence | Plate region, reference, or approved description |
| Allowed adaptation | What may change across content and widths |
| Failure signal | What would indicate genericization or loss |

Examples:

- `A1`: The repository boundary reads as a physical transition, not two adjacent cards.
- `A2`: Display typography and identifier typography remain visibly different roles.
- `A3`: Mobile preserves the reveal sequence; it does not expose every panel at equal weight.

When a user is present, stop for approval before compilation unless they explicitly requested a one-pass implementation. In a one-pass request, still write the aesthetic lock into the working plan before editing source.

## Stage 3 — COMPILE

Translate the locked direction into an EDS-native content and ownership contract. Do not paste the design plate into production.

### Model authoring before decoration

For every proposed section or block, define:

- the authored table or default-content shape;
- required and optional fields;
- block variants and how authors select them;
- the expected pre-decoration DOM;
- the decorated DOM and semantic changes;
- missing, extra, empty, malformed, and long-content behavior;
- whether JS is required for behavior or only being used to compensate for CSS.

Use `./references/eds-content-model.md`.

### Choose the correct composition owner

Review from the outside in:

1. **Global baseline** — reset, tokens, fonts, default prose, shared primitives.
2. **Section composition** — backgrounds, full bleed, inter-block relationships, page-level rhythm.
3. **Prose flow** — headings, paragraphs, lists, figures, tables, default-content spacing.
4. **Block internals** — the reusable component's own layout, variants, and interaction states.

**Every visible spatial relationship MUST have one explicit CSS owner: global baseline, section composition, authored prose flow, or block internals. A block MUST NOT own its parent section's layout or infer section intent from DOM ancestry.**

Use `./references/eds-css-ownership.md` and `./templates/eds-ownership-ledger.md`.

Non-negotiable ownership rules:

- Section-level composition, variants, backgrounds, density, and layout modes MUST be expressed through explicit section classes or an equally explicit section contract; they MUST NOT depend on incidental block placement or child-count selectors.
- Block CSS must not reach up into `.section`, `.section-wrapper`, or unrelated siblings.
- A block must not own the space between itself and an unrelated neighbor.
- Full-bleed treatment belongs to the section or page composition layer, not a negative-margin block hack.
- Reuse an existing block only when its content and behavior contract actually fit. Do not erase a signature composition to avoid creating a justified new block.
- Keep global selectors narrow. A one-page visual direction is not permission to change every page.

### Preserve authorability and progressive enhancement

- The authored document remains the source of content truth.
- Decoration may restructure for semantics and behavior, but must not manufacture essential editorial content.
- Links, headings, lists, and meaningful media remain usable if enhancement fails.
- Optional content does not leave empty visual machinery.
- Long labels, missing images, extra rows, and partial authoring receive deliberate fallbacks.

EDS implementations MUST remain authorable under realistic variation: missing or extra content, long text, reordered blocks, repeated modules, imperfect rich text, and absent media MUST degrade coherently without requiring editorial knowledge of implementation internals.

### Compile responsive intent

Use `./references/responsive-art-direction.md`.

- Derive breakpoints from content pressure and the project's existing breakpoint language.
- Model wide, intermediate, and narrow states; test the continuity between them.
- Preserve hierarchy and the signature moment at every width.
- Do not translate desktop art direction into `grid-template-columns: 1fr` and call it complete.
- Avoid fixed heights unless the content contract and overflow behavior make them safe.
- Validate the real containing block for sticky or absolute behavior.

Responsive quality MUST be judged as continuous composition across widths, not as isolated desktop and mobile screenshots. Review MUST include at least one transition width where wrapping, reflow, and interaction constraints are most likely to fail.

Sticky behavior MUST be verified in the rendered browser against its actual scroll container, overflow ancestors, available scroll range, offsets, viewport heights, and keyboard interaction. A declaration of `position: sticky` is not evidence that sticky behavior works.

### Keep the production shape native

Production output belongs in the owning repository files, commonly:

```text
styles/styles.css
styles/fonts.css
blocks/<block>/<block>.css
blocks/<block>/<block>.js
```

Do not ship production as one self-contained HTML file. Do not use inline styles, inline event handlers, page-specific CSS monoliths, or new runtime dependencies merely to reproduce a static visual effect.

## Stage 4 — CRITIQUE

Review the rendered EDS page against both the aesthetic lock and the EDS contract. Passing lint and accessibility checks is necessary, not sufficient.

### Fidelity review

For each aesthetic invariant, classify the implementation:

- **Preserved** — the intended effect survives.
- **Adapted intentionally** — changed for a documented content, accessibility, or responsive reason.
- **Degraded** — weakened accidentally during implementation.
- **Lost** — absent or replaced by a generic pattern.

Use `./references/visual-fidelity-review.md` and `./templates/visual-fidelity-report.md`.

### Browser and content evidence

Validate the actual rendered page, not only isolated block markup:

- representative desktop, tablet/intermediate, and mobile widths;
- continuity on both sides of every breakpoint;
- keyboard order, focus visibility, names, roles, and states;
- reduced motion and zoom/text resizing;
- horizontal overflow and long unbroken values;
- missing, partial, extra, and malformed authored content;
- actual sticky containment and overlap behavior;
- console and network failures;
- print only when the experience requires it;
- regressions proportional to the CSS ownership blast radius.

Capture focused evidence for the signature moment and any high-risk responsive behavior.

Semantic HTML and accessible interaction are design constraints, not post-design remediation. Native semantics, keyboard operation, visible focus, contrast, target size, and reduced-motion behavior MUST preserve the intended hierarchy and affordance.

### No silent genericization

When EDS or accessibility constraints require a visual change, record the trade-off and preserve the underlying intent another way. Do not silently replace a difficult composition with a familiar card grid.

Visual fidelity review MUST compare the rendered result with the locked direction, including hierarchy, rhythm, density, imagery, crop behavior, alignment, and states. Pixel similarity alone is insufficient; unexplained visual drift is a defect.

## Reference routing

Read only what the current stage needs:

| Need | Read |
|---|---|
| Form or assess a direction | `./references/aesthetic-contract.md` |
| Model authored block/default content | `./references/eds-content-model.md` |
| Assign CSS and spacing ownership | `./references/eds-css-ownership.md` |
| Design responsive transformations | `./references/responsive-art-direction.md` |
| Compare implementation with the lock | `./references/visual-fidelity-review.md` |
| Create the visual design plate | Load `visual-explainer` and its routed references |

## Delivery rules

- Keep design plates and visual reviews separate from production source edits.
- Use a browser-visible artifact for inherently visual direction or fidelity work.
- Keep implementation plans concise in chat; use semantic tables for ownership ledgers with four or more rows.
- Cite repository files, rendered URLs, and viewport evidence for implementation claims.
- Do not claim human taste from automation alone. Preserve a human selection point at the lock whenever the workflow allows it.

## Final checklist

Before calling an EDS visual implementation complete, verify:

- the page has a specific visual thesis and signature moment;
- approved aesthetic invariants are preserved or intentionally adapted;
- the result would not fit an unrelated site by changing only copy and colors;
- authored content, variants, and malformed states are defined;
- global, section, prose, and block CSS each own the correct relationships;
- blocks do not style parent sections or unrelated siblings;
- responsive states preserve hierarchy across breakpoint continuity;
- accessibility semantics and progressive enhancement survive decoration;
- browser evidence covers the real page and risky content states;
- no production-only workaround has leaked back into and weakened the design direction;
- the implementation is both visually convincing and EDS-native.
