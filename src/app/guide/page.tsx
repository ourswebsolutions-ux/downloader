import type { Metadata } from "next";
import Link from "next/link";
import { Shot } from "@/components/Shot";
import { Reveal } from "@/components/motion";
import { Callout, CtaBand, PageHero, Toc } from "@/components/ui";
import type { ShotName } from "@/content/screenshots";
import { contact } from "@/content/product";

export const metadata: Metadata = {
  title: "How to use Lead Finder",
  description: "A step-by-step tutorial with real screenshots: PIN, activation, Google Maps, Facebook and LinkedIn searches, filtering and exporting leads, podcast email discovery, WhatsApp and outreach.",
  alternates: { canonical: "/guide/" },
};

const toc = [
  { id: "start", label: "1 · Open & unlock" },
  { id: "activate", label: "2 · Activate a plan" },
  { id: "search", label: "3 · Search Google Maps" },
  { id: "sources", label: "4 · Facebook & LinkedIn" },
  { id: "leads", label: "5 · View, filter & export" },
  { id: "podcasts", label: "6 · Podcasts & emails" },
  { id: "whatsapp", label: "7 · WhatsApp & outreach" },
  { id: "everyday", label: "8 · Everyday tips" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

type StepProps = { n: string; title: string; shot?: ShotName; children: React.ReactNode };

function Step({ n, title, shot, children }: StepProps) {
  return (
    <li className="grid gap-5 border-t border-line pt-8 first:border-t-0 first:pt-0">
      <Reveal className="grid grid-cols-[44px_1fr] gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent-soft font-mono text-sm font-medium text-accent">{n}</span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-text">{title}</h3>
          <div className="prose-lf mt-1.5 [&>p:first-child]:mt-0">{children}</div>
        </div>
      </Reveal>
      {shot && <Shot name={shot} sizes="(min-width: 1024px) 860px, 100vw" />}
    </li>
  );
}

function Part({ id, title, intro, children }: { id: string; title: string; intro?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-gradient text-[clamp(26px,3.4vw,36px)] font-semibold leading-tight">{title}</h2>
      {intro && <div className="mt-3 max-w-2xl text-[16.5px] leading-relaxed text-text-2">{intro}</div>}
      <ol className="mt-10 grid gap-10">{children}</ol>
    </section>
  );
}

export default function GuidePage() {
  return (
    <>
      <PageHero eyebrow="How to use" title="Learn Lead Finder, step by step.">
        Every step below shows the real app. Follow it in order the first time; afterwards, jump to the part you need. Phone numbers and emails of third parties are partly hidden in the screenshots.
      </PageHero>
      <div className="container-x mt-16 grid gap-12 lg:grid-cols-[230px_1fr]">
        <aside className="hidden lg:block"><Toc items={toc} /></aside>
        <div className="grid min-w-0 max-w-4xl gap-24">
          <Part id="start" title="1 · Open Lead Finder and unlock it" intro={<>Not installed yet? Start with the <Link className="text-accent underline" href="/installation/">installation guide</Link>.</>}>
            <Step n="1.1" title="Create your PIN on first launch" shot="pin-create">
              <p>Choose four digits on the keypad (or type them). Then type them again to confirm. From now on the app asks for this PIN every time it opens.</p>
            </Step>
            <Step n="1.2" title="Meet the main window" shot="main-first-launch">
              <p>At the top: the <strong>Leads · Podcasts · Outreach</strong> workspaces, the Chrome connection status, <strong>Activate</strong>, <strong>WhatsApp</strong>, the light/dark switch and the lock. Below: the search form and your leads.</p>
            </Step>
          </Part>

          <Part id="activate" title="2 · Activate a plan" intro="A 5-day Free Trial of 30 leads starts by itself the first time you open the app. After that, searching, exporting and WhatsApp features need a plan. You pay us directly and we send you a code for your computer.">
            <Step n="2.1" title="Click Activate and choose a plan" shot="activate-plans">
              <p>The panel lists <strong>Monthly (PKR 4,500)</strong>, <strong>6 Months (PKR 15,000)</strong> and <strong>Lifetime (PKR 50,000)</strong>, and shows your computer’s <strong>Activation ID</strong> (for example <code>LF-XXXX-XXXX-XXXX</code>).</p>
            </Step>
            <Step n="2.2" title="Request your code" shot="activate-plan-selected">
              <p>Select a plan and click <strong>Activate</strong>. The app sends the request — your Activation ID, plan and price — to us. The code is never shown to you at this point.</p>
            </Step>
            <Step n="2.3" title="Pay us on WhatsApp or by phone" shot="activate-code-entry">
              <p>Use the <strong>WhatsApp</strong> or <strong>Call</strong> button (or <strong>Copy ID &amp; plan</strong>) to contact us at <strong>{contact.phoneDisplay}</strong>. After we confirm your payment, we send you the 6-digit code.</p>
            </Step>
            <Step n="2.4" title="Enter the code" shot="activate-code-typed">
              <p>Type the code and click <strong>Verify &amp; Activate</strong>. A code works once, for 10 minutes, with 5 tries. If it expires, click <strong>Send a new code</strong> and tell us.</p>
            </Step>
            <Step n="2.5" title="Done" shot="activate-done">
              <p>The plan starts immediately; the header shows the plan and the days left. Renewing early adds the new plan to your current end date.</p>
            </Step>
          </Part>

          <Part id="search" title="3 · Search Google Maps" intro="The first search connects Lead Finder to your Chrome. If Chrome asks to allow remote debugging, see the one-time setup in the installation guide.">
            <Step n="3.1" title="Enter a keyword and a category" shot="maps-form">
              <p><strong>Search keyword</strong> is exactly what you would type into Google Maps, such as <code>Bakery in Lahore</code>. <strong>Category</strong> files the leads (for example <code>Bakery</code>); saved categories are suggested as you type.</p>
              <p>Choose <strong>Website</strong>: <em>Without website</em> (default), <em>With website</em> or <em>All businesses</em>.</p>
            </Step>
            <Step n="3.2" title="Start the search and watch it work" shot="maps-running">
              <p>Click <strong>Start Search</strong>. A Google Maps tab opens in your Chrome; you can watch every step. Leads appear in the table as they are saved, and the agent card at the bottom left says what is happening.</p>
            </Step>
            <Step n="3.3" title="Review the results" shot="maps-running-late">
              <p>Each lead shows the business, phone, address, website, category, source and the time it was discovered. The search continues to the end of Google Maps’ list.</p>
            </Step>
            <Step n="3.4" title="Stop whenever you like" shot="maps-stopped">
              <p>Click <strong>Stop Search</strong> at any time. A card shows the real counts — new leads, listings processed, already saved. Everything found so far is kept.</p>
            </Step>
            <Step n="3.5" title="If Google shows a CAPTCHA" shot="maps-captcha-paused">
              <p>The search pauses and keeps its place. Solve the CAPTCHA yourself in Chrome to continue, or click <strong>Stop Search</strong>. Lead Finder never solves or bypasses it. Tip: the <em>With website</em> filter doesn’t use the extra Google web check.</p>
            </Step>
          </Part>

          <Part id="sources" title="4 · Add Facebook and LinkedIn" intro="Turn on any combination of sources under the search form. They run side by side, each with its own progress row.">
            <Step n="4.1" title="Switch sources on" shot="sources-all">
              <p><strong>Facebook</strong> uses the same keyword and category and reads posts with your Facebook login. <strong>LinkedIn</strong> adds its own <strong>LinkedIn search</strong> bar (for example <code>Full Stack Developer</code>) and modes: Jobs, Posts and Companies.</p>
            </Step>
            <Step n="4.2" title="Run a LinkedIn search" shot="linkedin-form">
              <p>With LinkedIn on its own, the category is optional. Jobs mode reads LinkedIn’s public job results page by page, even without a LinkedIn login; Posts and Companies need you to be logged in.</p>
            </Step>
            <Step n="4.3" title="Read each company’s status" shot="linkedin-running-late">
              <p>Each company is saved when it is done. The LinkedIn source chip shows what was found and where it was checked — LinkedIn, Google Maps and the company website. Contact details are never invented.</p>
            </Step>
          </Part>

          <Part id="leads" title="5 · View, filter and export leads">
            <Step n="5.1" title="Filter the table" shot="maps-running-late">
              <p>Use <strong>Category</strong>, <strong>Website</strong>, <strong>Campaign</strong> (Seen / Unseen), <strong>Source</strong> and <strong>WhatsApp</strong> filters, or search by name, business or phone. They all work together.</p>
            </Step>
            <Step n="5.2" title="Switch between Today and Past leads" shot="past-leads">
              <p><strong>Today</strong> shows leads found today (it rolls over at midnight). <strong>Past leads</strong> shows earlier days: all, one date or a range.</p>
            </Step>
            <Step n="5.3" title="Export to CSV">
              <p><strong>Export CSV (n)</strong> saves exactly the leads shown; <strong>Export all</strong> saves every lead. Files are UTF-8 and open in Excel or Google Sheets.</p>
            </Step>
            <Step n="5.4" title="Delete leads">
              <p>Use the bin icon on a row, select rows and click <strong>Delete selected</strong>, or <strong>Delete all shown</strong>. You are always asked first, and deleted businesses are not added back by later searches.</p>
            </Step>
          </Part>

          <Part id="podcasts" title="6 · Find podcasts and their emails" intro="Switch to the Podcasts workspace at the top.">
            <Step n="6.1" title="Open Podcasts" shot="podcasts-empty">
              <p>One search box and a switch per platform. Apple is on by default.</p>
            </Step>
            <Step n="6.2" title="Choose platforms" shot="podcasts-platforms">
              <p><strong>Apple</strong> needs nothing. <strong>YouTube</strong> needs a free API key (Settings). <strong>Listen Notes</strong> needs an API key too. <strong>Spotify</strong>, <strong>Deezer</strong>, <strong>Player FM</strong> and <strong>Pandora</strong> are searched in your Chrome, and the shows they list are added.</p>
            </Step>
            <Step n="6.3" title="Search a topic" shot="podcasts-keyword">
              <p>Type a topic or podcast name — or paste a podcast link or website — and press <strong>Search</strong>. <strong>Save to</strong> sets the category.</p>
            </Step>
            <Step n="6.4" title="Watch emails being found" shot="podcasts-running">
              <p>Every podcast is saved straight away as <em>Pending</em>; the counters show new, duplicate, saved and rejected results while emails are looked up automatically.</p>
            </Step>
            <Step n="6.5" title="Read the result" shot="podcasts-done">
              <p>The search ends with its real totals — here, 50 podcasts and 43 with an email.</p>
            </Step>
            <Step n="6.6" title="Filter by email status" shot="podcasts-no-email">
              <p>Use <strong>All leads</strong>, <strong>Email found</strong>, <strong>No email</strong> and <strong>Pending</strong>. <strong>Retry</strong> looks again for one lead, or all shown without an email.</p>
            </Step>
            <Step n="6.7" title="Check where an email came from" shot="podcasts-details">
              <p>Click <strong>Details</strong> to see the discovery notes, the RSS feed and every address found.</p>
            </Step>
            <Step n="6.8" title="Switch to the table" shot="podcasts-table">
              <p><strong>Cards</strong> or <strong>Table</strong>; sort by best match, newest, oldest, name or status.</p>
            </Step>
            <Step n="6.9" title="Export or delete" shot="podcasts-selection">
              <p>Tick leads (or <strong>Select all N matching</strong>) and use <strong>Export selected</strong> or <strong>Delete selected</strong>. Without a selection, <strong>Export all</strong> and <strong>Delete all</strong> apply.</p>
            </Step>
            <Step n="6.10" title="Adjust settings" shot="podcasts-settings">
              <p>Choose 25, 50, 100 or 200 results per platform, and add your YouTube API key (checked with YouTube and stored encrypted).</p>
            </Step>
          </Part>

          <Part id="whatsapp" title="7 · WhatsApp checks and outreach">
            <Step n="7.1" title="Link your WhatsApp">
              <p>Click <strong>WhatsApp</strong> at the top, then <strong>Link WhatsApp</strong>. On your phone: WhatsApp → Settings → Linked devices → Link a device, and scan the QR code. The link is remembered.</p>
            </Step>
            <Step n="7.2" title="Let numbers be checked">
              <p>While connected, saved leads with a validated international number are checked in the background, one every 4 seconds. Numbers confirmed on WhatsApp turn green — click one to send a message.</p>
            </Step>
            <Step n="7.3" title="Set up a category campaign" shot="outreach-campaigns">
              <p>Open <strong>Outreach</strong>. Each lead category has a campaign with an ON/OFF switch. Switching ON queues that category’s confirmed, never-messaged leads.</p>
            </Step>
            <Step n="7.4" title="Check the timing — and test first" shot="outreach-settings">
              <p>Start in <strong>Test run</strong>, which goes through the whole schedule without sending. Choose the interval between contacts (30 minutes by default), the daily limit and sending hours, and write message 1, adding more messages, links or voice files only if you want them (with <code>{"{name}"}</code> and <code>{"{business}"}</code> placeholders). Switch to <strong>Live</strong> when you are ready.</p>
            </Step>
            <Callout tone="warn" title="Use WhatsApp responsibly">
              Lead Finder uses an unofficial WhatsApp Web library. WhatsApp may restrict or ban accounts that send automated or unexpected messages. Keep volumes low and only contact businesses with a genuine reason.
            </Callout>
          </Part>

          <Part id="everyday" title="8 · Everyday tips">
            <Step n="8.1" title="Lock the app or change your PIN" shot="security-menu">
              <p>The lock button at the top right offers <strong>Change PIN</strong> and <strong>Lock now</strong>.</p>
            </Step>
            <Step n="8.2" title="Use dark mode" shot="leads-dark">
              <p>The sun/moon button switches themes; your choice is remembered.</p>
            </Step>
            <Step n="8.3" title="Keep the app updated">
              <p>Updates install automatically when no search is running. On macOS, click <strong>Download</strong> when a new version is announced.</p>
            </Step>
          </Part>

          <section id="troubleshooting" className="scroll-mt-24">
            <h2 className="text-gradient text-[clamp(26px,3.4vw,36px)] font-semibold">Troubleshooting</h2>
            <div className="prose-lf mt-6">
              <div className="table-wrap">
                <table>
                  <thead><tr><th>You see</th><th>What it means / what to do</th></tr></thead>
                  <tbody>
                    <tr><td>Start Search is greyed out</td><td>Enter both a keyword and a category (LinkedIn alone needs only its LinkedIn search). Searching also needs an active plan.</td></tr>
                    <tr><td>“Chrome not connected” / a Chrome connection message</td><td>Turn on <code>chrome://inspect/#remote-debugging</code> once and click <strong>Allow</strong> when Chrome asks. The message names exactly what is missing.</td></tr>
                    <tr><td>Paused: Google is showing a CAPTCHA</td><td>Solve it yourself in Chrome to continue, or Stop. Consider the <em>With website</em> filter, or try again later.</td></tr>
                    <tr><td>Facebook: not logged in / security check</td><td>Log in to Facebook in the same Chrome. Lead Finder never logs in or answers checks for you.</td></tr>
                    <tr><td>LinkedIn: “could not check: LinkedIn page (login)”</td><td>Company pages, posts and company search need a LinkedIn login in Chrome. Job results still work without one.</td></tr>
                    <tr><td>Spotify finds no podcasts</td><td>In some countries Spotify’s search lists audiobooks but no podcasts. Turn your VPN on and search again.</td></tr><tr><td>Pandora says it is only available in the US</td><td>Connect your VPN to the United States and search again.</td></tr><tr><td>Player FM asks you to confirm you’re human</td><td>Complete the check in its Chrome window within 2 minutes; the search then continues.</td></tr>
                    <tr><td>Podcast status “Could not check”</td><td>A feed or website failed or refused the request. Click <strong>Retry</strong> later.</td></tr>
                    <tr><td>Activation code “expired” or “wrong”</td><td>Codes last 10 minutes with 5 tries. Click <strong>Send a new code</strong> and message us; the new request cancels the old code.</td></tr>
                    <tr><td>“The activation request could not be sent”</td><td>Check your internet connection and try again, or contact us on WhatsApp.</td></tr>
                    <tr><td>Chrome closed during a search</td><td>Lead Finder reopens Chrome (up to 3 attempts) and continues where it stopped, skipping businesses already processed.</td></tr>
                  </tbody>
                </table>
              </div>
              <p>More answers in the <Link href="/faq/">FAQ</Link>, or <Link href="/support/">contact support</Link>.</p>
            </div>
          </section>
        </div>
      </div>
      <CtaBand title="Ready to try it yourself?" />
    </>
  );
}
