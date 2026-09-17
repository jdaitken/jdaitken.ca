# CLAUDE.md

JD Media's own portfolio/business site. Static HTML/CSS/JS + PHP forms, no build process.
Page structure, CSS layers, JS files, API endpoints: `ARCHITECTURE.md`.

## Brand

Source of truth: `brand/BRAND-GUIDE.md` (v3.0) — read before any visual or copy change,
don't rely on values restated elsewhere. Headline points: navy-dominant with signal red
(`#C9403A`) rationed to one CTA per screen, Barlow headlines / Inter body, no agency
jargon, the 90-day guarantee stated once per page at the decision point, never in the
hero.

**Hard rule:** never hardcode colors, spacing, or font names — always `var(--token-name)`.

## Deployment

Push to `main` — GitHub Actions deploys via rsync to SiteGround automatically. Deploy
after every change, don't batch. `deploy.sh` exists but is not used for this project.

```bash
git add <changed-files>
git commit -m "..."
git push origin main
```

## Workflow rules

**Frontend changes:** invoke the `frontend-design` skill for any HTML, CSS, or visual
layout change.

**Client case studies:** Legendary Landscaping, Capital City Cards, and J&J Remodeling are
all cleared for public use.
