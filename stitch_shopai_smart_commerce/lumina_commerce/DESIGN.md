# Design System Specification: The Intelligence-Led Marketplace

## 1. Overview & Creative North Star
**Creative North Star: "The Predictive Curator"**

This design system moves away from the cluttered, "utility-first" density of traditional e-commerce (like Amazon) and leans into a sophisticated, editorial intelligence. The goal is to make the user feel like the interface isn't just a catalog, but a living assistant that anticipates needs. 

We break the "template" look through **Intentional Asymmetry**. While a grid exists, we use overlapping elements—such as product imagery breaking the bounds of a container—and high-contrast typography scales to create a premium, "magazine-style" shopping experience. We prioritize "breathing room" (white space) to signal luxury, using AI-driven highlights to guide the eye through the noise.

---

## 2. Colors & Atmospheric Depth

### The Palette
The color strategy uses a deep, authoritative `primary` blue to establish trust, punctuated by a high-energy `tertiary` orange that signifies "Active Intelligence."

*   **Primary (Indigo/Blue):** `#004ac6` – Used for navigation and primary actions.
*   **Tertiary (Accent Orange):** `#8e3c00` – Reserved exclusively for AI features, "Smart" badges, and predictive recommendations.
*   **Background / Neutrals:** A range of `surface` tokens from `#ffffff` (lowest) to `#d8dadc` (dim).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional borders create visual "stutter." Instead, boundaries must be defined through **Background Color Shifts**. 
*   *Example:* A `surface-container-low` section sitting on a `surface` background provides all the separation the eye needs without the friction of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create "nested" depth:
1.  **Page Base:** `surface` (#f7f9fb)
2.  **Product Sections:** `surface-container-low` (#f2f4f6)
3.  **Active Cards:** `surface-container-lowest` (#ffffff) to make items "pop" forward.

### The "Glass & Gradient" Rule
To signal "Futuristic AI," utilize Glassmorphism for floating elements (like sticky headers or quick-view modals). Use `surface` colors at 70% opacity with a `20px` backdrop-blur. 
*   **Signature Texture:** Apply a subtle linear gradient from `primary` (#004ac6) to `primary_container` (#2563eb) on main CTAs to give them a "powered" glow rather than a flat, static appearance.

---

## 3. Typography: Editorial Authority

We use a dual-font strategy to balance high-end aesthetics with transactional clarity.

*   **Display & Headlines (Manrope):** A modern geometric sans-serif. Use `display-lg` (3.5rem) for hero sections and `headline-sm` (1.5rem) for category titles. The wide tracking and bold weights convey a sense of curated authority.
*   **Body & Labels (Inter):** A workhorse typeface for readability. Use `body-md` (0.875rem) for product descriptions and `label-sm` (0.6875rem) for technical specs or AI metadata.

**Hierarchy Note:** Always maintain a minimum 2-step jump in the typography scale for adjacent elements (e.g., pairing a `headline-sm` with a `body-sm`) to create a clear "Editorial Path."

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering** rather than structural lines.
*   **Stacking:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift.

### Ambient Shadows
Shadows must mimic natural light.
*   **Specification:** Use large blur values (20px - 40px) with low opacity (4%-8%). 
*   **Color:** Tint shadows with the `on-surface` token (#191c1e) rather than pure black to keep the UI looking "airy" and professional.

### The "Ghost Border" Fallback
If a border is required for accessibility in input fields:
*   Use `outline-variant` (#c3c6d7) at **20% opacity**. 100% opaque borders are strictly forbidden.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background with a subtle gradient. `xl` (1.5rem) roundedness.
*   **AI-Action:** `tertiary` background with an outer glow using `tertiary_fixed_dim`. Use this for "Ask AI" or "Magic Resize."

### AI Badges (The "Smart" Tag)
*   Small chips using `tertiary_container` with `on_tertiary_container` text. 
*   Apply a `0.5px` Ghost Border in `tertiary`. These are the only elements allowed to have high-contrast accents.

### Cards & Lists
*   **No Dividers:** Forbid the use of divider lines. Separate list items using `16px` of vertical white space or alternating `surface-container` backgrounds.
*   **Image Handling:** Product images should have `md` (0.75rem) corner radius and, where possible, overlap the card edge slightly to break the "grid-box" feel.

### Prominent Search Bar
*   Sticky at the top, utilizing **Glassmorphism**.
*   Internal padding is generous (`1rem 1.5rem`).
*   The search icon should use `primary`, while the placeholder text uses `outline`.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts for Hero sections (e.g., text left-aligned, image slightly off-center and overlapping the background).
*   **Do** use `tertiary` orange sparingly—only for AI-augmented features.
*   **Do** prioritize vertical rhythm; use the Spacing Scale to ensure consistent "breathing room" between sections.

### Don't
*   **Don’t** use pure black (#000000) for text or shadows; it is too harsh for this professional palette. Use `on-surface`.
*   **Don’t** use 1px dividers or "boxes within boxes." Use color depth to define containers.
*   **Don’t** use sharp corners. Everything must feel approachable; follow the `Roundedness Scale` (Default: `0.5rem`).