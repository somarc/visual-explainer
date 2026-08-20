# Expected Ownership Contract

This is not an expected CSS diff. A valid implementation may vary while preserving these owners.

| Relationship | Expected owner |
|---|---|
| Global tokens, reset, default focus | Global baseline |
| Product-detail full width, section padding, two-column composition, column gap | Explicit `product-detail` section class/contract |
| Heading/paragraph/list/table rhythm in long description | Authored prose flow |
| Gallery media, thumbnails, controls, and internal state | Product-detail/gallery block internals |
| Space between product-detail and following section | Section/page composition |
| Sticky activation, offset, and release boundary | Explicit section layout contract plus bounded gallery element |
| Missing-media and no-action fallbacks | Authored block contract and block internals |

Reject a result that preserves `.section:has(.product-detail)`, lets the block create external section rhythm, or declares sticky valid without long/short browser evidence.
