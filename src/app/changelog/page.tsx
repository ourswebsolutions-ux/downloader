import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { product } from "@/content/product";

export const metadata: Metadata = {
  title: "Release notes",
  description: "What changed in each Lead Finder release.",
  alternates: { canonical: "/changelog/" },
};

// From the app's git history and GitHub release dates.
const releases: { v: string; date: string; notes: string[] }[] = [
  { v: "1.17.0", date: "2026-11-07", notes: ["Lock screen: Forgot PIN? sends a new four-digit PIN to the administrator. Entering it unlocks Lead Finder and becomes your PIN.", "Update notices now show on the lock screen too.", "Spotify: every show found is checked for emails, in its description and, when it has none, in its episodes (loading more episodes as needed). RSS feeds are read too, and a show no longer needs one.", "Podcast emails: each email keeps its source (show description, episode description or RSS) and episode, shown in Details and in new Episode Title, Email Source and Spotify URL export columns. Addresses written straight into the next word are cut correctly."] },
  { v: "1.16.0", date: "2026-11-05", notes: ["Podcasts: Listen Notes, Deezer, Player FM and Pandora added. Amazon Music is no longer searched; its pasted links still work.", "Spotify: the podcasts its search shows are now read from your Chrome and added, with audiobooks left out. In some countries Spotify lists podcasts only with a VPN.", "Google Maps: every link on a listing is now checked. Facebook, WhatsApp, Instagram and other social or contact links are kept with the lead and never counted as a website."] },
  { v: "1.15.0", date: "2026-11-05", notes: ["Google Maps: a new Find Emails from Websites option reads each business’s website (home page, Contact, About and similar pages) for a published email. Off by default.", "LinkedIn: ContactOut is now optional. If it is missing, stops working or has nothing for a person, the search carries on with the built-in lookup of the company website.", "Subscriptions can be cancelled by the administrator: the plan ends on that computer, lead finding stops, the app says so, and saved leads stay. A new code reactivates it."] },
  { v: "1.14.0", date: "2026-11-04", notes: ["Free Trial: 5 days and 30 leads in total, starting by itself on first launch with no payment or code.", "The days and leads left show in the app; at 30 leads or after 5 days, lead finding stops with an upgrade prompt.", "Reinstalling doesn’t start the trial again. Paid plans are unchanged."] },
  { v: "1.13.0", date: "2026-11-03", notes: ["Outreach messages: message 1 only by default; add more messages, links and voice files when you need them, and remove them again.", "A random 30–60 seconds between messages to the same contact.", "A reply no longer stops the contact’s remaining messages (opt-outs still do).", "Fixed Outreach layout: the campaign list and each section scroll on their own."] },
  { v: "1.12.0", date: "2026-11-03", notes: ["Outreach redesign: campaign overview with live progress (now sending, next, See more), the latest sends and message previews.", "Message variations: any number of versions of each message, rotated between contacts.", "Links with titles and voice files (MP3, M4A, AAC, Ogg/Opus, AMR) sent with a chosen message, each sent once.", "Daily sending limit per campaign: 15 by default, editable to any number."] },
  { v: "1.11.0", date: "2026-11-02", notes: ["Outreach: several WhatsApp accounts, each with its own status, connect and disconnect; choose the account before a live campaign starts.", "Campaigns on different accounts run in parallel, each with its own schedule and interval.", "Interval between contacts: 30 minutes by default, any value per campaign.", "Monthly plan: up to 100 new leads a day across all sources (leads already saved don’t count)."] },
  { v: "1.10.1", date: "2026-10-31", notes: ["Windows portable build (no installation), on the release page."] },
  { v: "1.10.0", date: "2026-10-31", notes: ["Bridges: use a Linux laptop’s Bluetooth and the phone connected to it from Lead Finder on any computer of the network (Windows and macOS included), found automatically and paired with a code.", "Messages: SMS through your phone over Bluetooth, with conversations and templates.", "SMS campaigns: one message to many leads, numbers or an imported file, sent one at a time with progress and delivery status.", "Numbers: import phone numbers from CSV, Excel or text into categories.", "Dialer: two-column layout; the Auto Dialer calls the next number 60 seconds after a call ends."] },
  { v: "1.9.0", date: "2026-10-31", notes: ["Dialer: make and receive calls on your phone’s SIM from your computer over Bluetooth Hands-Free, with the call’s sound on the computer (nothing to install on the phone; Linux).", "Auto Dialer: calls your not-yet-called leads one by one, stops when someone answers, with calling hours and Do not call.", "Leads: Call Seen / Call Unseen status, kept separate from WhatsApp Seen / Unseen.", "LinkedIn People search with contact discovery and the ContactOut extension."] },
  { v: "1.8.1", date: "2026-10-29", notes: ["New prices: Monthly PKR 4,500, 6 Months PKR 15,000, Lifetime PKR 50,000."] },
  { v: "1.8.0", date: "2026-10-29", notes: ["Podcasts workspace: Apple Podcasts, YouTube, Spotify and Amazon Music, with automatic email discovery.", "Podcast lead library: filters, cards and table, selection, CSV export and bulk delete.", "LinkedIn: every page of job results, and contacts via LinkedIn, Google Maps and the company website.", "Three independent source switches (Google Maps, Facebook, LinkedIn) and a LinkedIn search bar.", "“Not on WhatsApp” filter.", "Facebook post reading and number extraction fixes."] },
  { v: "1.7.0", date: "2026-10-27", notes: ["Plans with 6-digit activation codes sent to us; you receive the code after payment."] },
  { v: "1.6.1", date: "2026-10-27", notes: ["Maintenance release."] },
  { v: "1.6.0", date: "2026-10-27", notes: ["Activation codes.", "Facebook search keeps scrolling until the results end."] },
  { v: "1.5.2", date: "2026-10-27", notes: ["Facebook search waits for new posts and keeps scrolling until the results end."] },
  { v: "1.5.1", date: "2026-10-27", notes: ["New leads always reach the table during a search."] },
  { v: "1.5.0", date: "2026-10-26", notes: ["Google Maps and Facebook searches run side by side."] },
  { v: "1.4.0", date: "2026-10-26", notes: ["Facebook Lead Search: phone numbers from Facebook posts."] },
  { v: "1.3.0", date: "2026-10-26", notes: ["Category campaigns with ON/OFF switches.", "Seen / Unseen leads and lead search.", "Multiple outreach campaigns, contact filters and contact history."] },
  { v: "1.2.1", date: "2026-10-21", notes: ["Outreach timing per contact."] },
  { v: "1.2.0", date: "2026-10-21", notes: ["WhatsApp linking and outreach messages."] },
  { v: "1.1.1", date: "2026-10-21", notes: ["Maintenance release."] },
  { v: "1.1.0", date: "2026-10-21", notes: ["Automatic updates from GitHub Releases."] },
  { v: "1.0.0", date: "2026-10-21", notes: ["First release: Google Maps lead search in your own Chrome."] },
];

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function ChangelogPage() {
  return (
    <>
      <PageHero eyebrow="Release notes" title="What’s new in Lead Finder">
        Every release is published on <a className="text-accent underline" href={product.releasesUrl} target="_blank" rel="noopener noreferrer">GitHub Releases</a>, and installed copies update to it automatically.
      </PageHero>
      <ol className="container-x mt-16 grid max-w-3xl gap-0">
        {releases.map((r, i) => (
          <li key={r.v} className="relative grid grid-cols-[110px_1fr] gap-6 pb-12 md:grid-cols-[150px_1fr]">
            <div className="pt-0.5 text-right">
              <p className="font-mono text-sm text-text">v{r.v}</p>
              <p className="mt-1 text-[13px] text-muted">{fmt(r.date)}</p>
            </div>
            <div className="relative border-l border-line pl-6">
              <span aria-hidden="true" className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${i === 0 ? "bg-accent live-dot" : "bg-line-strong"}`} />
              {i === 0 && <span className="mb-2 inline-block rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">Latest</span>}
              <ul className="grid gap-1.5 text-[15.5px] leading-relaxed text-text-2">
                {r.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
