# Auralis-Inspired About MetaSkills Rebuild

## Recommendation

Use **Auralis** as the primary template and motion system. It offers the strongest immersive impact because the page behaves as one continuous 3D story rather than separate animated sections.

Preview: https://www.getlayers.ai/?layer=auralis

Auralis is a better fit than the nearest alternatives:
- **AI Creator** is visually powerful but centred on a personal portrait and creator portfolio.
- **House** has excellent cinematic scrolling but relies on architectural imagery and frame sequences.
- **Vexon** fits the AI theme, but is primarily a hero rather than a complete About-page narrative.
- **Helion** is the strongest backup, though its cosmic progression is less relevant to education, governance, and institutional credibility.

## What Must Change from Auralis

The supplied Auralis prompt is an excellent technical reference, but these elements should be adapted rather than reproduced unchanged:

- Replace Auralis violet and pink with MetaSkills **dark navy, editorial gold, and pearl-white**.
- Retain **Playfair Display** for editorial headings and **Inter** for body copy instead of Google Sans Flex.
- Replace the Auralis brand, navigation, calls to action, and fictional studio content with the existing MetaSkills navigation and footer.
- Replace the opening particle “X” with a distinctive **MetaSkills “M” or connected intelligence glyph**.
- Reinterpret the hand, wave, lattice, and tree around capability building, AI systems, cybersecurity, markets, and ASEAN growth.
- Keep every existing About-page word unchanged in English, Chinese, and Vietnamese.
- Avoid copying Auralis’s 1180vh duration mechanically; tune the journey to the actual MetaSkills content so reading never feels delayed.
- Use the supplied Auralis binary point clouds and flare assets only after downloading them into the project asset system; do not hotlink them.

## Page Experience

### 1. Opening — About MetaSkills Institute
- A short MetaSkills wordmark loader prepares the 3D assets.
- A pearl-and-gold particle “M” assembles inside a slowly weaving cylindrical lattice.
- The existing title and subtitle appear with restrained letter and word reveals.
- The camera begins in deep navy haze with gold light grazing the particles.

### 2. Mission and Vision — Human Capability
- The camera moves through the opening glyph into the particle hand.
- **Our Mission** and its two existing paragraphs occupy one side of the frame.
- The hand scans into view in pearl particles with a narrow gold band, representing practical capability and human direction.
- The camera continues into **Our Vision**, preserving both existing paragraphs and allowing comfortable reading time.

### 3. Our Core Areas — Connected Systems
- The hand dissolves into a controlled flowing network rather than Auralis’s pink vortex.
- The four existing core areas appear as four anchored editorial panels around the scene.
- Each panel activates a corresponding region of the gold network without replacing or shortening its wording.
- The scene visually connects Agentic AI, algorithmic trading, cybersecurity governance, and ASEAN trust.

### 4. Our Five Practices — Applied Impact
- The network settles into five luminous paths or orbiting nodes.
- The existing five numbered practices remain complete and readable.
- Desktop uses a pinned 3D scene with the practice text advancing beside it; mobile uses a simpler vertical sequence with a lightweight scene.
- The existing Chinese practice marks remain part of the presentation.

### 5. Languages & Reach — ASEAN Growth
- The final transition reveals a pearl particle tree or branching ASEAN network enclosed by a completed gold lattice.
- The existing **Languages & Reach** heading and paragraph remain unchanged.
- The 3D motion settles into a calm final tableau before the existing footer returns in normal page flow.

## Visual Direction

- Background: deep corporate navy with restrained tonal depth, never pure sci-fi black.
- Particles: pearl-white bodies with selective editorial-gold highlights.
- Bloom: limited to important scan lines, lattice impulses, and transition trails.
- Glass surfaces: low-opacity navy glass with fine gold hairlines.
- Typography: Playfair Display for major statements; Inter for paragraphs, labels, and navigation.
- Motion: cinematic camera movement and particle transformations, but slower and more assured than the original Auralis studio treatment.
- No violet, pink, generic neon, artificial avatars, or decorative effects unrelated to the Institute’s work.

## Interaction and Accessibility

- Scroll remains the source of truth, with smooth motion layered over it.
- Pointer parallax and particle response apply only on capable desktop devices.
- Reduced-motion mode presents the same content as elegant static scenes with simple fades.
- Mobile uses reduced particle counts, no pointer simulation, lower rendering resolution, and simplified transitions.
- All text remains real selectable page content, with proper reading order and no dependence on the 3D canvas.
- If WebGL fails, the page falls back to the same navy-gold editorial layout with static visual frames.

## Technical Approach

- Adapt Auralis into the existing React/Vite page rather than introducing a separate single-file site.
- Use one fixed Three.js canvas and one shared scroll timeline to avoid multiple competing renderers.
- Reuse Auralis techniques: particle assembly, self-weaving lattices, scan reveals, scroll camera flight, selective bloom, wipe transition, and performance tiers.
- Preserve the existing translation keys and content as the only source of displayed copy.
- Keep the current site navigation and footer outside the cinematic canvas.
- Store downloaded point-cloud, flare, and generated visual assets through the project’s asset delivery flow.
- Verify desktop, tablet, mobile, reduced-motion, fallback rendering, text readability, frame rate, and navigation behavior.

## Scope Guardrails

- Rebuild only the **About MetaSkills Institute** page.
- Do not alter the wording, course information, faculty pages, homepage, or other routes.
- Do not implement anything until this plan is approved.
