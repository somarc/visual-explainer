---
name: create-eds-direction
description: Create and review an aesthetic direction for an AEM Edge Delivery Services experience before production implementation
---

Load the `eds-site-designer` skill and run **DIRECT** for: $@

Load `visual-explainer` when available and use it to produce the design plate.

## Scope

- Inspect relevant project instructions, tokens, fonts, sections, blocks, authored examples, and the live page.
- Identify deliberate project language versus boilerplate defaults.
- Write the aesthetic contract using `templates/aesthetic-contract.md` from the installed `eds-site-designer` skill.
- Produce a self-contained HTML design plate for page or block direction. Skip the plate only for a narrowly scoped text-only review or when the user explicitly declines it.
- Show the signature moment and any important responsive transformation with realistic content.
- Run the genericness audit before presenting the direction.

Do not edit production EDS files. Stop with the direction marked `proposed` and ask the user to lock, revise, or reject it.

Write visual artifacts to `~/.agent/diagrams/` or the user's requested artifact path and open the plate in the browser.
