# Cinematic Hero Background

## Goal
Upgrade only the existing homepage hero with a time-driven 3D backdrop while preserving its copy, two rotating class photos, dimensions, navigation, and every section below.

## Implementation
- Add a hero-scoped fixed React Three Fiber canvas behind the current hero content, plus a radial vignette between the canvas and content.
- Build a custom `THREE.Points` particle system using deterministic buffers and a seamless three-stage loop: luminous core, neural cloud, rotating spiral galaxy.
- Add a slowly rotating chrome star, local reflective lighting, restrained pointer parallax, gentle camera drift, and bloom.
- Use the confirmed MetaSkills palette: editorial gold, restrained violet, and pearl white on midnight indigo.
- Preserve the two existing hero images and make their opacity/blending reveal the scene without changing their source, order, crop, slideshow timing, or layout.
- Strengthen the existing hero text panel with dark translucent glass, blur, and a subtle token-aligned border.
- Respect reduced-motion preferences and cap particle count / pixel ratio for mobile performance.

## Technical Details
- Install `@react-three/postprocessing` compatible with React 18 and the existing Three/Fiber/Drei versions.
- Keep the 3D code isolated in a new hero-background component and mount it only inside the homepage hero.
- Verify desktop and mobile hero rendering, both slideshow states, animation motion, unchanged downstream content, and a clean browser console.
