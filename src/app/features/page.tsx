import type { Metadata } from "next";
import { CheckCircle2, CircleSlash } from "lucide-react";
import { Shot } from "@/components/Shot";
import { Reveal } from "@/components/motion";
import { Badge, Callout, CtaBand, PageHero, Toc } from "@/components/ui";

export const metadata: Metadata = {
  title: "Features",
  description: "Everything Lead Finder 1.8.1 does: Google Maps, Facebook, LinkedIn and podcast lead search, email discovery, lead management, CSV export, WhatsApp checks and outreach campaigns.",
  alternates: { canonical: "/features/" },
};

const toc = [
  { id: "google-maps", label: "Google Maps leads" },
  { id: "facebook", label: "Facebook posts" },
  { id: "linkedin", label: "LinkedIn companies" },
  { id: "podcasts", label: "Podcasts & emails" },
  { id: "leads", label: "Managing leads" },
  { id: "whatsapp", label: "WhatsApp & outreach" },
  { id: "security", label: "Security & data" },
  { id: "interface", label: "Interface & updates" },
  { id: "status", label: "Available vs. not available" },
];

function Feature({ id, badge, title, intro, children }: { id: string; badge: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line pt-14 first:border-t-0 first:pt-0">
      <Reveal>
        <Badge>{badge}</Badge>
        <h2 className="text-gradient mt-4 text-[clamp(28px,3.6vw,40px)] font-semibold leading-tight">{title}</h2>
        <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-text-2">{intro}</p>
      </Reveal>
      <div className="prose-lf mt-6">{children}</div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero eyebrow="Features" title="Everything Lead Finder does today.">
        Every feature on this page is in the current release, version 1.8.1, and every screenshot comes from that release running real searches.
      </PageHero>
      <div className="container-x mt-16 grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <Toc items={toc} />
        </aside>
        <div className="grid gap-16 min-w-0">
          <Feature id="google-maps" badge="Google Maps" title="Businesses from Google Maps, as you watch" intro="Type a keyword such as “Bakery in Lahore”. Lead Finder runs the search in Google Maps inside your own Chrome, opens each listing and reads its public details.">
            <Shot name="maps-running-late" />
            <ul>
              <li><strong>Website filter:</strong> <em>Without website</em> (the default, including businesses with only a social page), <em>With website</em> (saves the domain), or <em>All businesses</em>.</li>
              <li><strong>Reads</strong> the name, phone, address and website link of each listing, scrolling the whole result list until Google Maps reports the end, or until you press <strong>Stop Search</strong>.</li>
              <li><strong>Extra web check</strong> for businesses without a website: a Google search for the business confirms that no matching site exists. Directory sites (Yelp, OLX, Zameen and similar) never count as a business’s own website.</li>
              <li><strong>Saved instantly:</strong> each qualified lead is written to the local database the moment it is found, so a stop or crash loses nothing. If the app closes mid-search, the next launch offers to resume.</li>
              <li><strong>Phone numbers</strong> are checked against each country’s real numbering plan (libphonenumber) and stored in international form. Numbers that can’t be confirmed are marked <em>Unverified</em> rather than guessed.</li>
              <li><strong>Slow, human pace:</strong> a few seconds between listings and a longer break every 25.</li>
            </ul>
            <Shot name="maps-captcha-paused" />
            <Callout tone="warn" title="CAPTCHAs and blocks are never bypassed">
              If Google shows a CAPTCHA, an “unusual traffic” page or a consent page, the search pauses and keeps its place. Lead Finder tries a fresh tab once, offers a confirmed Chrome restart once, and otherwise waits for you to solve it in Chrome. Choosing <em>With website</em> skips the extra Google web check altogether.
            </Callout>
          </Feature>

          <Feature id="facebook" badge="Facebook" title="Phone numbers from Facebook posts" intro="With the Facebook switch on, Lead Finder searches Facebook posts for your keyword at the same time as Google Maps, in a separate window of your Chrome, using your own Facebook login.">
            <Shot name="sources-all" />
            <ul>
              <li>Searches posts for the keyword, and for the category with the keyword’s place (for example “Garments Lahore”).</li>
              <li>Saves only numbers a post actually shows: in its text, its WhatsApp or <code>tel:</code> links, and visible comments (a commenter’s number is saved under the commenter). Up to 150 posts per query.</li>
              <li>Understands many formats and countries — <code>0300-1234567</code>, <code>+92 300 1234567</code>, <code>+1 (212) 555-0123</code>, Urdu digits — and ignores prices, dates, counts and IDs.</li>
              <li>A number already saved from Google Maps or Facebook never becomes a second lead.</li>
            </ul>
            <Callout tone="note">Facebook needs you to be logged in to Facebook in your Chrome. Lead Finder never logs in for you; login pages, security checks and “temporarily blocked” messages are reported and the Google Maps results are kept.</Callout>
          </Feature>

          <Feature id="linkedin" badge="LinkedIn" title="Companies that need what you offer" intro="Type what you sell into the LinkedIn search bar — for example “Full Stack Developer” — and Lead Finder finds companies hiring for it or asking for it, then looks for their public business phone and email.">
            <Shot name="linkedin-running-late" />
            <ul>
              <li><strong>Modes</strong> (each can be switched off): <strong>Jobs</strong> — every page of LinkedIn’s public job results and each job’s hiring company; <strong>Posts</strong> — posts about hiring, projects or outsourcing; <strong>Companies</strong> — LinkedIn’s company search, kept only when the description or industry matches.</li>
              <li><strong>Contacts, in order:</strong> the LinkedIn company page, then Google Maps (only when it is clearly the same business), then the company website’s home, Contact and About pages.</li>
              <li>Each lead says what was found and where — for example <em>“phone: found (Google Maps); email: not published (checked: LinkedIn, Google Maps, website)”</em>. Contact details are never made up.</li>
              <li>Each company is processed once and saved as soon as it is done. A long search can take hours (about 10–30 seconds per company).</li>
            </ul>
            <Callout tone="note">LinkedIn’s public job results work without a login. Company pages, posts and company search need you to be logged in to LinkedIn in Chrome.</Callout>
          </Feature>

          <Feature id="podcasts" badge="Podcasts" title="Podcasts and their public contact emails" intro="The Podcasts workspace finds podcasts on a topic and their published contact emails — automatically, with no “find email” button to press.">
            <Shot name="podcasts-done" />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Platform</th><th>How it is searched</th><th>What you need</th></tr>
                </thead>
                <tbody>
                  <tr><td>Apple Podcasts</td><td>Apple’s public search and lookup</td><td>Nothing</td></tr>
                  <tr><td>YouTube</td><td>YouTube Data API v3 (playlists YouTube marks as podcasts)</td><td>A free YouTube API key, entered in Settings</td></tr>
                  <tr><td>Listen Notes</td><td>Its official API, with RSS feeds</td><td>API key</td></tr>
                  <tr><td>Spotify</td><td>Reads the podcasts its search shows in your Chrome; audiobooks are left out</td><td>Chrome</td></tr>
                  <tr><td>Deezer</td><td>Reads the shows its search lists in your Chrome</td><td>Chrome</td></tr>
                  <tr><td>Player FM</td><td>Reads the shows its search lists in your Chrome</td><td>Chrome</td></tr>
                  <tr><td>Pandora</td><td>Reads the podcasts its search lists in your Chrome</td><td>Chrome; US only</td></tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li><strong>Email discovery:</strong> the RSS feed’s owner fields, show description and every episode’s notes; then the podcast’s website (Contact, About, Guest booking pages) and public link-in-bio pages. Websites are read only where their robots.txt allows.</li>
              <li><strong>Honest results:</strong> the best email comes first; an address from a single episode (often a guest’s) is listed last; hosting-platform and Apple private-relay addresses are kept but marked <em>Platform address only</em>.</li>
              <li><strong>Every podcast is saved</strong> the moment it is found, with or without an email, with the keyword, platform, source link and time.</li>
              <li>Paste a podcast link (Apple, YouTube, Amazon Music, Spotify) or any podcast website instead of a topic.</li>
            </ul>
            <Shot name="podcasts-selection" />
            <p>The podcast library shows cards or a table, with <strong>All leads / Email found / No email / Pending</strong> filters and counts, a filter by search, platform and text, sorting, <strong>Retry</strong> for leads without an email, and bulk <strong>Export</strong> and <strong>Delete</strong> of selected or all leads.</p>
          </Feature>

          <Feature id="leads" badge="Lead management" title="Organised by category and day" intro="Every search is filed under a category you choose. Today’s leads are the default view; earlier days are one click away.">
            <Shot name="past-leads" />
            <ul>
              <li><strong>Filters:</strong> category, website (all / without / with), campaign (Seen / Unseen), source (Google Maps, Facebook, LinkedIn, Podcasts), WhatsApp status, date or date range, and a search by name, business or phone.</li>
              <li><strong>Export CSV</strong> exports exactly what is shown; <strong>Export all</strong> exports everything. UTF-8 files that open in Excel and Google Sheets.</li>
              <li><strong>Delete</strong> a row, the selected rows, or everything shown — always after a confirmation. A deleted business is not added back by later searches.</li>
              <li><strong>Categories</strong> can be renamed, merged or deleted without losing leads.</li>
              <li>One lead per business across all sources: the same number or company found twice is merged, never duplicated.</li>
            </ul>
          </Feature>

          <Feature id="whatsapp" badge="WhatsApp" title="WhatsApp checks and outreach campaigns" intro="Link one or several WhatsApp accounts with a QR code. Lead Finder checks which lead numbers use WhatsApp, lets you send individual messages, and can run slow, category-based introduction campaigns — in parallel, one per account.">
            <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
              <Shot name="outreach-campaigns" sizes="(min-width: 1024px) 520px, 100vw" />
              <Shot name="outreach-settings" sizes="(min-width: 1024px) 380px, 100vw" />
            </div>
            <ul>
              <li><strong>Automatic checks:</strong> every saved lead with a validated international number is checked in the background, one number every 4 seconds. Confirmed numbers turn green.</li>
              <li><strong>Individual messages:</strong> click a green number to write a message; it is marked sent only when WhatsApp returns a message ID.</li>
              <li><strong>Category campaigns:</strong> switch a category ON and its confirmed, never-messaged leads are queued. Message 1, plus any messages you add, a random 30–60 seconds apart, then the campaign’s interval before the next contact (30 minutes by default, editable), a daily limit per campaign (15 by default, editable), only within sending hours in the recipient’s time zone.</li>
              <li><strong>Message variations:</strong> add as many versions of each message as you like, with <code>{"{name}"}</code> and <code>{"{business name}"}</code>; contacts get them in rotation, never the same one twice in a row.</li>
              <li><strong>Links and voice files:</strong> add titled links (demo, portfolio, product pages) and audio files from your computer to a campaign; they go out with the message you choose, voice files in their original format.</li>
              <li><strong>Live progress:</strong> who is being messaged now, the next two, the latest sends and previews of every variation, updated as messages go out.</li>
              <li><strong>Several accounts:</strong> each linked account shows its own status and can be disconnected or reconnected on its own. You choose the account before a live campaign starts; campaigns on different accounts run at the same time, each with its own schedule.</li>
              <li><strong>Replies and opt-outs:</strong> replies are recorded and the planned messages continue until you stop them; messages like “stop” or “not interested” opt the number out for good. Nobody is messaged twice.</li>
              <li><strong>Test run</strong> goes through the whole schedule without sending anything.</li>
            </ul>
            <Callout tone="warn" title="Read before using WhatsApp features">
              WhatsApp linking uses Baileys, an open-source WhatsApp Web library — <strong>not an official WhatsApp API</strong>. WhatsApp’s terms don’t allow automated or unofficial clients, and accounts used this way can be restricted or banned, especially when messaging people who don’t know you. Use a number you can afford to have restricted, keep volumes low, and only contact businesses you have a genuine reason to contact.
            </Callout>
          </Feature>

          <Feature id="security" badge="Security & data" title="Private by default" intro="Lead Finder has no cloud account. Your leads, settings and WhatsApp link live in the app’s data folder on your computer.">
            <Shot name="security-menu" />
            <ul>
              <li><strong>App lock:</strong> a four-digit PIN, stored as a salted scrypt hash and encrypted with the OS keychain when available. After 5 wrong PINs the app pauses, from 30 seconds up to 15 minutes. A forgotten PIN is reset with a new PIN emailed to the administrator.</li>
              <li><strong>WhatsApp session</strong> files are encrypted with the OS keychain; without a keychain, linking is disabled rather than stored weakly.</li>
              <li><strong>Your Chrome, your login:</strong> Lead Finder connects to the Chrome you already use. It doesn’t copy your profile, read cookies or passwords, or log in on your behalf.</li>
              <li><strong>Your leads are never uploaded.</strong> The app goes online for the searches you run, to check for updates, and to email your activation request to us.</li>
            </ul>
          </Feature>

          <Feature id="interface" badge="Interface" title="Calm interface, automatic updates" intro="Light and dark mode, live progress, and updates that never interrupt a search.">
            <Shot name="leads-dark" />
            <ul>
              <li><strong>Light and dark mode</strong>, following your system until you choose.</li>
              <li><strong>Agent card</strong> shows what the search is doing; a <strong>completion card</strong> shows real counts when it ends.</li>
              <li><strong>Automatic updates:</strong> Windows and AppImage install silently; the Linux .deb asks for your password; macOS shows a Download button (the Mac builds are not signed yet). Updates wait until a running search finishes.</li>
              <li>Respects your system’s <em>reduce motion</em> setting.</li>
            </ul>
          </Feature>

          <section id="status" className="scroll-mt-24 border-t border-line pt-14">
            <Badge tone="muted">Status</Badge>
            <h2 className="text-gradient mt-4 text-[clamp(28px,3.6vw,40px)] font-semibold leading-tight">Available today vs. not available</h2>
            <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-text-2">We only list what the current release does. There is no public roadmap; these are the known gaps.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="card p-6">
                <h3 className="flex items-center gap-2 font-semibold text-text"><CheckCircle2 size={18} className="text-accent" aria-hidden="true" /> Available in 1.8.1</h3>
                <ul className="mt-4 grid gap-2 text-[15px] text-text-2">
                  {["Google Maps, Facebook and LinkedIn lead search", "Podcast search on Apple Podcasts, YouTube and Listen Notes", "Spotify, Deezer, Player FM and Pandora read in Chrome", "Automatic podcast email discovery", "Categories, Today / Past leads, filters, CSV export", "WhatsApp checks, messages and campaigns", "PIN lock, light/dark mode, automatic updates", "Windows, macOS (Intel + Apple Silicon), Linux"].map((x) => (
                    <li key={x} className="flex gap-2"><span aria-hidden="true" className="text-accent">✓</span>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="flex items-center gap-2 font-semibold text-text"><CircleSlash size={18} className="text-warn" aria-hidden="true" /> Not available</h3>
                <ul className="mt-4 grid gap-2 text-[15px] text-text-2">
                  {["Mobile apps (iPhone, iPad, Android) — the app drives desktop Chrome, which mobile systems don’t allow", "Code-signed installers — Windows SmartScreen and macOS show a warning the first time", "Fully automatic updates on macOS (needs a signed build)", "Automatic reading of Spotify or Amazon Music search results", "Solving CAPTCHAs or bypassing logins and limits — by design"].map((x) => (
                    <li key={x} className="flex gap-2"><span aria-hidden="true" className="text-warn">–</span>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <CtaBand title="See it on your own computer." />
    </>
  );
}
