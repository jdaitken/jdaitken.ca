# ARCHITECTURE.md — jdaitken.ca

Reference detail cut from `CLAUDE.md` to keep that file to operating rules only.

## Stack

Static HTML/CSS/JS, no build process. PHP backend for forms/API endpoints. Vanilla JS, no
frameworks. Deployed via GitHub Actions to SiteGround.

## Local development

```bash
php -S localhost:8080
```

Screenshot testing: `node ~/code/ops/shot.js <url> <prefix>` (run from this directory —
see the script's header for why).

## Page structure

Pages live as `index.html` inside named subdirectories, not flat `.html` in root:

```
index.html                          ← Homepage
about/index.html
work/index.html
work/legendary-landscaping/index.html  ← Case study detail page
pricing/index.html
ottawa-web-design/index.html        ← SEO/service landing page
lp/index.html                       ← Paid-ads landing page, no nav
blog/index.html                     ← Blog catalog/listing page
blog/<slug>/index.html
contact/index.html
thanks/index.html   ← Post-form submission confirmation
hi/index.html       ← noindex landing page (outreach/cold leads)
privacy/index.html
arlene/index.html   ← noindex personal mini-app (not part of main site)
```

## CSS design system (four-layer)

Load in this order. The first three are required on every page:

1. `styles/tokens-v2.css` — CSS custom properties (colors, spacing, typography, shadows).
2. `styles/base-v2.css` — Resets, global typography, element defaults.
3. `styles/components-v2.css` — Reusable UI components referencing token variables.
4. `styles/chrome-v2.css` — Shared page chrome: header, mobile menu, footer, audit modal, FAQ,
   guarantee band, case-study cards, final CTA, tap-to-call. Linked (in place of an inline
   `<style>`) on every page except `/about/`, `/lp/`, `/hi/`, `/thanks/`, `/wyman/`, which keep
   their own inline CSS. **Fix chrome bugs here once**, not per page. Anything page-specific
   still lives in that page's inline `<style>`, which loads after it and wins.

## JavaScript

- `js/main.js` — Navigation, mobile menu, contact-form submit handling
- `js/tracking.js` — GA4, Google Ads, and Meta Pixel; loaded in `<head>` on every page
- `js/chat.js` — Dead code, not loaded by any page, kept per the no-delete rule. Backing
  endpoint (`api/chat.php`) was disabled in commit `bac6bf7`.

## PHP API endpoints (`/api/`)

Every live form now posts to Formspree, not these endpoints:
- `contact.php`, `audit.php` — no longer wired to any form; nothing references them.
- `chat.php` — disabled (see above). `api/jdmedia_knowledge.txt` was its knowledge base,
  orphaned along with it.
- `api/tmp/` — rate-limit state files; gitignored.

## Brand assets

- `brand/favicon/` — all favicon sizes + apple-touch-icon
- `images/logos/jd-media-logo.svg` — primary logo
- `images/og-image.png` — OG/social share image

## Archive

`_archive/` holds retired files. Do not edit anything under it.
