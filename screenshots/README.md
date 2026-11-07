# Screenshots

Every image on the website is a genuine screenshot of **Lead Finder 1.8.1**
running from its own source code on Linux, captured on 30 October 2026.

- `originals/` — the full-resolution PNG captures (2× scale, 2880×1800).
- `../public/screenshots/` — the WebP versions the site serves
  (`npm run images` regenerates them and `src/content/screenshot-sizes.json`).
- `capture/` — the scripts that drove the app (Playwright + Electron).

## How they were made

- **Real searches**, not mock data:
  - Google Maps: “Bakery in Lahore”, category “Bakery”, Website filter *With website* (12 leads from 15 listings).
  - Apple Podcasts: “gardening” (50 podcasts, 43 with an email).
  - LinkedIn: “Full Stack Developer”, Jobs mode, not logged in (8 company leads from 1,000 jobs).
- Chrome was a **separate, temporary Chrome profile** (`LEAD_FINDER_CHROME_USER_DATA`), not anyone's everyday browser.
- **Activation** used the app's real flow (request → email → code → Verify) with a local test mail server, the development-only test configuration, and the real contact number from `src/main/activation-config.json`. Prices are the real ones.
- **Privacy:** third-party email addresses and phone numbers are partly hidden
  (for example `n•••@gmail.com`, `+923•••••1112`) by replacing characters in the
  page text just before each capture. Nothing else was edited.
- **Outreach screens** (`outreach-campaigns`, `outreach-settings`): Playwright
  launches have no system keychain, and the app disables WhatsApp features
  without one. These two screens were captured with the app's test-only
  WhatsApp stand-in (`LEAD_FINDER_TEST_BAILEYS`). They are cropped to the
  campaign list and campaign settings, which don't depend on it. No QR code,
  linked account or WhatsApp check result from the stand-in is shown anywhere.
- The Facebook source is shown only as a switch: the capture profile had no Facebook login.

## Re-capturing

See the header of `capture/cap.js`. It needs the Lead Finder source next to
this project (or `LEAD_FINDER_SRC`), its `npm install`, a renderer build
(`npx vite build`), Google Chrome and a desktop session.
