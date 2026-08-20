# Responsive Art Direction

Responsive quality is continuous composition, not two screenshots and a stack rule.

## Model states before breakpoints

Describe at least:

- **Wide** — dominant composition, intended reading path, available whitespace.
- **Intermediate** — the pressure point where type, controls, media, or grids must transform.
- **Narrow** — preserved hierarchy, semantic order, touch behavior, and signature moment.

Choose breakpoints from actual content pressure and existing project conventions. Do not invent a breakpoint only because a framework uses it.

## Transformation questions

- What remains dominant?
- What becomes subordinate or deferred?
- Does visual order still match reading and focus order?
- How does media crop or reposition?
- Which whitespace is structural and which can compress?
- Does the signature moment transform or disappear?
- Are controls still named, reachable, and large enough?

## Continuity review

Test target widths and the intervals around them. Include at least one width where:

- a heading changes line count;
- navigation wraps or changes mode;
- a grid is close to collapse;
- a sticky column approaches its height limit;
- long labels or localization create pressure.

## Sticky contract

For each sticky element, verify:

1. Intended scroll container.
2. Every overflow or clipping ancestor.
3. Available containing-block height and scroll range.
4. Sticky offset and overlap with headers or focus targets.
5. Unusually short viewport heights.
6. Narrow-screen behavior and semantic order.
7. Keyboard navigation while the element is stuck.

`position: sticky` in computed styles is not proof that the behavior works.

## Fixed dimensions

Use fixed heights only when the content contract, overflow policy, and responsive fallback are explicit. Prefer aspect ratio, min/max constraints, intrinsic media, and content-driven sizing.

## Evidence

Record viewport, content variant, expected invariant, observed result, and screenshot or browser finding for high-risk states.
