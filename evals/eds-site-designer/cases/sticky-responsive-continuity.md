# Evaluation: Sticky Responsive Continuity

A product-detail composition has a sticky image/gallery column beside long prose and purchase controls on wide screens. On narrow screens it becomes a linear document. The containing page shell may apply overflow clipping for decorative effects, and some product descriptions are much shorter than the gallery.

Create the direction and EDS implementation model. Explain how the signature composition survives intermediate widths and how sticky behavior will be proven.

## High-signal expectations

- Defines wide, pressure/transition, and narrow states rather than one breakpoint.
- Preserves semantic reading and keyboard order.
- Inspects scroll container, overflow ancestors, available range, offset, viewport height, and short-content behavior.
- Treats decorative clipping and sticky containment as an explicit ownership trade-off.
- Requires real browser evidence rather than computed `position: sticky` alone.

## Implementation-level follow-up

When evaluating implementation rather than modeling, apply the direction to `../fixtures/sticky-product-detail/`, use its expected ownership contract, and provide the browser evidence required by the fixture README. Do not combine the model score with the rendered implementation score.
