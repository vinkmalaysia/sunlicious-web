---
name: SunLicious
description: Sun-drenched Malaysian fruit-stand poster world for the SunLicious juice site
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
ground-recipe: "radial-gradient(<size> <size> at <x> <y>, #fdf9c8 0%, #f9ef6e 38-40%, #f2e62b 72-74%, #e9d81c 100%)"
seam-tone: "#e9d81c"
label-paper: "#fffef4"
typography:
  display:
    fontFamily: '"Baloo 2", Nunito, ui-rounded, system-ui, sans-serif'
    fontWeight: 800
    fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)"
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  script:
    fontFamily: "Caveat, 'Segoe Script', cursive"
    fontWeight: 700
    fontSize: "22-34px"
    lineHeight: 0.95
  body:
    fontFamily: "Nunito, system-ui, 'Segoe UI', sans-serif"
    fontWeight: "600-900 (700-800 in practice)"
    fontSize: "13.5-16px"
    lineHeight: "1.5-relaxed"
  label:
    fontFamily: "Nunito, system-ui, 'Segoe UI', sans-serif"
    fontWeight: 800
    fontSize: "11-13px"
    lineHeight: 1.375
    letterSpacing: "0.025-0.14em, uppercase"
motion:
  ease-signature: "cubic-bezier(0.22, 1, 0.36, 1)"
  entrance-rise: "0.7s from opacity 0 / translate 0 26px"
  entrance-pop: "0.9s from opacity 0 / scale 0.94"
  idle-float: "6s ease-in-out ±12px"
  idle-bob: "float at 4.5s (kept in @theme, unused in markup)"
  idle-rock: "5s -2.5deg..3deg (kept in @theme, unused in markup)"
  parallax-scalar: "x 18 / y 14, hover-only scenes"
  scroll-drift: "data-drift 0.12-0.28, rAF-composited translate3d"
rounded:
  full: "9999px"
  xl: "12px"
  "2xl": "16px"
  paper: "16px (rounded-[16px])"
spacing:
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "9": "36px"
  "10": "40px"
components:
  button-primary:
    backgroundColor: "{colors.sun-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.full}"
    padding: "16px 32px (hero) / 12px 24px (compact)"
    hover: "-2px lift, fill to {colors.sun-pine}"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.sun-pine}"
    rounded: "{rounded.full}"
    size: "44px (menu) / 40px outlined (footer social)"
    hover: "white/50 coin, or white/10 + border white/60"
  note-pill:
    backgroundColor: "rgba(255,249,227,0.9)"
    textColor: "{colors.sun-pine}"
    rounded: "{rounded.full}"
    typography: "{typography.script}"
  card-paper:
    backgroundColor: "#fffef4"
    border: "2.5px solid {colors.sun-pine}"
    rounded: "{rounded.paper}"
    rotation: "±1.2deg"
  service-stamp:
    backgroundColor: "{colors.sun-green}"
    rounded: "full, 88px (96px at sm+)"
    innerRing: "1px dashed {colors.sun-cream}/80"
  cert-stamp:
    backgroundColor: "#fffef4"
    ring: "3px family color (#1f8a3b / #f6921e / #2e8b3a / #e9a83e)"
    innerRing: "1.5px dashed family color /65"
    size: "112-136px wide"
  icon-coin:
    backgroundColor: "{colors.white} (list) / {colors.sun-orange} (pin)"
    size: "56px (list) / 56px (pin) / 48px (footer contact icons)"
    shadow: "hue-matched at /25"
  gallery-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.2xl}"
    ring: "1px rgba(0,0,0,0.05)"
    panel: "aspect-4/5, per-product tint gradient"
  menu-panel:
    backgroundColor: "{colors.sun-pine}"
    rounded: "{rounded.2xl}"
    padding: "12px"
  footer-ground:
    backgroundColor: "{colors.sun-pine}"
    topEdge: "curved pine wave SVG, 56px, bridging from above"
  nav-underline:
    height: "3px"
    backgroundColor: "{colors.sun-pine}"
    offset: "8px below link, slides 300ms"
---

# Design System: SunLicious

_Scan-mode record of the shipped build (`index.html`, `produk.html`, `src/style.css`, `src/nav.ts`, `src/footer.ts`, `src/main.ts`, `src/parallax.ts`, `src/produk.ts`). The header and footer are not hand-written markup — they are HTML strings rendered into `#site-header` / `#site-footer` slots on every page._

## Overview

**Creative North Star: "The Sun-Drenched Fruit-Stand Poster"**

This is a drawn Malaysian fruit-stand poster, not a product-hero template. The page is a luminous sun-yellow ground lit from a per-section light point, fringed with lime-wash brush strokes and raster tropical props, with copy stacked in confident, slightly-tilted columns. The voice is loud, warm, and hand-applied: Baloo 2 extrabold headings shout, Caveat hand-lettering adds the asides a crate label would have, Nunito keeps claims and chrome legible.

The site is now a small multi-page system: `index.html` (hero → nutrition `#produk` → factory/certifications `#tentang`) and `produk.html` (product gallery). All pages share one header/footer renderer, one token sheet, and one motion vocabulary. The original all-vector poster has been re-cast with an asset pipeline: the hero headline, promise badges, key visual, logo, and a library of decorative prop layers are raster files (AVIF + WebP pairs with `<picture>` source swaps), while all copy and interactive chrome remain HTML.

**Key Characteristics:**

- Section-based poster: each `<section>` paints its own radial ground (never flat #f2e62b) and blends into the next through the darkest ground tone (#e9d81c seam ramps)
- Six-layer hero composition: ground → decor-fg strokes → seam → decorative raster props (z-5, parallax) → copy (z-10) → foreground palm prop (z-20) with the header floating above (z-40)
- Three-family type stack: Baloo 2 display, Caveat hand-lettering, Nunito UI
- Hand-applied tilt on display/script/headings (-12° to +1°) and alternating ±1.2° rotations on paper cards
- Hue-tinted shadows and icon coins (sun-pine, burnt orange #8a4a08) — neutral ink only as a hairline ring
- Raster prop library (layers-_0000…0013, AVIF+WebP) moved by two parallax channels: mouse sway and scroll drift
- Scroll-reveal entrances (`rise`/`pop`) with staggered delays; FOUC-safe pre-hide gated on an `html.js` class
- Green is the action color; every CTA is a sun-green pill, never yellow-on-yellow

## Colors

A saturated tropical poster palette anchored by brand greens against a luminous yellow ground — every color is a fruit, leaf, or sunlight color. Tokens live in `@theme` in `src/style.css`.

### Primary

- **Brand Green** (#1f8a3b): the action and certification voice — all pill CTA fills, the Halal stamp, the serving stamp, footnote hover states. If a pixel asks to be clicked or trusted, it is Brand Green.
- **Pine Ink** (#0f5a2b): the darkest value and everyday ink — all text, all borders and drawn outlines, the footer ground, the menu panel, and the universal shadow tint.

### Secondary

- **Mango Orange** (#f6921e): the second display voice (every H2's second line), bullets inside script lines, the MeSTI stamp, the pin coin, pleasure accents.
- **Leaf Green** (#45b54e) / **Deep Leaf** (#2e8b3a): the foliage pair — Deep Leaf fills the HACCP stamp, scrollbar thumb, bullet dots, and hue-matched shadows.

### Tertiary

- **Juice Gold** (#ffcf33): sun rays, sparkle dots, text-selection highlight, footer column headings.
- **Pineapple Gold** (#e9a83e) / **Amber** (#f7a81c): fruit-skin golds; #e9a83e is the GMP stamp ring.
- **Lime Wash** (#c9dc3f): the pale wash strokes framing section bottoms; brush greens #2e9e3e / #4cbf57 join it in the corner strokes.

### Neutral

There is no gray token; the light end of the palette is warm paper tones.

- **Sun Yellow** (#f2e62b): the world's ground color and the browser theme-color — only ever used through the ground recipe.
- **Sun Cream** (#fff9e3): text on Brand Green, serving-stamp figures, note-pill ground, scrollbar track.
- **Label Paper** (#fffef4): inline value, not a token — nutrition card, factory card, and certification-stamp paper.
- **White** (#ffffff): text on colored fills, icon coins, gallery cards.

**Sky Blue** (#229fd6) remains a defined token but currently has no live usage in markup; its claim ("Menyegarkan Setiap Masa") now lives inside the raster badge strip. Its rarity is the point.

### Named Rules

**The No-Gray Rule.** UI chrome carries no gray text and no neutral shadows. The darkest ink is Pine Ink (#0f5a2b), the lightest is Sun Cream. The only near-neutral left in the build is the gallery card's 5%-black hairline ring — a flat-white-card exception, not a token.

**The Green-Is-Action Rule.** Interactive color is Brand Green or Pine Ink on the yellow ground; yellow never hosts a yellow button.

## Typography

**Display Font:** Baloo 2, weights 600–800 loaded (fallback Nunito → ui-rounded/system-ui)
**Body Font:** Nunito, weights 400–900 loaded (fallback system-ui, Segoe UI)
**Script Font:** Caveat, weights 600–700 loaded (fallback Segoe Script, cursive)

**Character:** A fruit-stand's voice — Baloo 2 shouts in rounded extrabold, Caveat writes asides like marker on a crate label, Nunito keeps claims, tables, and chrome legible.

### Hierarchy

- **Display** (Baloo 2, 800, clamp(2.75rem, 5.5vw, 4.25rem), line-height 0.9, -0.02em): section headings. Standard construction is a two-span stack — line 1 Pine at -2°, line 2 Mango Orange at +1° with a 0.35em indent (e.g. "Maklumat / Pemakanan", "Dari Kilang / Kami di Johor"). Display also sets stamp figures ("1×") and gallery card names. The hero headline "Jus Nanas" is itself a raster asset now — type never competes with the logo art.
- **Script** (Caveat, 700, 22–34px, line-height 0.95): taglines, handwritten asides, stamps. Always tilted (-12° to -2°), often with a Pine Ink squiggle underline (4–4.5px round-cap stroke) and the red heart #e23b3b; orange bullets separate claims.
- **Body/UI** (Nunito, 700–800, 14–16px): section introductions, table values, nav links, buttons, card descriptions at 13.5px/semibold. Real paragraph copy now exists (benefit blurbs, gallery descriptions, footer blurb) at 46ch max measure.
- **Label** (Nunito, 800, 9–13px, tracking 0.025–0.14em, uppercase): stamp sublabels, nutrition-table annotations, footer column headings (13px / 0.14em tracking).

### Named Rule

**The Two-Voice Display Rule.** Each section heading speaks in exactly two colors — Pine Ink for line 1, Mango Orange for line 2 — with paired tilt. The `produk.html` gallery heading is the quiet single-voice exception (one Pine line, no tilts page-wide on headings).

## Layout

The home page reads top-to-bottom as one poster with three sections; `produk.html` is a single gallery poster. Every page: absolute transparent header (h-20, z-40, rendered by `nav.ts`) → `<main>` sections → pine footer (rendered by `footer.ts`).

- **Container:** max-w-7xl, px-5 (px-8 at sm+).
- **Hero** (`index.html #home`): grid `lg:grid-cols-[45%_55%]`, items-center, pt-28 pb-44 (lg pt-24 pb-36, lg:max-h-[900px]). Left column dissolves below lg (`max-lg:contents`) and re-orders by explicit order — headline (1), script tagline (2), artwork (3), badge strip (4), CTA row (5). The artwork overlay stamp sits at top-[12%] (sm: top-[26%]) right with -8° rotation.
- **Section headings row:** flex-wrap items-end, gap-x-10, H2 + script aside, mb-12 (sm:mb-16), max-w-3xl.
- **Content grids:** `lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]`, gap-14 — nutrition label / benefits, certification stamps / factory card.
- **Gallery** (`produk.html`): grid 1 / sm:2 / lg:3 columns, gap-6 (sm:gap-7); section pt-32 pb-28, `overflow-hidden` for off-canvas foliage.
- **Breakpoints:** Tailwind defaults — sm 640px (padding/size steps), lg 1024px (two-column grids, desktop nav, logo grows to 120px).

### Named Rules

**The Ground-Recipe Rule.** Every section paints `radial-gradient` in the same four-stop chain — `#fdf9c8 0%, #f9ef6e 38–40%, #f2e62b 72–74%, #e9d81c 100%` — and moves only the light anchor per section (hero 28% 18%, nutrition 70% 115%, factory 25% -12%, gallery 28% 8%). Never flat #f2e62b.

**The Seam Rule.** Adjacent sections blend through the darkest ground tone: each section's top/bottom edge carries a 160px ramp (`bg-linear-to-b` / `bg-linear-to-t` from #e9d81c to transparent) so section boundaries never show a hard line.

## Elevation & Depth

Depth is layered flatness plus light. Atmospheric depth comes from the ground gradients, seam ramps, and raster props faded/softened by opacity, blur (1–3px) and desaturation (saturate 0.75–0.85). UI shadows appear only as interactive lift, and each is dyed with its element's hue family rather than black.

### Shadow Vocabulary

- **CTA lift, large** (`shadow-xl shadow-sun-pine/30`): hero pill CTA and card CTAs.
- **CTA lift, compact** (`shadow-lg shadow-sun-pine/30`): nav-era compact pill use, contact card CTA.
- **Icon-coin lift** (`shadow-lg`, hue-matched at /25): 56px benefit coins — deep-leaf green, burnt orange rgba(138,74,8)/25, or pine, matching each icon's family.
- **Stamp lift** (`shadow-md shadow-sun-pine/30`): the green serving stamp; the orange pin coin dyes to burnt orange /30.
- **Panel shadow** (`shadow-xl shadow-sun-pine/40`): the mobile menu panel on its pine ground.
- **Footer brand card** (`shadow-lg shadow-[#073a1c]/50`): cream logo card on pine — the darkest tint in the system.
- **Gallery card** (`shadow-sm` + `ring-1 ring-black/5`): the quietest lift; a white card resting on a tinted ground, the build's one near-neutral line.

### Named Rule

**The Tinted-Shadow Rule.** Every UI shadow is dyed with its element's hue family — sun-pine under green, burnt orange under orange, deep-forest #073a1c under the footer. Neutrals survive only as the gallery hairline ring.

## Shapes

Corners are generous. Actions are full pills (9999px); paper cards round at 16px with a 2.5px Pine border; menu panel and its items round 16px/12px; gallery cards round 16px with 12px inner panels. Stamp geometry rides on dashed inner rings (serving stamp, all four certification stamps). The shared five-point star (`#star5` symbol) tops every cert stamp. Tilt is the poster's posture: script -12° to -2°, heading lines -2°/+1°, paper cards ±1.2°, cert stamps -5°/+4° with alternating vertical offsets (±4px), stamp sit-rotation up to +9°. Decorative elements bleed — brush strokes and foliage run off-canvas; props rotate -105° to +68°.

### Named Rule

**The Pill-or-Paper Rule.** Chrome corners are 9999px, 16px, or 12px — nothing sharper ships in UI, and every drawn stamp motion carries a dashed or outlined twin ring.

## Motion

Four motion channels, one easing signature (`cubic-bezier(0.22, 1, 0.36, 1)`), one kill switch. All motile decor is `pointer-events-none` and `aria-hidden` — parallax never blocks reading or clicking.

1. **Entrances** — `.rise` (0.7s, 26px up) and `.pop` (0.9s, scale 0.94) with staggered `animation-delay` / `data-delay`. Above the fold, classes are applied directly; below the fold, `data-reveal="rise|pop"` targets pre-hide under `html.js [data-reveal]` and an IntersectionObserver (threshold 0.12, rootMargin -6%) reveals once and unobserves. No IntersectionObserver → reveal all immediately, so the pre-hide never hides content forever.
2. **Idle loops** — `animate-float` (6s, ±12px) keeps the hero artwork breathing; `bob` (4.5s) and `rock` (5s, transform-box: fill-box) remain in `@theme` as the SVG-scene vocabulary though unused in current markup.
3. **Ambient parallax** (`src/parallax.ts`) — two channels on the raster props. _Mouse sway:_ `data-parallax-scene` sections init parallax.js with `hoverOnly`, scalars 18/14, per-layer `data-depth` (0.15–0.45) — fine-pointer devices only. _Scroll drift:_ `data-drift` (0.12–0.28) on inner imgs applies a rAF-composited `translate3d` whose measurement subtracts already-applied transforms so offsets never compound; re-measures on resize/load/pageshow. Both channels no-op under `prefers-reduced-motion`.
4. **Micro-interactions** — CTA -2px hover lifts with fill deepen, link color walks (pine/80 → pine), the nav underline glide, stamp hover scale 1.05, icon hover coins.

Under `prefers-reduced-motion` every animation/transition collapses to 0.01ms and `scroll-behavior` goes auto. `main.ts` also re-anchors `location.hash` fragments (`scrollIntoView behavior: instant`) after load, because layout-shifting entrances can cancel the browser's initial jump.

### Named Rule

**The JS-Gate Rule.** Anything that hides content before an event (reveal pre-hide) must be gated on the `html.js` class and must have a no-JS fallback; anything that moves proportionally to input (parallax) must be gated on both fine-pointer capability and reduced-motion.

## Components

### Buttons

Full pills that deepen a step in hue on hover with a tinted lift.

- **Primary CTA ("Dapatkan Sekarang" / "Hubungi Kami"):** sun-green fill, white Nunito 800 (18px hero / 15px compact), padding 16×32 / 12×24, arrow icon, shadow-lg/xl tinted pine/30; hover 2px up + fill to Pine Ink; focus-visible 2px pine outline at 2px offset.
- **Icon buttons:** 44px transparent circles (menu toggle, Pine stroke icons) hovering to a white/50 coin; footer social buttons are 40px outlined circles (white/30 border) hovering to border-white/60 + white/10 fill.

### Header / navigation (`src/nav.ts`)

Rendered into `#site-header` on both pages. Logo (raster `sunlicious-logo.svg`, 104px → 120px at sm) links home; hover lifts 2px. Desktop nav (lg+): four links — Home, Produk (`/produk.html`), Kebaikan (`#kebaikan`), Tentang Kami (`#tentang`) — 15px Nunito 700 pine/80, active page extrabold full pine with `aria-current="page"`. A 3px pine underline bar glides to the hovered/focused link (300ms), returns to the active link on leave, and clicking a link moves the active state (weight swap included); initialized off the same geometry, re-anchored on resize and `document.fonts.ready`. No-JS fallback: static 28px bar 8px below the current link; `.nav-enhanced` swaps the fallback for the slider. Cross-page hrefs resolve per page (`/index.html#kebaikan` from produk). Mobile: the nav is replaced by a 44px menu toggle opening a pine panel (`rounded-2xl`, 12px padding, white/85 items at 12px rounding, white/10 hover coins) that closes on link click and Escape.

### Footer (`src/footer.ts`)

Pine ground entered through a curved wave SVG (56px, `bottom-full`, bridging from the section above). Three-column grid at md+ (1.1fr / 0.6fr / 1.3fr): cream logo card (-3°, shadow tinted #073a1c/50) + script tagline in Juice Gold + 46ch blurb; page links column (column titles 13px uppercase, tracking 0.14em, Juice Gold) with active = white, rest white/85; contact column with address, tel + email + hours rows with 18px white/70 icons. Social: Instagram and Facebook as 40px outlined circles. Bottom bar: hairline white/15 divider, copyright, company number, and the certification strip in Juice Gold ("Halal JAKIM · MeSTI · HACCP · GMP").

### Paper cards (signature component)

`#fffef4` field, 2.5px Pine border, 16px radius, ±1.2° rotation, p-6/p-8. The **nutrition label** carries the MAKLUMAT PEMAKANAN masthead, a Pine-ruled serving block, a bordered table (2px Pine row rules, /30–/20 sub-rules, tabular-nums, right-aligned values) with the Vitamin C row highlighted `bg-sun-glow/60`, and a footnote in 11px. The **factory card** adds a header with an orange pin coin, an icon-bulleted contact list (hover: green + underline, focusable tel/mail/wa links), a dashed 1.5px Pine/40 divider, and a green "Hubungi Kami" pill with company number aside. Both cards are `data-reveal="pop"`.

### Certification stamps

Four inline SVG medallions (120px viewBox): Halal JAKIM (green ring), MeSTI KKM (orange), HACCP (deep leaf), GMP (gold). Each: `#fffef4` disc, 3px family ring, 1.5px dashed inner ring at 65%, star-topped `#star5`, Baloo 2 name in Pine, label caption + "SEJAK <year>" in the ring color. Widths 112–136px, tilts -5°→+4°, alternating lg vertical offsets, hover scale 1.05 (300ms), revealed as a staggered `rise` row (0.08s steps).

### Benefit rows (kebaikan)

Icon coin (56px white circle, hue-matched lg shadow) + 19px/800 Nunito heading + 15px/700 blurb at 46ch; staggered `rise` (0.1s steps). Closes with a cream note-pill ("Manisnya dari buah, bukan gula tambahan!") at -2°.

### Gallery cards (`src/produk.ts`)

Data-driven `<li>` grid. White `rounded-2xl` card with `ring-1 ring-black/5`, p-2.5/3, h-full flex column. Media panel: `aspect-[4/5]`, 12px inner radius, per-product tint — a radial white glow over a linear `panelLight → panelTint` gradient (Nanas cream, Mangga mango-cream #fffaef/#fff0d9, Kelapa sky-wash #f7fbfe/#e9f3fa) — with the bottle raster at `object-contain mix-blend-multiply` so the bottle sits in the tinted paper. Caption: Baloo 2 20–22px name + "500ml" suffix in pine/55, 13.5px semibold description pine/75. Cards pop in with a 0.08s stagger.

### Asset slots (swap protocol)

The poster is assembled from declared raster slots: hero headline art (`product-logo-large`, 854×451, eager), promise-badge strip (`facts-badges`, 962×289 — the three claims live inside this image), key visual (`featured_nanas.webp`, 737×747, eager, floats on `animate-float`), logo (`sunlicious-logo.svg`), gallery bottles, and the prop layer pack (`layers-_0000…0013`). Photo-like slots ship as AVIF+WebP `<picture>` pairs with a WebP `src` fallback; where only one format exists today, the pair is the upgrade path. Swap a slot by replacing the file set in one change and re-checking: intrinsic `width/height`, the Malay `alt` copy, overlay-stamp anchor percentages after a key-visual swap, and the decorative role of any prop layer (where that file appears and at what size/rotation). Overlays on the artwork are percentage-positioned HTML, so they survive any file swap.

## Do's and Don'ts

### Do:

- **Do** keep every word of copy as HTML; the only baked text lives inside declared raster slots (headline/badge/logo assets) — swap images, never chip overlays onto them.
- **Do** paint new sections on the ground recipe with their own light anchor, and add a #e9d81c seam ramp wherever two sections meet.
- **Do** tint each element's shadow and coin with its own hue family.
- **Do** extend the raster prop vocabulary with the established treatment: pointer-events-none, aria-hidden, blur/desaturate with distance from content, `data-depth` + `data-drift` values, AVIF+WebP pairs.
- **Do** stagger entrances with `data-reveal` + `data-delay` and keep them behind the `html.js` no-JS gate.
- **Do** reuse the paper-card / stamp / icon-coin / note-pill family for new content blocks, tilts and all.
- **Do** keep product rasters on `mix-blend-multiply` over a per-product panel tint.

### Don't:

- **Don't** ship gray or black text or black UI-scale shadows — ink is Pine Ink; the gallery hairline ring is the only near-neutral allowed (The No-Gray Rule).
- **Don't** promote prop/artwork-internal colors (brush greens #2e9e3e/#4cbf57, label paper #fffef4, heart red #e23b3b, per-product panel tints) to `@theme` tokens until a second surface needs them.
- **Don't** typeset display/script text perfectly level — they carry -12° to +1°; level is reserved for tables, nav, and buttons (The Hand-Tilt Rule).
- **Don't** let parallax props sit above copy (z-5 under z-10; foreground exceptions are declared, pointer-events-none, and never over the header).
- **Don't** add motion that bypasses the easing signature, the reduced-motion collapse, or the fine-pointer gate (The JS-Gate Rule).
- **Don't** break a `<picture>` slot's AVIF/WebP pairing or its intrinsic dimensions when swapping an asset.
- **Don't** use yellow-on-yellow for actions or give Sky Blue a role beyond (future) badge accents — greens are the action colors.
