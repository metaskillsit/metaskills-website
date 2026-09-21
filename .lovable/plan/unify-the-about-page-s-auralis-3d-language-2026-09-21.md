# Unify the About page’s Auralis 3D language

## Result
The M, hand, transition fields, and finale tree will share one coherent Auralis treatment: dimensional lit beads, pearl-to-violet scan colour, self-weaving cylindrical lattices, restrained selective bloom, and automatic formation after each lattice completes.

## Changes

### M sequence
- Replace the flat point-sprite M with the same instanced, matte-white lit bead system used by the tree.
- Use the tree’s exact half-Lambert light direction, roughness, hero-bead ratio, violet scan band, flow tint, and bloom response.
- Build the M cylinder from scroll progress, hold it briefly, then auto-form the M inside it on a time-based scan without requiring further scrolling.
- Preserve the existing violet ribbon burst after the completed M has had time to read clearly.

### Hand sequence
- Convert the hand from point sprites to the same lit bead material and pearl-violet scan treatment.
- Build its matching cylinder first, then reveal the hand with the same scan logic while preserving the existing pirouette and hand-to-curtain crumble.
- Keep the full fingertip silhouette within frame and use the same lattice opacity and rotation as the M and tree.

### Remaining 3D transitions
- Retune the curtain, wave field, pathways, motes, fog, and ribbons to use the same pearl/violet hierarchy and selective bloom response.
- Remove inconsistent gold lighting from scene geometry while leaving the page’s editorial text accents unchanged.
- Keep a single Auralis lighting rig and one bloom/vignette configuration throughout the full journey.

## Technical details
- Extract a reusable instanced bead component with per-object reveal, scan, transformation, and optional crumble controls.
- Use separate automatic formation clocks for the M and hand, triggered only after their respective scroll-built cylinders complete; reset cleanly when scrolling backward.
- Preserve the exact tree configuration as the visual source of truth and avoid changing About-page wording, layout, navigation, or footer.
- Retain reduced-motion, mobile-density, visibility pausing, and non-WebGL fallbacks.

## Verification
- Check the M, hand, intermediate fields, and tree at each scroll stage on desktop and mobile.
- Confirm each cylinder completes before its object auto-forms, reverse scrolling resets reliably, silhouettes remain fully framed, and bloom never washes out bead detail.
- Run the TypeScript check and inspect rendered screenshots for visual continuity.
