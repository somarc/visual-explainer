# Runnable Fixture: Sticky Product Detail

This deliberately flawed static fixture represents decorated EDS output. It separates a model-level response from an implementation-level browser review.

## Run

From this directory:

```bash
python3 -m http.server 4173
```

Open:

- `http://127.0.0.1:4173/long.html`
- `http://127.0.0.1:4173/short.html`
- `http://127.0.0.1:4173/missing-media.html`
- `http://127.0.0.1:4173/long-title.html`
- `http://127.0.0.1:4173/no-action.html`

## Seeded defects

- The page shell clips overflow and can break sticky containment.
- Section composition is inferred with `:has(.product-detail)`.
- The block uses fixed gallery height and external margins.
- Narrow visual reordering conflicts with DOM/focus order.
- The short-content variant cannot provide enough sticky travel.

## Implementation-level evidence

An implementation evaluation must provide:

1. Patched source with ownership matching `expected-ownership.md`.
2. Browser evidence for long and short content.
3. Wide, transition, and narrow viewport results.
4. Actual sticky start/stop behavior and containing-block evidence.
5. Keyboard order and visible-focus findings.
6. Aesthetic-invariant verdicts separate from EDS-integrity verdicts.

The fixture is intentionally small. It is not a production EDS template or visual design reference.
