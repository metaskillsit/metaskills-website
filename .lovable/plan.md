# Add Roy Ling, CFA

## Faculty page (/faculty)
- New section "Strategic Advisory & Executive Education" (with the suggested description), placed after Executive Team and before AI & Data Science Team.
- Roy Ling, CFA as its first member, using the existing card: portrait, title "Senior Advisor, Corporate Governance & Sustainable Finance", expertise line, full bio verbatim (7-line clamp + Read Full Bio), copy-link anchor `#roy-ling-cfa`.
- No ACLP indicator (not stated in brief).

## Homepage carousel
- Add Roy Ling, CFA to "Our Core Consulting/Training Team", after the executive members (after Andrew Toh), same card size, name overlay, role and expertise caption.
- Clicking the centred card opens `/faculty#roy-ling-cfa` (scrolls and highlights his profile). Applies to all cards, as the brief requests a clickable card matching existing behaviour; currently cards are not links.

## Photo
- Process uploaded portrait to match existing faculty images (3:4 head-and-shoulders crop, centred, head not cut), saved permanently as `public/images/faculty/faculty-roy.webp` plus a .jpg fallback, deployed with the site to A2 Hosting like other portraits. Both pages use the same path.
- Alt text as given in the brief. Fallback to the jpg if webp fails.

## Translations
- Chinese and Vietnamese entries for the new section title/description and Roy's role/expertise/bio.

## Verification
- Playwright on homepage and /faculty (desktop + mobile): image loads (HTTP 200, image MIME), card click navigates to his profile, no layout regressions. Production check only after you publish.

## Note
- Please confirm the "Senior Advisor" appointment with Roy before publishing.
