---
name: compile-eds-page
description: Implement a locked visual direction as an authorable, correctly owned AEM Edge Delivery Services experience
---

Load the `eds-site-designer` skill and run **COMPILE** for: $@

## Gate

Require an identifiable aesthetic contract with `Status: locked`, a revision, and a recorded approval/decision maker, plus its EDS ownership ledger. If either is absent or still proposed, do not mutate source: route to `create-eds-direction` or `model-eds-page` and stop.

The only exception is explicit user authorization for a one-pass implementation. Record that exact authorization, write the contract and ownership ledger into the working plan, mark the lock as authorized by that one-pass decision, and only then edit source. The compile command must never invent and self-approve a direction merely because implementation was requested.

## Implementation

- Follow repository instructions and existing test/style conventions.
- Preserve the locked signature moment and hierarchy.
- Implement authored content and malformed-state fallbacks before polishing only the pristine case.
- Keep global, section, prose, and block CSS in their declared owners.
- Use explicit section classes for section composition.
- Keep block decoration progressively enhanced and semantically correct.
- Model and test wide, transition, and narrow states.
- Verify actual sticky containment where relevant.

## Completion

Run focused tests and browser validation, then begin CRITIQUE. Do not report success from linting or screenshots alone; report aesthetic invariants and EDS integrity separately.
