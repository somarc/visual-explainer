# Visual Fidelity Review

Use this reference during **CRITIQUE**. Fidelity means preserving the locked design decisions while respecting real content, semantics, and responsive behavior. It is not screenshot theater.

## Review order

1. First-viewport hierarchy and dominant composition.
2. Signature moment and interaction state.
3. Typography roles, measure, and rhythm.
4. Density, whitespace, surface, and depth.
5. Imagery, crop behavior, alignment, and color logic.
6. Responsive transformations and transition widths.
7. Authored variation and malformed content.
8. Semantics, keyboard behavior, and motion preferences.

## Invariant verdicts

| Verdict | Meaning |
|---|---|
| Preserved | Intent survives implementation and content variation |
| Adapted intentionally | Changed for a documented responsive, authoring, or accessibility reason while preserving purpose |
| Degraded | Weakened accidentally; implementation correction needed |
| Lost | Missing or replaced by a generic pattern |

## Defect versus direction change

Treat unexplained drift, generic substitutions, incorrect ownership, and broken responsive behavior as implementation defects. Reopen direction only when new evidence invalidates the lock.

## Required comparison matrix

Include:

- a representative desktop width;
- a narrow mobile width;
- at least one transition width;
- realistic long or missing content;
- each meaningful interaction state;
- actual sticky behavior where present.

Compare hierarchy, rhythm, density, crop, alignment, state, and semantic affordance—not only coordinates.

## Intentional deviations

For each deviation, record:

- locked invariant;
- observed conflict;
- authoring, accessibility, performance, or responsive evidence;
- chosen adaptation;
- why the underlying intent still survives;
- validation performed.

## Severity

- **Blocker** — destroys the thesis, signature moment, semantics, or essential authorability.
- **Major** — material hierarchy, responsive, ownership, or accessibility loss.
- **Moderate** — visible rhythm, type, crop, or state drift.
- **Minor** — local polish with no contract impact.

Do not let a large minor-difference count distract from one lost invariant.
