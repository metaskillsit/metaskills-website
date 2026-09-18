# About page: calm the brightness, add Auralis cinematic motion

## Problem

The hand and the other particle figures glow too hot: every cloud draws with additive blending at full opacity, so overlapping beads stack into a white blur and the hand loses its shape. Motion is also simpler than the Auralis reference — one plain camera slide, no self-drawing lattice pulses, no rising motes, no film wipe.

## Part 1 — Readability (fix the glare)

- Give each particle cloud a real falloff: normal blending with a soft round sprite for the body, and keep additive glow only for a small "hero bead" fraction (about 4%). This is what makes Auralis read as volume instead of haze.
- Lower cloud opacity and bead size for the hand and tree; add a depth/fog term so far beads sink into the navy rather than adding brightness.
- Bake a soft directional shade per bead (half-Lambert against a fixed key light) so fingers, knuckles and trunk read as form.
- Raise the bloom threshold and cut its intensity so only hero beads and scan bands bloom, never whole figures.
- Reduce the gold key light and let the scan band, not global light, carry the reveal.

## Part 2 — Cinematic motions borrowed from Auralis

- **Self-weaving lattice:** segments draw themselves end-to-end as the build value passes each segment's staggered threshold, flashing toward the accent mid-draw, with a slow rising pulse ring and sparse per-segment glints on the finished cage. Un-weaves in reverse on scroll.
- **Assembly fly-in:** the M's beads launch from around the camera with a brief gold comet trail and land on an eased stagger.
- **Full eased pirouette** for the hand during its scan-in, with the camera arcing the opposite way.
- **Camera bank envelope:** a single out-and-back roll of about 12–15 degrees on a sine envelope during the dolly, matching Auralis's flight bank, then level for the later acts.
- **Rising motes:** GPU-driven gold sparks that climb and dissolve over the wave grid and around the tree crown.
- **Drifting dust field** at each anchor for atmospheric depth.
- **Idle life:** slow whole-figure sway and bob, a tinted band drifting through each cloud, and gentle pointer tilt and bead repulsion on desktop only.
- **Tilted film wipe** into the tree tableau, bottom-up on an angle, replacing the current plain fade.
- **Vignette** on the composer so the frame edges settle and copy stays legible.

## Performance and fallbacks

- Keep the existing mobile tier: fewer beads, lower resolution, no bloom, no pointer listeners.
- Reduced-motion and non-WebGL paths stay unchanged and content-complete.
- Frame-budget cap so high-refresh displays don't double the work.

## Scope

- Only `src/components/about/AboutImmersiveScene.tsx`, plus small style touches for the wipe and vignette.
- All About copy stays identical in English, Chinese and Vietnamese; navigation and footer untouched.

## Verification

- Desktop and mobile screenshots at each of the five acts.
- Confirm the hand's fingers are clearly readable, headings legible, no blank chapter intervals.
