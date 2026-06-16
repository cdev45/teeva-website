# TEEVA Website Design Brainstorm

## Design Philosophy Options

<response>
<text>
**Approach 1: Sovereign Modernism**

**Design Movement:** Swiss International Typographic Style meets contemporary dark luxury

**Core Principles:**
- Strict typographic hierarchy with oversized display numerals and condensed headers
- Asymmetric layouts with deliberate tension between dark and light zones
- Gold as a surgical accent — one gold element per viewport, maximum
- Information density calibrated for executive readers: dense but never cluttered

**Color Philosophy:** The palette is a power statement. Deep navy (#0F2439) dominates as the "institutional authority" color. White (#FFFFFF) creates the premium negative space that signals confidence. Metallic Gold (#D4AF37) appears only where the eye must land — CTAs, key statistics, divider lines. The contrast between the darkness of the navy and the warmth of the gold creates a visual tension that reads as "earned authority."

**Layout Paradigm:** Asymmetric split-column layouts. Hero sections use a 60/40 split — large typographic statement on the left, dark atmospheric imagery bleeding off the right edge. Service cards use a horizontal scroll on mobile, a staggered 3-column grid on desktop. The Methodology page uses a full-width timeline diagram, not a grid.

**Signature Elements:**
- Thin gold horizontal rule (1px) used as a section separator and accent under key headlines
- Large background numerals (e.g., "01", "02") in navy-on-navy as section markers
- Uppercase, wide-tracked display headlines (letter-spacing: 0.15em)

**Interaction Philosophy:** Restrained and deliberate. Hover states reveal gold underlines on navigation links. CTA buttons scale subtly (1.02x) on hover. No parallax or scroll-jacking — the executive audience finds it distracting.

**Animation:** Entrance animations use a 200ms fade-up (translateY 20px → 0, opacity 0 → 1) triggered by IntersectionObserver. Stagger delay of 60ms per element in grouped sections. No looping animations.

**Typography System:**
- Display/H1: Playfair Display Bold, 72–96px, uppercase, letter-spacing 0.1em
- H2/H3: Inter SemiBold, 36–48px
- Body: Inter Regular, 16–18px, line-height 1.7
- Accent/Label: Inter Medium, 12px, uppercase, letter-spacing 0.15em, gold color
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Approach 2: Architectural Precision (SELECTED)**

**Design Movement:** Corporate Brutalism meets premium consulting — think McKinsey's 2024 rebrand crossed with a high-end architecture firm

**Core Principles:**
- Structure-first design: every layout decision references a grid, every element has a reason
- Typography as architecture: headlines are structural elements, not decorations
- Restraint as luxury: the absence of decoration signals premium quality
- Dark-to-light narrative: pages open dark (authority) and transition to white (clarity)

**Color Philosophy:** Navy (#0F2439) is the "boardroom" — serious, institutional, trustworthy. White is the "clarity" — where ideas breathe. Gold (#D4AF37) is the "signature" — the moment of commitment, the CTA, the proof point. This mirrors how a premium consulting firm presents: dark cover, white body, gold highlights on the key findings.

**Layout Paradigm:** Full-bleed hero sections with a strong left-aligned typographic anchor. Content sections alternate between white and whisper grey (#F4F5F7) to create rhythm without color noise. Service cards use a clean 3-column grid with a gold top-border accent on hover. The Methodology page features a custom SVG interconnection diagram showing the five pillars.

**Signature Elements:**
- Gold 2px vertical left-border on blockquotes and pull quotes
- Thin gold horizontal accent line (60px wide) under hero headlines
- Section numbers in small caps, slate grey, positioned top-left of each major section

**Interaction Philosophy:** The site should feel like a well-bound report. Interactions confirm intent without showboating. Navigation dropdown appears with a 150ms ease-out. Buttons have a 100ms scale-down on click (0.97x). Gold hover states on all text links.

**Animation:** Scroll-triggered fade-up animations (200ms, cubic-bezier(0.23, 1, 0.32, 1)). Trust bar statistics use a count-up animation on first viewport entry. No parallax. Hero text appears with a 300ms stagger between headline, accent line, subheadline, and CTAs.

**Typography System:**
- Display/H1: Cormorant Garamond Bold, 80–100px — authoritative, editorial, distinct from Inter
- H2/H3: Inter SemiBold 600, 32–48px — clean, modern, readable
- Body: Inter Regular 400, 16–18px, line-height 1.75
- Label/Eyebrow: Inter Medium 500, 11px, uppercase, letter-spacing 0.2em, gold (#D4AF37)
- CTA: Inter SemiBold 600, 14px, uppercase, letter-spacing 0.1em
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Approach 3: Dark Intelligence**

**Design Movement:** Premium SaaS dark mode meets executive consulting — Palantir meets Bain

**Core Principles:**
- Dark-first design: the entire site lives in navy/dark space, white sections are the exception
- Data visualization as credibility: statistics and proof points are displayed as visual elements, not text
- Monochromatic depth: layers of navy create depth without introducing new colors
- Gold as the only warm element in a cool palette — maximum visual impact

**Color Philosophy:** The site is predominantly dark (#0F2439 and #1A365D), which signals technical sophistication and seriousness. White sections appear only for testimonials and the newsletter sign-up, creating a "breath" moment. Gold (#D4AF37) is the sole warm color in an otherwise cool palette, making every gold element feel like a spotlight.

**Layout Paradigm:** Full-width dark hero with centered typography. Service cards use a dark card-on-dark background with gold border-top accents. The Methodology page uses a dark background with a glowing gold interconnection diagram. Statistics are displayed as large, animated numerals.

**Signature Elements:**
- Subtle grid/dot pattern overlay on dark sections (5% opacity white dots)
- Glowing gold border on hover states for cards
- Large, animated statistics (counter animation on scroll)

**Interaction Philosophy:** The site should feel like a secure, high-stakes environment. Interactions are precise and deliberate. Hover states use a gold glow effect. CTA buttons have a gold border that fills on hover.

**Animation:** Dark sections use a subtle particle or grid animation in the background (CSS only, no JS libraries). Statistics count up on viewport entry. Card hover states use a 200ms gold border reveal.

**Typography System:**
- Display/H1: Space Grotesk Bold, 72–96px — technical, modern, distinctive
- H2/H3: Space Grotesk SemiBold, 32–48px
- Body: Inter Regular, 16px, line-height 1.7
- Accent: Space Grotesk Medium, 12px, uppercase, letter-spacing 0.15em
</text>
<probability>0.06</probability>
</response>

---

## Selected Approach: Approach 2 — Architectural Precision

**Rationale:** This approach best embodies the TEEVA brand archetype (The Sage) and the "McKinsey meets modern tech firm" aesthetic specified in the brief. The Cormorant Garamond / Inter pairing creates the editorial authority of a premium consulting firm while maintaining the digital readability required for a web application. The dark-to-light narrative mirrors how a consulting firm presents: authoritative opening, clear body, gold highlights on key findings.

**Design Philosophy Statement for All Files:**
TEEVA Design System — Architectural Precision
- Display Font: Cormorant Garamond Bold (editorial authority)
- Body Font: Inter (digital clarity)
- Primary Dark: #0F2439 (boardroom authority)
- Accent Gold: #D4AF37 (signature, used sparingly)
- Signature Elements: Gold 60px accent line under headlines, gold left-border on pull quotes, section number labels
- Animation: 200ms fade-up on scroll, count-up on statistics, 150ms dropdown ease-out
- NO parallax, NO scroll-jacking, NO looping animations
