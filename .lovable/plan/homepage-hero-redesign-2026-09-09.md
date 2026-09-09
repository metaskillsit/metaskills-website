# Homepage Hero Redesign

## Goal
Redesign the homepage hero section to feel premium, cinematic, and enterprise-grade while keeping the existing Singapore skyline hero image, the headline "The AI Institute for Asia", and the existing warm editorial colour system.

## Locked Design Decisions
- **Palette:** Existing warm editorial palette (deep charcoal/near-black overlays, muted gold accent, pearl white text).
- **Typography:** Existing DM Serif Display headings + Fira Sans body.
- **Composition:** Editorial Left Panel — strong left-aligned content panel with a compact proof rail anchored below.

## Implementation
1. **Hero structure**
   - Full-bleed skyline image as background foundation.
   - Layered overlays: dark gradient wash, subtle radial spotlight near the text area, faint interface-line / data-grid texture.
   - Left-aligned premium content panel with darker translucent background, subtle backdrop blur, thin low-opacity border, soft shadow, refined radius.
   - Restrained floating proof/stat area anchored lower in the hero.

2. **Typography hierarchy**
   - More commanding headline with tighter line breaks.
   - Clearer hierarchy: eyebrow → brand label → headline → subheadline → proof text.
   - Narrower text measure for the main statement.

3. **CTAs**
   - Primary CTA: high-conviction, elegant filled style.
   - Secondary CTA: quieter outlined/ghost style.
   - Subtle hover lift + sheen/border-glow, kept restrained.

4. **Proof / credibility**
   - Convert "LIVE TRAINING 2026" into a compact premium ticker or proof rail.
   - Surface 3–4 concise trust signals (trained professionals, organisations served, regional reach, enterprise/public-sector delivery).
   - "View all" action for the full training list.

5. **Premium details**
   - Subtle data-grid / interface-line detailing.
   - Layered shadows and tonal contrast for depth.
   - One restrained accent (muted gold from existing palette).
   - Optional gentle highlight sweep or slow reveal; no particles, blobs, orbit effects, or 3D gimmicks.

6. **Mobile**
   - Stack layout cleanly.
   - Strong but not oversized headline.
   - Readable, controlled proof strip.
   - Tap-friendly buttons with elegant spacing.

## Files to change
- `src/components/HeroSection.tsx`
- `src/index.css` (hero-specific utility classes)
- `src/i18n/locales/en.json` (if headline line-break / CTA labels need adjustment)
