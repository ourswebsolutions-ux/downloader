# Lead Finder — official website

The marketing and documentation website for **Lead Finder**, the desktop lead-generation app (version 1.8.1). Built with Next.js 16 (App Router, TypeScript), Tailwind CSS 4 and Motion, and exported as a fully static site.

## Pages

| Route | Content |
|---|---|
| `/` | Home: 3D product hero, lead sources, product tour, getting started, audiences, pricing teaser |
| `/features/` | Every feature in 1.8.1, with screenshots; *available vs. not available* |
| `/pricing/` | The three plans, comparison table, payment and activation steps, rules, items to confirm |
| `/download/` | Verified installers for Windows, macOS (Apple Silicon / Intel) and Linux (.deb / AppImage), sizes and SHA-512 |
| `/installation/` | Per-OS installation, first launch and PIN, one-time Chrome setup, verifying downloads, uninstalling, troubleshooting |
| `/guide/` | How to use: numbered steps with real screenshots, plus troubleshooting |
| `/docs/` | Reference documentation |
| `/faq/` | Frequently asked questions |
| `/support/` | Contact & support |
| `/changelog/` | Release notes 1.0.0 → 1.8.1 |
| `/terms-of-use/` | Responsible use and the platforms' terms |

## Run it

Requires Node.js 20.9 or newer.

```bash
npm ci                # install exactly the locked dependencies
npm run dev           # http://localhost:3000
```

## Build and deploy

```bash
cp .env.example .env.local      # then set NEXT_PUBLIC_SITE_URL to the real domain
npm run build                   # static site in out/
```

Upload the contents of `out/` to any static host (Nginx, Apache/cPanel, Netlify, Vercel, Cloudflare Pages, S3). URLs end with a slash (`/pricing/` → `out/pricing/index.html`). Configure the host to serve `out/404.html` for unknown paths.

`NEXT_PUBLIC_SITE_URL` sets canonical links, `sitemap.xml`, `robots.txt` and social previews. Without it they point to `http://localhost:3000`.

Other commands: `npm run lint`, `npm run images` (regenerates the WebP screenshots).

## Where the content comes from

All product facts are in **`src/content/product.ts`** (plans and prices, what a plan unlocks, activation rules, download files with sizes and checksums, contact details) and **`src/content/screenshots.ts`** (captions). They were taken from the Lead Finder source code, its README and the published v1.8.1 GitHub release. Nothing is invented: there are no testimonials, ratings or customer counts.

**Updating for a new app release:**
1. In `product.ts`, change `version`, `releaseDate` and each entry in `assets` (file name, size, SHA-512 from the release's `latest*.yml`).
2. Add the release to `src/app/changelog/page.tsx`.
3. Re-capture changed screens (`screenshots/README.md`), then `npm run images`.

## Needs confirmation before launch

These are not stated anywhere in the app. The site says so where they come up:
- Accepted payment methods, refund policy, moving a plan to another computer or using several computers, prices in other currencies and taxes (`needsConfirmation` in `product.ts`).
- Support hours and response times (`/support/`).
- The support email `info.axoraweb@gmail.com` comes from the app's package metadata. Confirm it is monitored.
- A formal licence agreement, privacy policy and refund policy are not published yet (`/terms-of-use/`).
- The production domain (`NEXT_PUBLIC_SITE_URL`).

The email-failure activation fallback is not mentioned, because it is not active in the published 1.8.1 builds.

## Screenshots

`screenshots/README.md` explains exactly how the genuine screenshots were captured: real searches, a separate Chrome profile, and masked third-party contact details. `screenshots/originals/` holds the full-resolution PNGs.

## Project layout

```
src/app/            Pages (App Router), sitemap, robots, icons
src/components/     Header, footer, 3D hero stage, screenshot frame + zoom, pricing, downloads, UI pieces
src/content/        Verified product facts and screenshot captions
src/lib/site.ts     Site URL and navigation
public/screenshots/ Optimised WebP screenshots (generated)
public/og.png       Social preview image (generated)
screenshots/        Original captures, capture scripts and their documentation
scripts/            Image optimisation
```

## Design notes

- Dark theme built on the app's own brand green and logo. Display font: Bricolage Grotesque. Body and mono: IBM Plex Sans and IBM Plex Mono (the app's own fonts).
- 3D effects are CSS 3D transforms driven by Motion: the hero's layered screenshots settle flat as you scroll and lean toward the pointer, and the feature cards tilt toward the pointer. There is no WebGL, so pages stay light.
- Motion respects the visitor's *reduce motion* setting. The header, menus and the screenshot zoom are keyboard-accessible, and the layout works from 320 px wide.
