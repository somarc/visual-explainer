---
name: review-eds-fidelity
description: Compare a rendered AEM Edge Delivery Services implementation with its locked aesthetic direction and EDS contracts
---

Load the `eds-site-designer` skill and run **CRITIQUE** for: $@

## Evidence

- Read the locked aesthetic contract and ownership ledger.
- Inspect the actual source owners and authored content shape.
- Open the rendered EDS page in the browser.
- Validate representative wide, narrow, and transition widths.
- Exercise meaningful interaction, malformed-content, and sticky states.
- Check semantics, keyboard behavior, focus, contrast, reduced motion, console, and overflow.

## Report

Use `templates/visual-fidelity-report.md` from the installed skill and classify each invariant as preserved, intentionally adapted, degraded, or lost. Separate visual-fidelity defects from EDS ownership/authoring defects. Document intentional deviations with evidence.

Do not mutate the implementation unless the user asks for a hardening pass. Open a visual report in the browser when the findings are inherently visual or numerous.
