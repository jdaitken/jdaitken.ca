# Refresh log — jdaitken.ca

## 2026-11-01 — Spec sheet redesign (/polish) · claude-opus-5-5
Lighthouse (mobile, live, devtools throttling): home 99/100/79/100 · LCP 1.6s · CLS 0 · 752 KB; ottawa-web-design 99, about 96, work 94 (a11y 95 pre-existing).
vs last: home 98–99 → 99, 792 → 752 KB. Default simulated mode reads 75–76 on every page, untouched ones included: first paint now lands after window load and races the post-load gtag/fbevents fetch in js/tracking.js, so Lantern counts those bytes (LCP ~7.3s simulated vs 1.6s observed). Local branch-vs-main runs were at parity every stage.
Shipped (PRs #4–#8): styles/polish.css override layer on 21 pages; 4-link nav, phone as navy outline button, active page underlined navy; three action tiers, no arrows; footer regrouped Services/Company/Areas/Find us. Home: hero proof card (Legendary 17/11, screenshot desktop-only), split problem band, case rows with ruled stat strips, CCC Vault replaces J&J, ruled steps, 2 full reviews + link, guarantee inside the closing band. Service/area pages, pricing, contact: same system; contact links navy, repeat promise box removed. About: launch time 7–14 days (matches OFFER.md), Legendary "11 in June, 17 in July" (dropped unverified "zero"), Patrick replaces Arlene. Work: ruled rows, CCC Vault screenshot, client-only featured reviews.
Deferred: delay vendor scripts a beat after load in js/tracking.js to settle the simulated score (S, touches tracking — needs JD's OK); home + service-page FAQ still says "About a week" (S); swap J&J for CCC on service pages (S, copy says "two Ottawa contractors"); About story and promise sections still centred (S).

## 2026-10-31 — Winter refresh · claude-opus-5-5
Lighthouse (mobile): perf 98–99 · a11y 100 · bp 77 · seo 100 · LCP 1.0s · CLS 0.00 · 792 KB
vs last: first logged run; unchanged by this refresh (all within budget). bp 77 is the Meta/Ads third-party cookies.
Shipped: mobile call bar navy (one red per screen); winter go-live line in the hero subtitle; guarantee dropped from home + About meta descriptions; About title "About JD Aitken | Ottawa Web Design for Trades"; www → apex 301.
Deferred: proof card in the empty right half of the desktop hero (M; image hero was retired on purpose, so a deliberate call); Kanata/Nepean location pages "discovered – not indexed" (need distinct local content, L); request indexing for /work/legendary-landscaping/ and /barrhaven-web-design/ (JD, Search Console).
