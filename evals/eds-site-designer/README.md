# EDS Site Designer Evaluations

These cases test the decision model, not exact prose. Run each prompt against the skill and score it with `rubric.md`.

Validate the plugin structure and metadata from the repository root:

```bash
node evals/eds-site-designer/validate.mjs
```

The foundation succeeds when responses form and lock a specific direction before implementation, preserve that direction through explicit EDS contracts, and reject genericization without violating authorability or CSS ownership.

Treat the three prompt cases as **model-level evaluations**. They test whether the agent can reason correctly before source mutation; they do not prove a rendered implementation.

For an **implementation-level evaluation**, use `fixtures/sticky-product-detail/`. It provides long and short rendered states, seeded ownership/sticky defects, authored permutations, an expected ownership contract, and browser-evidence requirements.

## Cases

1. `cases/editorial-direction-lock.md` — protects intentional asymmetry from override accumulation and generic cards.
2. `cases/authored-content-resilience.md` — tests content contracts and malformed authored input.
3. `cases/sticky-responsive-continuity.md` — tests continuous responsive composition and real sticky containment.

## Suggested comparison

Run each case twice:

- with the repository's baseline EDS implementation workflow;
- with `eds-site-designer` plus the same implementation tools.

Use a blind human review for aesthetic specificity, hierarchy, coherence, and memorability: remove workflow labels, randomize candidate order, and keep the reviewer unaware of which response used the skill. Score EDS integrity separately so visual ambition cannot mask production regressions.
