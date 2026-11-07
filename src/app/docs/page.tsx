import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Table, Toc } from "@/components/ui";
import { product } from "@/content/product";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Reference documentation for Lead Finder: requirements, Chrome connection, search rules, website and phone rules, podcast email statuses, CSV columns, WhatsApp limits, data storage and updates.",
  alternates: { canonical: "/docs/" },
};

const toc = [
  { id: "requirements", label: "Requirements" },
  { id: "chrome", label: "Chrome connection" },
  { id: "maps", label: "Google Maps search" },
  { id: "website-rules", label: "Website rules" },
  { id: "facebook", label: "Facebook search" },
  { id: "linkedin", label: "LinkedIn search" },
  { id: "podcasts", label: "Podcasts" },
  { id: "phones", label: "Phone numbers" },
  { id: "leads", label: "Leads, categories & export" },
  { id: "whatsapp", label: "WhatsApp & outreach" },
  { id: "activation", label: "Plans & activation" },
  { id: "security", label: "Security & app lock" },
  { id: "data", label: "Data & privacy" },
  { id: "updates", label: "Updates" },
];

export default function DocsPage() {
  return (
    <>
      <PageHero eyebrow="Documentation" title="Lead Finder reference">
        How each part of Lead Finder {product.version} behaves, in detail. New to the app? Start with the <Link className="text-accent underline" href="/guide/">step-by-step guide</Link>.
      </PageHero>
      <div className="container-x mt-16 grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block"><Toc items={toc} /></aside>
        <article className="prose-lf min-w-0 max-w-3xl">
          <h2 id="requirements" className="!mt-0">Requirements</h2>
          <ul>
            <li>Windows 10 or 11 (64-bit); macOS on Apple Silicon or Intel; Linux x86_64 (.deb or AppImage).</li>
            <li>Google Chrome {product.chromeMinVersion} or newer, installed normally.</li>
            <li>An internet connection.</li>
            <li>Optional: logins to Facebook and LinkedIn in Chrome; a WhatsApp account on your phone; a free YouTube Data API key for YouTube podcast search.</li>
          </ul>

          <h2 id="chrome">Chrome connection</h2>
          <p>Lead Finder attaches to the Chrome you already use — same profile, same logins. It doesn’t embed a browser, copy a profile or read cookies.</p>
          <ul>
            <li>Chrome only lets another app use your normal profile when you turn on <code>chrome://inspect/#remote-debugging</code> → <em>Allow remote debugging for this browser instance</em>. Chrome remembers it; afterwards only its <strong>Allow</strong> prompt appears, once per Lead Finder session.</li>
            <li>Lead Finder finds the Chrome profile you are using by itself. If Chrome isn’t running, it is started with that profile.</li>
            <li>If Chrome was started before the switch was saved, Lead Finder offers a confirmed restart: Chrome closes normally and reopens with your tabs.</li>
            <li>If Chrome or its tab closes during a search, Lead Finder reopens it (after 5, 15 and 30 seconds) and continues the same search without duplicates. It stops rather than switch to a different profile.</li>
          </ul>

          <h2 id="maps">Google Maps search</h2>
          <ol>
            <li>Types your keyword into Google Maps in a new tab and checks that Maps really searched for it (retrying once). A search that never ran is reported as an error, never as “no results”.</li>
            <li>Reads the result list, scrolling (and pressing <em>See more</em>) until Maps reports the end of the list, or you press <strong>Stop Search</strong>.</li>
            <li>Opens each listing and reads its public name, phone, address and website link.</li>
            <li>Applies the website rules and saves qualified leads immediately.</li>
            <li>With <strong>Find Emails from Websites</strong> on (off by default), reads each business’s website for a published email: the home page, then Contact, About and similar pages, up to 6 pages a site. Each site is read once per search, and a site’s robots.txt is respected.</li>
          </ol>
          <p>Pacing: a few seconds between listings and a longer break every 25. CAPTCHA, “unusual traffic” and consent pages pause the search; each recovery step (a fresh tab, a confirmed Chrome restart) is tried at most once, then the app waits for you. Network loss is retried after 5, 15 and 30 seconds.</p>

          <h2 id="website-rules">Website rules</h2>
          <Table>
            <thead><tr><th>Situation</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Maps shows a link to the business’s own domain</td><td>Has a website</td></tr>
              <tr><td>Only a Facebook / Instagram / WhatsApp / Telegram / Linktree link, anywhere on the listing, and the web check finds no own site</td><td>Lead: “No website (social page only)”, with the links kept</td></tr>
              <tr><td>No website on Maps, and a Google web search finds no matching site</td><td>Lead: “No website found”</td></tr>
              <tr><td>The web search shows a website for the business</td><td>Has a website (or possible website)</td></tr>
              <tr><td>Details didn’t load, or the check failed or was blocked</td><td>Unverified: kept out of the table, re-checked later</td></tr>
              <tr><td>Permanently closed</td><td>Excluded</td></tr>
            </tbody>
          </Table>
          <p>The <em>With website</em> filter keeps only businesses whose Maps listing links to their own site, and skips the Google web check. Lead Finder never fetches a business’s website itself to judge this, so a site that is temporarily down can’t make a business look website-less.</p>

          <h2 id="facebook">Facebook search</h2>
          <ul>
            <li>Runs in a separate Chrome window, at the same time as Google Maps, using your Facebook login.</li>
            <li>Searches posts for the keyword (and the category plus the keyword’s place). Reads posts on screen, opens <em>See more</em> on long posts, and waits for Facebook to load more until <em>End of results</em>, 150 posts per query, or several empty scrolls.</li>
            <li>Saves only numbers a post shows (text, WhatsApp/<code>tel:</code> links, visible comments), at most 5 per post. A post without a number creates no lead.</li>
            <li>A Facebook lead stores the author’s name, the number, category, keyword, post text (up to 2,000 characters), post and page links, and the date. Its website is shown as <em>Not checked</em>.</li>
            <li>Not logged in, login pages, checkpoints, “temporarily blocked” and loading failures are reported; Google Maps results are kept.</li>
          </ul>

          <h2 id="linkedin">LinkedIn search</h2>
          <ul>
            <li><strong>Jobs:</strong> every page of LinkedIn’s public job results (up to 100 pages) until a page is empty; job titles not about the search are skipped.</li>
            <li><strong>Posts:</strong> up to 60 posts about hiring, projects or outsourcing, by a company or linking to one.</li>
            <li><strong>Companies:</strong> LinkedIn’s company search, keeping companies whose description or industry matches.</li>
            <li>Each company is looked up once: LinkedIn company page → Google Maps (same website, or exact same name in the same city) → company website (home, Contact, About, footer).</li>
            <li>ContactOut is optional. If it is missing, stops working or has nothing for a person, the search carries on with the built-in lookup.</li>
            <li>Every lead records the job title and link, post link, LinkedIn company link, website, email, location and a discovery note such as <em>“email: not published (checked: LinkedIn, Google Maps, website)”</em>.</li>
            <li>Security checks and limit messages stop the LinkedIn pages; a login page stops only the pages that need a login.</li>
          </ul>

          <h2 id="podcasts">Podcasts</h2>
          <h3>Email statuses</h3>
          <Table>
            <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
            <tbody>
              <tr><td>Email found</td><td>A public email for the podcast was found.</td></tr>
              <tr><td>No public email</td><td>Everything that could be checked was checked; no email is published.</td></tr>
              <tr><td>Platform address only</td><td>Only a hosting-platform or Apple private-relay address was found.</td></tr>
              <tr><td>Could not check</td><td>A feed or website failed or refused (including robots.txt rules).</td></tr>
              <tr><td>Discovery pending</td><td>Saved; email discovery hasn’t finished yet.</td></tr>
            </tbody>
          </Table>
          <h3>Where emails are looked for</h3>
          <p>The RSS feed (from Apple, the website’s feed link, or an exact title match on Apple for YouTube and Amazon Music); the feed’s owner fields, show description and every episode’s notes; the platform’s own description; a YouTube channel’s video feed; then the website’s Contact, About and Guest booking pages and public link-in-bio pages. Websites are fetched only where robots.txt allows.</p>
          <h3>Search records</h3>
          <p>Every search records its keyword, platforms, start and end, and every podcast it found, marked <strong>new</strong> or <strong>already saved</strong>. Counts shown while searching: new, duplicate, saved and rejected (not podcasts, or deleted before). One lead per podcast (same Apple id, RSS feed or platform link).</p>
          <h3>Platforms read in Chrome</h3>
          <p>Spotify, Deezer, Player FM and Pandora have no public podcast search, so Lead Finder reads the show names and links their search page shows in your Chrome, at a person’s pace. No private API is used, and nothing gets around a human check or a region limit: Player FM may ask you to confirm you’re human in its window, and Pandora works only from the United States. Spotify’s audiobooks are left out; in some countries it lists no podcasts without a VPN. Each show’s RSS feed is then looked for by exact title on Apple Podcasts. Reading these pages automatically may not be allowed by those services’ terms. Amazon Music is no longer searched; its pasted links still work.</p>

          <h2 id="phones">Phone numbers</h2>
          <ul>
            <li>Numbers are checked with libphonenumber against each country’s numbering plan and stored in international form (for example <code>+923001234567</code>).</li>
            <li>International numbers keep their own country code. Local numbers are converted only when the country is known — from the listing’s address, or the <strong>Local numbers</strong> country setting (Automatic uses the country of most of your leads, then the computer’s time zone).</li>
            <li><strong>Unverified</strong>: country unknown or number not valid there — shown exactly as found. <strong>Invalid</strong>: too short or malformed — shown struck through. The original text is always kept.</li>
          </ul>

          <h2 id="leads">Leads, categories and export</h2>
          <ul>
            <li>Every search is filed under a category; names are normalised (“software house” → “Software House”). Categories can be renamed, merged or deleted; deleting a category keeps its leads as <em>Uncategorized</em>.</li>
            <li><strong>Today’s leads</strong> shows leads discovered on today’s local date; <strong>Past leads</strong> shows all earlier dates, one date or a range.</li>
            <li>One lead per business across sources (same phone, Maps place, LinkedIn company page, website or email). A deleted lead keeps only a minimal marker so it isn’t added back.</li>
            <li>CSV export is UTF-8 with a byte-order mark. Columns include business name, phone, phone status, address, Google Maps URL, website status, WhatsApp, category, date discovered and source, plus Facebook, LinkedIn and podcast columns (host, Apple Podcasts URL, RSS feed, all emails, platforms, search keyword, email status).</li>
          </ul>

          <h2 id="whatsapp">WhatsApp and outreach</h2>
          <ul>
            <li>Linking uses Baileys, an open-source WhatsApp Web library running inside the app — no third-party server or API key. <strong>It is not an official WhatsApp API.</strong></li>
            <li>Background checks: one number every 4 seconds, each checked separately; failed checks are retried after an hour.</li>
            <li>Messages: 1–4,000 characters, at least 8 seconds apart; marked sent only when WhatsApp returns a message ID.</li>
            <li>Campaigns: one contact at a time per campaign; message 1 required, more messages added as needed, a random 30–60 seconds apart; replies are recorded without stopping the sequence; opt-outs stop it; the campaign’s interval before the next contact (30 minutes by default, 1–1440); a daily limit per campaign (15 unique contacts by default, editable to any number); variations of each message rotated between contacts; links and voice files (MP3, M4A, AAC, Ogg/Opus, AMR) sent with a chosen message; campaigns on different accounts run in parallel; sending hours in the recipient’s local time; optional start and end dates.</li>
            <li>Replies stop the sequence; opt-out phrases (for example “stop”, “not interested”, “message na karein”) stop it for good. Each message is reserved before sending, so nobody gets the same message twice. WhatsApp refusals pause the campaign until you resume it.</li>
          </ul>

          <h2 id="activation">Plans and activation</h2>
          <Table>
            <thead><tr><th>Plan</th><th>Price</th><th>Length</th></tr></thead>
            <tbody>
              <tr><td>Free Trial</td><td>PKR 0</td><td>5 days, 30 leads in total; starts by itself</td></tr>
              <tr><td>Monthly</td><td>PKR 4,500</td><td>1 month</td></tr>
              <tr><td>6 Months</td><td>PKR 15,000</td><td>6 months</td></tr>
              <tr><td>Lifetime</td><td>PKR 50,000</td><td>Never expires</td></tr>
            </tbody>
          </Table>
          <ul>
            <li>Needs a plan: searching (Google Maps, Facebook, LinkedIn, podcasts), CSV export, WhatsApp linking, checks and sending, live campaigns. Without a plan you can view, filter and delete saved leads and run test campaigns.</li>
            <li>Codes: 6 digits, valid 10 minutes, usable once, 5 tries, only on the computer (Activation ID) and plan requested. A new request cancels the previous code. Requests are limited to one a minute and six an hour.</li>
            <li>Plans are kept across restarts and updates. Turning the computer’s clock back doesn’t extend a plan.</li>
            <li>The administrator can cancel a subscription. The app checks a signed list at each start and every 10 minutes; a cancelled plan ends on that computer, lead finding stops and saved leads stay. A new code reactivates it.</li>
          </ul>

          <h2 id="security">Security and app lock</h2>
          <ul>
            <li>Four-digit PIN, stored as a salted scrypt hash and encrypted with the OS keychain when available. Until it is entered, the app refuses every request except unlocking.</li>
            <li>Forgot PIN? sends a new four-digit PIN to the administrator only. Entering it unlocks the app and makes it the PIN. It is valid for 24 hours, limited to one request a minute and five a day, and the old PIN works until then.</li>
            <li>After 5 wrong PINs, a pause from 30 seconds growing to 15 minutes, which survives restarts.</li>
            <li>The WhatsApp session is encrypted with the OS keychain (Keychain, Windows DPAPI, GNOME Keyring or KWallet); without one, linking is disabled.</li>
            <li>The PIN protects the app; someone with access to your computer account could still open the database file with other tools.</li>
          </ul>

          <h2 id="data">Data and privacy</h2>
          <ul>
            <li>Leads live in <code>leads.db</code> in the app’s data folder: <code>%APPDATA%\Lead Finder</code> (Windows), <code>~/Library/Application Support/Lead Finder</code> (macOS), <code>~/.config/Lead Finder</code> (Linux).</li>
            <li>Leads are never uploaded. Lead Finder doesn’t read cookies or passwords.</li>
            <li>Diagnostics logs hold counts only — no post text, numbers, cookies or account details.</li>
          </ul>

          <h2 id="updates">Updates</h2>
          <ul>
            <li>Checks 10 seconds after start, then every 4 hours, from the official GitHub Releases.</li>
            <li>Windows and AppImage: downloads (only changed parts when possible), installs silently and restarts. Linux .deb: asks for the administrator password. macOS: shows “Lead Finder X is available” with a Download button.</li>
            <li>Never during a search; failures leave the current version running and try again later. Each install keeps an <code>update.log</code> in its data folder.</li>
          </ul>
        </article>
      </div>
      <CtaBand title="Questions not answered here?">See the <Link className="text-accent underline" href="/faq/">FAQ</Link> or contact support.</CtaBand>
    </>
  );
}
