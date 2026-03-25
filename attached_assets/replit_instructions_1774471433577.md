# Replit Agent Build Instructions — The Overtone Theory Website

## Overview

Build a single-page scrolling website for "The Overtone Theory" — a creative development practice by MIDWID. The site should feel warm, personal, and premium — not like a template, not like a SaaS landing page. Think: a talented friend's personal website that happens to be beautifully designed.

The complete website copy is in the companion file `website_copy.md`. Use that text exactly as written — do not rewrite, summarize, or rephrase any of it.

## Technical Requirements

- **Single-page scrolling site** with smooth anchor navigation
- **HTML, CSS, and JavaScript** — no framework needed, keep it simple and fast
- **Fully responsive** — mobile-first design. Must look great on phones (this is where most visitors will come from)
- **Fast load times** — minimal dependencies, optimized images, no heavy libraries
- **SEO basics**: proper meta title, description, Open Graph tags, semantic HTML
- **SSL**: Replit handles this automatically
- **Custom domain ready**: will connect `overtonetheory.art` and redirect `overtonetheory.com`
- **No cookies, no tracking** (for now — can add Google Analytics later)
- **Accessible**: proper contrast ratios, alt text on images, semantic headings

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Abyss | `#0F0326` | Primary dark backgrounds, header, footer, hero |
| Purple Reign | `#7E22CE` | Section accents, step numbers, testimonial background, links, hover states |
| Soft Violet | `#C084FC` | Accent text on dark backgrounds, secondary headings, decorative elements |
| Clean White | `#FAFAFA` | Light section backgrounds, body text on dark sections |
| Signal Gold | `#FACC15` | CTA buttons, emphasis moments, highlight text, hover accents |

### Color Rules
- **Dark sections** (Abyss background): Body text in Clean White, headings in Clean White or Soft Violet, CTAs in Signal Gold
- **Light sections** (Clean White background): Body text in Abyss, headings in Abyss or Purple Reign
- **CTA buttons**: Signal Gold background with Abyss text. On hover: slightly brighter gold or add subtle glow
- **Links**: Purple Reign, hover to Signal Gold
- Alternate between dark and light section backgrounds to create visual rhythm as the user scrolls

## Typography

- **Headings**: Use a clean sans-serif font. Recommended: Inter, or similar from Google Fonts. Bold weight.
- **Body text**: Use a serif or readable sans-serif. Recommended: Georgia (system font, no load time) or Source Serif 4 from Google Fonts.
- **Body font size**: 18px minimum on desktop, 16px minimum on mobile
- **Line height**: 1.6 for body text, 1.2 for headings
- **Maximum content width**: 720px for text sections (readability). Full-width for background colors/images.
- Keep font loading to a maximum of 2 Google Fonts (1 heading + 1 body)

## Layout & Design Direction

### General Feel
- **Clean, spacious, lots of breathing room.** Generous padding between sections (80-120px vertical padding).
- **No stock photos.** Only use the headshot photo (placeholder for now — use a simple circle placeholder with initials "DJ")
- **Subtle animations**: Fade-in on scroll for sections. Nothing flashy, nothing bouncing. The content should feel like it's gently arriving as you scroll.
- **No parallax effects.** Keep it grounded and calm.
- **No hamburger menu on desktop.** Simple horizontal nav links. On mobile, a clean hamburger is fine.

### Sticky Navigation
- Semi-transparent Abyss background with slight blur (backdrop-filter)
- Logo/brand name "THE OVERTONE THEORY" on the left (text, not an image)
- Nav links on the right: How It Works | Stories | Workshops | About | Let's Chat
- "Let's Chat" should be styled as a small CTA button (Signal Gold)
- On scroll, nav becomes slightly more opaque

## Section-by-Section Build Guide

Use the copy from `website_copy.md` for all text content. Below are the design/layout instructions for each section.

### Section 1: HERO
- **Background**: Abyss, full viewport height (100vh), centered content
- **Layout**: Headline centered, large (48-64px desktop, 32-40px mobile). Subline below at normal body size.
- **Headline text color**: Clean White, with key words optionally in Signal Gold
- **CTA button**: Signal Gold background, Abyss text, rounded corners, centered below the copy
- **Secondary link**: Below CTA, smaller, text-only link in Soft Violet. Scrolls to Process section.
- **Optional**: Very subtle gradient from Abyss to slightly lighter purple at the bottom, to transition into next section

### Section 2: THE PROBLEM — "Sound familiar?"
- **Background**: Clean White
- **Layout**: Centered text column, max 720px wide
- **Heading**: Abyss color, left-aligned
- **Body text**: Abyss, left-aligned, generous line spacing
- Keep this section feeling intimate and readable — like a letter

### Section 3: THE THEORY — "What is The Overtone Theory?"
- **Background**: Abyss
- **Text**: Clean White body, Soft Violet for the subheading "Your body is an antenna."
- **Layout**: Centered text column, max 720px
- This section is longer — make sure it doesn't feel like a wall. Add subtle spacing between paragraphs.

### Section 4: THE PROCESS — "The 4 Steps"
- **Background**: Clean White
- **Layout**: Each step gets its own block. Can be either:
  - Option A: Vertical stack with step number in Signal Gold, step name in Purple Reign, description below
  - Option B: 2x2 grid on desktop, single column on mobile
- **Step numbers**: Large (48px+), Signal Gold or Purple Reign
- **Step names**: Purple Reign, bold
- **Step descriptions**: Abyss, normal weight
- Add subtle dividers or spacing between steps

### Section 5: WHO THIS IS FOR
- **Background**: Gradient from Abyss to Purple Reign (subtle, vertical)
- **Text**: Clean White
- **Layout**: Two groups — "This is for you if..." and "This is not for you if..."
- Use simple bullet points (Soft Violet bullet markers)
- Consider placing the two lists side by side on desktop, stacked on mobile

### Section 6: STORIES
- **Background**: Clean White
- **Layout**: This is the longest section. Do NOT display all four stories at once. Use one of these approaches:
  - **Preferred**: Tabs or accordion — show one story at a time, with the person's name as the tab/selector
  - **Alternative**: Cards that expand on click
- **Story names** (Gerschweyn, Patrick, Sarah, Jordan) in Purple Reign
- **Story text** in Abyss

### Section 7: TESTIMONIAL
- **Background**: Purple Reign (solid)
- **Layout**: Centered, large italic quote text in Clean White. Large decorative quote marks in Signal Gold (use CSS, not images).
- **Attribution** below the quote, smaller, bold, Clean White
- Keep this section short and impactful — generous vertical padding

### Section 8: ABOUT — "Hey, I'm DJ."
- **Background**: Clean White
- **Layout**: Two-column on desktop (photo left, text right), single column on mobile (photo on top)
- **Photo**: Circle-cropped headshot. For now, use a placeholder circle with "DJ" initials, 200px diameter, Abyss background, Clean White text
- **Text**: Left-aligned, max 600px wide next to the photo

### Section 9: WORKSHOPS
- **Background**: Abyss
- **Text**: Clean White
- **Layout**: Centered text, CTA button in Signal Gold at the bottom
- Keep this section concise — it's an invitation, not a sales page

### Section 10: GO DEEPER — 1-on-1 Sessions
- **Background**: Clean White
- **Layout**: Centered text, CTA button in Signal Gold
- Brief section. 2-3 paragraphs max.

### Section 11: FAQ
- **Background**: Very light violet (mix Clean White with a hint of Soft Violet — something like `#F5F0FF`)
- **Layout**: Collapsible accordion. Question in Purple Reign (bold), answer expands below in Abyss.
- Smooth expand/collapse animation
- Only one question open at a time

### Section 12: CONTACT
- **Background**: Abyss
- **Layout**: Centered heading and text in Clean White. CTA button in Signal Gold.
- **Calendly embed**: Below the CTA, embed a Calendly scheduling widget. For now, use a placeholder div with text "Calendly embed goes here" styled as a bordered box.
- **Contact form below Calendly**: Simple form with fields: Name, Email, Link to your work (optional), Message. Style to match the site. For now, the form doesn't need to actually submit — just build the UI.

### Section 13: FOOTER
- **Background**: Abyss (continuation of contact section, no visual break)
- **Content**: "© MIDWID 2026 | overtonetheory.art"
- **Payment icons**: Small Venmo and CashApp text/icons (for workshop PWYW)
- **Social**: Instagram icon linking to profile (placeholder URL for now)
- Keep it minimal

## Interactions & Animations

- **Scroll-triggered fade-in**: Each section fades in gently as it enters the viewport. Use Intersection Observer, not a heavy library.
- **Smooth scrolling**: When nav links are clicked, smooth scroll to the section.
- **FAQ accordion**: Click to expand/collapse with CSS transition (max-height or similar).
- **Stories tabs/accordion**: Click to switch between stories.
- **CTA button hover**: Subtle brightness increase or glow effect on Signal Gold buttons.
- **No other animations.** No loading screens, no particle effects, no typewriter text. Keep it calm and grounded.

## Placeholder Items (to be replaced later)

- Headshot photo: Use a circle with "DJ" initials for now
- Calendly embed: Placeholder div
- Contact form: UI only, no backend submission yet
- Instagram link: Use `#` as href
- Workshop schedule: No specific dates yet — the copy handles this generically

## File Structure

Keep it simple:
```
/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── (headshot will go here later)
└── website_copy.md (reference only, not served)
```

## Deployment

Deploy on Replit's built-in hosting. Custom domain (overtonetheory.art) will be connected after initial build is approved.

## Final Notes

- The website copy in `website_copy.md` has been carefully written and edited. Use it verbatim. Do not generate new copy or modify the existing text.
- Prioritize readability and feel over visual complexity. This site should feel like a conversation, not a pitch.
- When in doubt about a design choice, choose the calmer, more spacious option.
- Test on mobile viewport (375px width) — this is the primary viewing device for the target audience.
