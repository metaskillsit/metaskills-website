# Replace Navigation Logo with 3D Cube

## Scope
- Upload the supplied GLB through the project asset system.
- Add a lightweight 3D logo viewer in the top-left navigation link.
- Keep its container at the existing logo height: 48px on mobile and 58px on desktop.
- Preserve the home link, navigation spacing, accessibility label, and reduced-motion support.

## Technical details
- Render the GLB with the existing React Three Fiber stack.
- Normalize and center the model so its visual bounds fit the fixed logo area.
- Use transparent rendering, compact lighting, capped pixel density, and no page-level 3D effects.
- Verify the desktop and mobile navigation visually and check for browser errors.
