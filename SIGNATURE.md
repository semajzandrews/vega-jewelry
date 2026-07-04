# Vega Jewelry — SIGNATURE

- Slug: vega-jewelry
- Live: https://vega-jewelry.vercel.app
- Repo: https://github.com/semajzandrews/vega-jewelry (private)
- Business: jewelry store, 572 Bloomfield Ave, Bloomfield NJ 07003 · 4.4★ Google (38 reviews) · phone (973) 429-0525 → tap-to-call is the primary mobile CTA
- Built: 07-04-2026 · batch: Bloomfield Center #1

## Design fingerprint
- Palette: monochrome vitrine — porcelain (#faf8f4) + ivory (#f4f1ea) base, graphite (#1b1b1e) type, ONE cool metallic accent (silver #aab0bc / #7e8592 → platinum-hi #eef0f4 gradients). Light, editorial, high-jewelry. NO gold, NO green, NO citrus.
- Skeleton: editorial vitrine — asymmetric split-scroll: left column sticky ("Currently viewing" + live section label driven by IntersectionObserver), right column scrolling editorial imagery in varied crops. Services as six numbered editorial entries (01–06). Collapses to single column <768px with the sticky label becoming section headers.
- Signature move (ONE per site): cursor-following spotlight/sheen on imagery — soft radial highlight tracking the pointer over photos, evoking light on metal. Gated to `(hover:hover) and (pointer:fine)`, disabled on touch and under prefers-reduced-motion.
- Sections: hero (rings vitrine) → The House (split-scroll) → What We Do (01 Fine Jewelry · 02 Gold · 03 Engagement · 04 Watches · 05 Repairs · 06 Custom Pieces) → Visit (hours + keyless Google map, ivory-tint ::after) → footer
- Money button: tap-to-call, fixed affordance collapses to 46px icon circle on phones (ARSENAL §13)

## Arsenal Manifest
- Primary medium: photography — a light editorial vitrine sells a neighborhood jeweler on product truth; macro/product photography carries it (trust vertical, realness-forward)
- Video considered: yes — used: no — reason: macro sparkle footage (Mixkit/Coverr) was evaluated per BUILD_RULES §7, but motion video fights the porcelain-calm monochrome concept; the cursor sheen already supplies the "light on metal" moment at near-zero bundle cost. Decision documented, deliberate.
- Media used (all self-hosted in public/img, no hotlinks) — ONE image per slot, gate verified 07-04-2026:
  - photo — Pexels 13570063 — five silver rings upright in cool grey light — hero (sets the monochrome vitrine tone)
  - photo — Pexels 31301818 — jewelry storefront window, white busts — The House lead (library shelf jewelry/display)
  - photo — Pexels 33561789 — necklaces in dark glass case — The House closer (library shelf jewelry/display)
  - photo — Pexels 20299702 — necklace busts under case light — 01 Fine Jewelry (library shelf jewelry/display)
  - photo — Pexels 7134458 — gold pendant necklace on white — 02 Gold (category truth; palette accent stays silver)
  - photo — Pexels 2735981 — pear diamond halo ring on black stone — 03 Engagement
  - photo — Pexels 1034065 — silver moonphase watch macro — 04 Watches
  - photo — Pexels 10474316 — jeweler pliers on workbench — 05 Repairs
  - photo — Pexels 5370641 — silver gemstone studs on white — 06 Custom Pieces
  - All claimed/banked + verified in image-library registry under vega-jewelry
  - Spare claimed (unused, stays claimed): Pexels 28146843 — warm amber display case (off-palette for this build)
- Image-uniqueness gate: PASS — `grep -rhoE '/img/[0-9]+\.jpg' src | sort | uniq -c` → 9 IDs, each count == 1; public/img holds exactly those 9 files
- Motion technique: IntersectionObserver reveal (cubic-bezier rise) + Lenis smooth scroll + sticky-label stage observer — custom, no library defaults
- Custom icons: single inline phone glyph (original path) — license: original work — used once (call affordance)
- Fontshare pairing: Erode (display serif) + Switzer (body) — first use across the registry, self-hosted woff2 (Light/Regular/Medium/Semibold + Erode Italic)
- GPU-verified: n/a — no shader/WebGL (2D CSS/JS motion only, per bundle doctrine)

## Email enrichment (recon step)
- Public business email: NONE FOUND (searched web: Facebook / Yelp / Bloomfield Center district listing) → omitted from site per verified-socials doctrine
- Facebook: facebook.com/vegapalacejewelry — VERIFIED EXACT via BloomfieldCenter.com official district listing for Vega Jewelry at 572 Bloomfield Ave (also surfaced on Yelp as "Vega Palace Jewelry", Bloomfield) → linked in footer
- Instagram: none confirmed → omitted
- Language note: no Spanish-clientele signal found in recon; `<html lang="en">` kept

## Verification
- Prod build: clean static export (`npm run build` PASS), all pages prerendered
- Mobile: split-scroll collapses to single column <768px, sticky label becomes per-section headers; call pill collapses to 46px icon circle; map goes portrait 3/4 min 360px; no fixed-width element >375px
- Map: keyless Google `q=…&output=embed` (Ramos pattern) with LIGHT ivory-tint ::after (0.12) — verify on live in real Chrome, not preview sandbox
- Facts on site: only verified lead data (name, address, phone, hours Mon–Sat 10–7 / Sun closed, 4.4★/38 Google). Offerings framed as "what we do" categories — no invented inventory, brands, or prices.
