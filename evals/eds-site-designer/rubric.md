# Evaluation Rubric

Score each dimension from 0–2.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Direction before implementation | Starts with selectors/components | Mentions direction but does not lock it | Forms a specific direction and testable lock before compilation |
| Aesthetic specificity | Generic visual vocabulary | Some content connection | Composition, type, rhythm, color, and signature moment arise from the subject |
| Observable visual evidence | No plate/reference evidence | Direction mentions references generally | Locked invariants point to observable plate/reference regions and reject a plausible generic alternative |
| Human selection point | No review gate | Implied review | Explicit lock/revise/reject decision or documented one-pass lock |
| Authoring contract | Assumes pristine DOM | Covers common optional fields | Defines authored shape plus malformed, long, sparse, extra, and reordered states |
| CSS ownership | Mixed or parent-reaching | Mostly scoped | One explicit global/section/prose/block owner for every relationship |
| Responsive continuity | Desktop plus stack rule | Target widths only | Wide/intermediate/narrow model plus transition-pressure evidence |
| Sticky/positioning rigor | Declaration only | Mentions ancestor risk | Verifies real container, overflow, range, offset, height, and keyboard behavior |
| Semantics/accessibility | Post-design checklist | Basic semantics | Semantics and interaction actively preserve the aesthetic hierarchy |
| Fidelity review | Pixel-only or absent | General visual check | Invariant-by-invariant verdicts and documented intentional adaptations |
| Anti-genericization | Normalizes to standard blocks | Preserves some distinction | Protects signature intent without using it to evade EDS constraints |

## Critical failures

Regardless of score, fail a case if the response:

- edits production before forming a direction when no one-pass authorization exists;
- lets block CSS style its parent section or unrelated siblings;
- requires exact child counts for correctness without an authored contract;
- treats `position: sticky` as validated from CSS alone;
- hides authored content to preserve a reference screenshot;
- replaces a difficult signature composition with a generic card grid without documenting the loss.
