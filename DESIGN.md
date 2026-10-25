---
name: SunLicious
description: Sun-drenched Malaysian fruit-stand poster world for the Jus Nanas landing page
colors:
  sun-yellow: "#f2e62b"
  sun-glow: "#fbf6b4"
  sun-cream: "#fff9e3"
  sun-juice: "#ffcf33"
  sun-amber: "#f7a81c"
  sun-orange: "#f6921e"
  sun-blue: "#229fd6"
  sun-green: "#1f8a3b"
  sun-leaf: "#45b54e"
  sun-leaf-deep: "#2e8b3a"
  sun-pine: "#0f5a2b"
  sun-bark: "#8a5a23"
  sun-gold: "#e9a83e"
  sun-lime: "#c9dc3f"
  white: "#ffffff"
typography:
  display:
    fontFamily: '"Baloo 2", Nunito, ui-rounded, system-ui, sans-serif'
    fontWeight: 800
    fontSize: "clamp(4rem, 9vw, 8.25rem)"
    lineHeight: 0.82
    letterSpacing: "-0.02em"
  script:
    fontFamily: "Caveat, 'Segoe Script', cursive"
    fontWeight: 700
    fontSize: "1.875rem"
    lineHeight: 0.95
  body:
    fontFamily: "Nunito, system-ui, 'Segoe UI', sans-serif"
    fontWeight: 700
    fontSize: "0.9375rem"
    lineHeight: 1.5
  label:
    fontFamily: "Nunito, system-ui, 'Segoe UI', sans-serif"
    fontWeight: 800
    fontSize: "0.8125rem"
    lineHeight: 1.375
    letterSpacing: "0.025em"
rounded:
  full: "9999px"
  blob-a: "53% 47% 56% 44% / 48% 55% 45% 52%"
  blob-b: "46% 54% 44% 56% / 55% 46% 54% 45%"
  blob-c: "56% 44% 50% 50% / 44% 52% 48% 56%"
  xl: "12px"
  "2xl": "16px"
spacing:
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "9": "36px"
  "10": "40px"
components:
  button-primary:
    backgroundColor: "{colors.sun-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.sun-pine}"
  button-nav:
    backgroundColor: "{colors.sun-pine}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-nav-hover:
    backgroundColor: "#0c4b23"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.sun-pine}"
    rounded: "{rounded.full}"
    size: "44px"
  button-icon-hover:
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  badge-blob:
    backgroundColor: "{colors.sun-leaf}"
    textColor: "{colors.white}"
    rounded: "{rounded.blob-a}"
    width: "138px (152px at sm+)"
    padding: "16px 16px 20px"
  badge-blob-orange:
    backgroundColor: "{colors.sun-orange}"
    rounded: "{rounded.blob-b}"
  badge-blob-blue:
    backgroundColor: "{colors.sun-blue}"
    rounded: "{rounded.blob-c}"
  nav-link:
    textColor: "rgba(15, 90, 43, 0.8)"
    typography: "{typography.body}"
  nav-link-active:
    textColor: "{colors.sun-pine}"
  menu-panel:
    backgroundColor: "{colors.sun-pine}"
    rounded: "{rounded.2xl}"
    padding: "12px"
  menu-item:
    textColor: "rgba(255, 255, 255, 0.85)"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
  stamp-note:
    textColor: "{colors.sun-pine}"
    typography: "{typography.script}"
  note-pill:
    backgroundColor: "rgba(255, 249, 227, 0.9)"
    textColor: "{colors.sun-pine}"
    rounded: "{rounded.full}"
    typography: "{typography.script}"
  stamp-claim:
    backgroundColor: "{colors.sun-green}"
    textColor: "{colors.sun-cream}"
    rounded: "{rounded.full}"
    size: "72px (8.6cqw in situ)"
  logo-badge:
    width: "118px"
    height: "72px"
---

# Design System: SunLicious

_Scan-mode record of the shipped build (`index.html`, `src/style.css`, `src/main.ts`). Qualitative language is derived from PRODUCT.md and the direction contract pinned at the top of `index.html`._

## Overview

**Creative North Star: "The Sun-Drenched Fruit-Stand Poster"**

This is a drawn Malaysian fruit-stand poster, not a product-hero template: the illustrated key-visual IS the hero, and type and fruit share one cartoon world. There is no photo, no gray, no centered-product-with-floating-cards layout. Instead the page is a luminous sun-yellow ground lit from the top-left (28% 18%), fringed with tropical leaves and lime-wash brush strokes, with a hand-built vector scene — bottle on a wooden board, whole and cut pineapples, juice splash, sunglasses mascot — holding the right 55% of the stage.

The voice is loud, warm, and hand-applied. Display type shouts in rounded Baloo 2 extrabold, each word on its own tilt and in its own color; Caveat hand-lettering adds the asides a crate label would have; Nunito keeps claims and chrome legible. Nothing hero-scale sits perfectly level — hovering a badge straightens it like a sticker being pressed down. Density is poster-like: one richly illustrated scene surrounded by generous yellow air, all copy stacked in a single confident column.

Depth is layered flatness. Five stacked layers (ground, background leaves, foreground strokes, artwork slot, HTML text) do the atmospheric work — background leaves blur, foreground strokes stay crisp — while shadows are reserved for lift and dyed with their element's own hue rather than neutral black. The system ships zero raster assets: every visual is inline SVG inside two declared swappable slots (the hero artwork and the logo badge), so real photography and the final logo can arrive later without touching copy.

**Key Characteristics:**

- Sun-yellow radial ground (light at 28% 18%), framed by leaves and lime-wash strokes at the bottom corners
- Five-layer composition: ground / decor-bg leaves / decor-fg strokes / artwork slot / HTML text overlay
- Three-family stack: Baloo 2 display, Caveat hand-lettering, Nunito UI
- Hand-applied tilt on display and script elements (-8° to +1°); hover straightens
- Hue-tinted shadows (sun-pine, burnt orange, deep sea) — never neutral black in chrome
- Zero raster assets; artwork and logo are declared swappable slots
- Idle motion loops (float 6s / bob 4.5s / rock 5s) keep the poster breathing; prefers-reduced-motion collapses all of it
- Green is the action color: CTAs are sun-green or sun-pine pills, never yellow-on-yellow

## Colors

A saturated tropical poster palette anchored by two brand greens against a luminous yellow ground — every color is a fruit, leaf, or sunlight color, and there is no gray anywhere in the chrome.

### Primary

- **Brand Green** (#1f8a3b): the identity and action voice — pill CTA fills, the logo field, the smile arc under the headline, bottle-label type, the claim-stamp circle. If a pixel asks to be clicked or trusted, it is Brand Green.
- **Pine Ink** (#0f5a2b): the darkest value in the system and the everyday ink — all text on the yellow ground (body, nav, handwritten notes), outlines and strokes, the dark nav CTA, scrollbar thumb, and the universal shadow tint.

### Secondary

- **Mango Orange** (#f6921e): the second display voice ("Nanas"), script-line separators, the Vitamin-C badge fill, small drawn accents. Display type is allowed exactly two colors, and this is the other one.
- **Sky Blue** (#229fd6): a badge-only accent — the "Menyegarkan Setiap Masa" blob is its single appearance per screen. Its rarity is the point.
- **Leaf Green** (#45b54e) / **Deep Leaf** (#2e8b3a): the foliage pair for background leaves and brush strokes; Deep Leaf also fills the blob icon coin ink and the scrollbar thumb.

### Tertiary

- **Juice Gold** (#ffcf33): sun rays, the sparkle star, text-selection highlight, the logo ribbon.
- **Pineapple Gold** (#e9a83e) / **Pineapple Amber** (#f7a81c): fruit-skin golds for pineapple rendering and warm accents.
- **Lime Wash** (#c9dc3f): the pale green wash strokes framing the bottom of the poster.
- **Bark Brown** (#8a5a23): wood and drawn ground shadows; artwork-internal.

### Neutral

There is no gray neutral; the light end of the palette is warm paper tones.

- **Sun Yellow** (#f2e62b): the ground of the whole world; also the browser theme-color. Never used flat — always through the radial ground recipe (see Layout).
- **Sun Cream** (#fff9e3): the lightest value — spark strokes, text on Brand Green, the preservative-pill ground.
- **Pale Sun Halo** (#fbf6b4): the pale inner ring of the ground gradient; scrollbar track.
- **White** (#ffffff): text on colored fills, icon coins, label paper inside the artwork.

### Named Rules

**The No-Gray Rule.** UI chrome never ships gray or black — no gray text, no neutral shadows. The darkest ink is Pine Ink (#0f5a2b); the lightest is Sun Cream (#fff9e3). Near-black exists only inside the artwork, for drawn pupils and sunglasses.

**The Green-Is-Action Rule.** Interactive color is Brand Green or Pine Ink on the yellow ground; yellow never hosts a yellow button, and Sky Blue never becomes a button at all.

## Typography

**Display Font:** Baloo 2, weights 600–800 loaded (fallback Nunito, then ui-rounded/system-ui)
**Body Font:** Nunito, weights 400–900 loaded (fallback system-ui, Segoe UI)
**Script Font:** Caveat, weights 600–700 loaded (fallback Segoe Script, cursive)

**Character:** A fruit-stand's voice — Baloo 2 shouts in rounded extrabold, Caveat writes the asides like marker on a crate label, and Nunito keeps the claims and chrome legible. The pairing is deliberately cartoonish at the top and tidy at the bottom.

### Hierarchy

- **Display** (Baloo 2, 800, clamp(4rem, 9vw, 8.25rem) for "Jus" and clamp(4.5rem, 10.5vw, 9.25rem) for "Nanas", line-height 0.82, letter-spacing -0.02em): the two hero words only — the largest type in the system. Each word takes its own color (Brand Green, Mango Orange) and its own tilt (-2°, +1°), with hand-drawn sparks and a smile arc drawn around it.
- **Script** (Caveat, 700, 26–34px by context, line-height 0.95): taglines, product stamps, handwritten asides. Always tilted (-2° to -8°); may carry a drawn squiggle underline and a small heart.
- **Body/UI** (Nunito, 700–800, 15px): the page has no long-form paragraphs yet — Nunito currently carries nav links, buttons, and captions at UI scale.
- **Label** (Nunito, 800, 13px, line-height 1.375, tracking-wide 0.025em, uppercase in content): blob-badge captions (white with a 1px family-tinted text shadow) and stamp sublabels. Anything overlaid on the artwork is sized in cqw (1.05–1.5cqw) so it tracks the artwork container.

### Named Rules

**The Two-Voice Headline Rule.** Display type speaks in exactly two colors on the yellow ground — Brand Green and Mango Orange. Every other word of UI text is Pine Ink, White, or Sun Cream.

**The Hand-Tilt Rule.** Display and script elements always carry a small rotation (-8° to +1°). Level is reserved for interaction (badges straighten to 0° on hover) and utilitarian chrome (nav, buttons).

## Layout

The page is one content-height poster: a single hero section sized by its content (no viewport min-height), hard-capped at 900px from 1024px up so tall monitors never stretch it. The container caps at 1280px with 20px side padding (32px from 640px up). At 1024px+ it splits into a two-column grid — 45% text column, 55% artwork — with 96px top / 144px bottom padding clearing the 80px absolute header and the bottom brush-stroke frame. Below 1024px the text column dissolves (display: contents) and its children re-order by explicit order — headline (1), script tagline (2), artwork (3), CTA row (4), promise badges (5) — so the artwork interleaves between tagline and CTA; bottom padding grows to 176px to reserve room for the decor frame.

Vertical rhythm uses Tailwind's 4px steps: 36–40px beats between text blocks (mt-9/mt-10), 16–20px gaps between badges, 36px between nav links. The header is absolute and 80px tall: logo slot left, center nav (1024px+ only), cart icon + pill CTA right. The ground light sits at 28% 18% — every surface sits on the radial recipe `radial-gradient(120% 90% at 28% 18%, #fdf9c8 0%, #f9ef6e 38%, #f2e62b 72%, #e9d81c 100%)`, never on flat #f2e62b. Breakpoints are Tailwind defaults: sm 640px (paddings and sizes step up; nav CTA appears), lg 1024px (center nav and the two-column grid).

### Named Rules

**The Artwork-Majority Rule.** The illustrated scene always takes the larger share of the stage (55% vs 45%); text never out-sizes the poster.

**The Five-Layer Rule.** Every hero surface composes bottom-to-top as: ground (radial gradient) → decor-bg (individually positioned, blurred leaf SVGs) → decor-fg (lime wash + brush strokes) → artwork (#hero-artwork, one single swappable slot) → text (all copy as HTML, z-10). Artwork swaps never touch copy.

## Elevation & Depth

Depth is layered flatness, not shadow realism. Atmospheric depth comes from the five-layer stack plus blur: background leaves carry 1.5–2px blur while foreground strokes stay crisp, and the artwork sits on top with a very low-opacity neutral drop shadow. UI shadows appear only as interactive lift, and each is dyed with its element's hue family rather than black.

### Shadow Vocabulary

- **CTA lift, large** (`box-shadow: 0 20px 25px -5px rgba(15,90,43,0.30), 0 8px 10px -6px rgba(15,90,43,0.30)`): hero pill CTA (shadow-xl tinted sun-pine/30); the mobile menu panel uses the same geometry at 0.40 opacity.
- **CTA lift, compact** (`box-shadow: 0 10px 15px -3px rgba(15,90,43,0.30), 0 4px 6px -4px rgba(15,90,43,0.30)`): nav pill CTA (shadow-lg tinted sun-pine/30).
- **Badge lift, hue-matched** (`box-shadow: 0 10px 15px -3px <tint>, 0 4px 6px -4px <tint>`): blob badges tint deep-leaf green rgba(46,139,58,0.30), burnt orange rgba(138,74,8,0.30), or deep-sea blue rgba(12,90,128,0.30) to match their fill.
- **Stamp lift** (`box-shadow: 0 4px 6px -1px rgba(15,90,43,0.30), 0 2px 4px -2px rgba(15,90,43,0.30)`): the claim-stamp circle on the artwork (shadow-md tinted sun-pine/30).
- **Caption text shadow** (`text-shadow: 0 1px 1px <tint>`): white 13px captions on colored blobs, tinted to their fill family (rgba(15,60,25,0.35) / rgba(90,40,0,0.35) / rgba(6,50,75,0.35)).
- **Artwork drop** (Tailwind drop-shadow-xl, two stacked layers of ~3%/6% black): the hero scene SVG only — the one near-neutral shadow in the build.

### Named Rules

**The Tinted-Shadow Rule.** Every UI shadow is dyed with its element's hue family — sun-pine under green, burnt orange under orange, deep sea under blue. Neutral black/gray shadows are artwork-only.

## Shapes

Corners are generous and hand-drawn. Actions and icons are full pills and circles (9999px); containers round at 16px/12px (mobile menu panel and its items); promise badges are organic blobs — three fixed silhouettes (blob-a/b/c) built from 44–56% two-value border radii. Cartoon outline is a first-class shape tool: the logo lockup carries a 2.5px darker outline, the smile arc is a 10px round-cap stroke, squiggle underlines are 4–4.5px strokes, and the claim stamp has a dashed inner ring. Decorative elements bleed and tilt — brush strokes run off-canvas (the hero's overflow-hidden clips them) and leaves enter from the edges at rotations from 16° to 145°.

### Named Rules

**The Blob-or-Pill Rule.** Chrome corners are 9999px, an organic blob, or 12–16px rounding — nothing sharper ships in UI. The logo's rounded rectangle (rx 17 on 90×52) lives in the same family.

## Components

### Buttons

Buttons are lifted stickers: full pills that rise 2px on hover while their fill deepens a step.

- **Shape:** full pill (9999px)
- **Primary ("Dapatkan Sekarang"):** Brand Green fill, white 18px Nunito 800, padding 16px 32px, arrow icon; large pine-tinted lift shadow; hover translateY(-2px) + fill deepens to Pine Ink; focus-visible 2px Pine Ink outline at 2px offset.
- **Nav CTA ("Beli Sekarang"):** Pine Ink fill, white 14px Nunito 800, padding 12px 24px; compact lift shadow; hover lift + deepen to #0c4b23 (an observed one-off variant value, not a token); visible from 640px up.
- **Icon buttons (cart, menu):** 44px transparent circles, Pine Ink stroke icons (2.1–2.4 stroke width); hover a white/50 coin; same focus ring.
- **Mobile menu CTA:** inverts to Juice Gold fill with Pine Ink text.

### Benefit blob badges

- **Shape:** organic blob (blob-a/b/c), fixed width 138px (152px at 640px+), base tilt ±2–3°.
- **Fill:** one claim per badge — Leaf Green ("100% Buah Nanas"), Mango Orange ("Kaya dengan Vitamin C"), Sky Blue ("Menyegarkan Setiap Masa"). A white 44px icon coin sits above a 13px/800 white caption with a 1px family-tinted text shadow.
- **States:** hue-matched shadow at rest; hover straightens to 0° and scales to 1.05 over 300ms.

### Navigation

Desktop nav is inline links, 15px Nunito 700, Pine Ink at 80% opacity, hovering to full; the active page is extrabold at full Pine Ink. A single 3px rounded underline bar glides between links (300ms, the shared ease-out): it slides to the hovered or keyboard-focused link, slides back to the last active item on leave, and clicking a link makes it active (aria-current and the weight swap move with it). Without JS the fallback is a static 28px bar centered 8px below the aria-current link; the slider is initialized off the same geometry and re-anchored on resize and font load. The center group is hidden below 1024px. Mobile swaps to a Pine Ink panel (16px radius, 12px padding, large tinted shadow) with 12px-radius items at white/85 and white/10 hover coins; the panel closes on link click and Escape (src/main.ts).

### Handwritten stamps and notes (signature component)

Caveat 700 in Pine Ink, tilted -6° to -8°, with a hand-drawn squiggle underline (SVG, 4–4.5px round-cap stroke) and an optional small red heart (#e23b3b — a decorative accent bound to the heart glyph only). The preservative pill ("Tanpa Pengawet • Tanpa Perisa Tiruan") is Sun Cream at 90% in a full pill. Artwork overlay stamps — the Brand Green claim circle with dashed Sun Cream inner ring, and the "500ml" note in label ink #6b4a12 — are HTML positioned by percentage and sized in cqw against the #hero-artwork container, so they track the artwork at every breakpoint and survive the PNG swap.

### Artwork slot (#hero-artwork) — the system's centerpiece

One container with `container-type: inline-size`, floating on a 6s loop. It holds the entire scene (bottle on a wooden board, whole and cut pineapples, juice splash, sunglasses mascot) as a single inline SVG with role="img" and a Malay-language title. Swap protocol: replace the whole SVG with one `<img>` and recalibrate the overlay stamps' percentage anchors to the new visual's label position in the same change. The logo badge is the second swappable slot (self-contained SVG now, real logo file later).

### Logo badge (brand-asset slot)

A green rounded-rect field (rx 17) with a 2.5px Pine Ink outline, tilted -3°, sun-ray mark on top, Baloo 2 wordmark in Juice Gold with a Pine Ink stroke (paint-order: stroke), and a Juice Gold ribbon carrying the Pine Ink caps tagline "MINUMAN PILIHAN MALAYSIA". Hover lifts it 2px.

## Do's and Don'ts

### Do:

- **Do** keep every word of copy as HTML in the text layer; the artwork slot carries zero copy (The Five-Layer Rule).
- **Do** put new surfaces on the ground recipe: `radial-gradient(120% 90% at 28% 18%, #fdf9c8 0%, #f9ef6e 38%, #f2e62b 72%, #e9d81c 100%)` — never flat #f2e62b.
- **Do** size anything overlaid on the artwork in cqw against #hero-artwork, and recalibrate the percentage anchors in the same change that swaps in a PNG.
- **Do** tint each element's shadow with its own hue family (The Tinted-Shadow Rule).
- **Do** keep the idle loops on scene elements (float 6s, bob 4.5s, rock 5s — all ease-in-out) and collapse every animation and transition to 0.01ms under prefers-reduced-motion, with scroll-behavior: auto.
- **Do** reuse the three blob silhouettes (blob-a/b/c) with family-tinted shadows for any new claim chip.

### Don't:

- **Don't** ship gray or black in UI chrome — no gray text, no neutral shadows; ink is Pine Ink (#0f5a2b), light is Sun Cream (#fff9e3) (The No-Gray Rule).
- **Don't** add raster assets casually — the shipping page references zero rasters; when one arrives (PNG key-visual, real logo), it carries its provenance per the direction contract's finish rule.
- **Don't** typeset display or script elements perfectly level — they carry -8° to +1° (The Hand-Tilt Rule); level is for hover correction and nav chrome.
- **Don't** split the artwork slot into multiple images or bake copy into it — it is one swappable container (The Five-Layer Rule).
- **Don't** promote scene-internal illustration colors (wood browns, flesh creams, label ink #6b4a12, heart red #e23b3b) to UI tokens — they ship inside the artwork slot and swap with it.
- **Don't** use Sky Blue for anything but the badge accent, and never yellow-on-yellow for actions (The Green-Is-Action Rule).
