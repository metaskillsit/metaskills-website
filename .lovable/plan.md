# About page: precise Auralis cinematic transformation

## Direction

Keep the existing five-act About page, copy, navigation, typography, and navy/gold/pearl identity. Rebuild the three principal visual transitions using the supplied Auralis choreography, with violet used only as the requested transient ribbon accent.

## 1. M burst into violet ribbons

- Hold the assembled pearl-and-gold M long enough to read clearly.
- At the first transition, drive its particles outward with deterministic seeded curl-noise vectors rather than a uniform explosion.
- Grow five smooth violet ribbon trails from the departing particle flow. Each ribbon uses a tapered, animated shader with restrained bloom, gold edge glints, and depth fade into navy.
- Add the Auralis-style brief flare, camera push, and controlled 12–15° bank during the burst; settle the camera before the Vision copy arrives.

## 2. Clear hand, then crumble into a rippling curtain

- Improve the hand silhouette with larger body beads, stronger half-Lambert shading, denser fingers, lower bloom, and a tighter camera/framing position.
- Reveal it with a narrow directional scan and a slower eased pirouette so the palm and fingers remain identifiable.
- During exit, detach beads from fingertip to wrist using a staggered seeded dissolve. Redirect those same particles into vertical curtain strands rather than crossfading to an unrelated object.
- Animate the resulting curtain with layered sine waves and damped scroll-driven amplitude, then flatten it into the existing core-areas wave/grid chapter.

## 3. Tree grows out of fog for the finale

- Reframe and shade the tree so trunk, primary branches, and canopy remain distinct instead of becoming a bright cloud.
- Reveal growth from roots upward: trunk first, then branches, then canopy, using per-particle height and branch-delay attributes.
- Add a low rolling fog layer that initially conceals the roots, parts as the tree rises, and remains as a soft ground plane.
- Use restrained rising gold motes, selective pearl hero beads, and a final camera ease-out; no full roll and no white bloom washout.

## Technical approach

- Extend the existing particle shader with separate assembly, burst/crumble, curtain, and growth controls; use fixed seeded randomness for stable reverse scrolling.
- Add dedicated GPU ribbon and fog shaders rather than CPU-updating every particle each frame.
- Reuse the verified local hand and tree point-cloud files and the existing single continuous camera path.
- Retune timeline windows so each transformation has a clear setup, action, and settle phase without blank scroll intervals.
- Preserve the compact mobile tier, reduced-motion presentation, non-WebGL fallback, and current performance limits.

## Scope and verification

- Change only the About page scene and minimal supporting About styles.
- Keep all English, Chinese, and Vietnamese wording unchanged.
- Verify all five acts on desktop and mobile, with focused checks that the M reads before bursting, the hand silhouette is clear, the curtain visibly originates from the hand, and the tree grows visibly from fog.
- Confirm reduced-motion behavior, asset loading, and TypeScript checks.