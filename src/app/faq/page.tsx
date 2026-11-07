import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { CtaBand, PageHero } from "@/components/ui";
import { contact, product } from "@/content/product";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Lead Finder: what it does, requirements, pricing, activation, privacy, WhatsApp, and platform terms.",
  alternates: { canonical: "/faq/" },
};

type QA = { q: string; a: React.ReactNode };

const groups: { title: string; items: QA[] }[] = [
  {
    title: "The product",
    items: [
      { q: "What does Lead Finder do?", a: <>It finds business leads on Google Maps, Facebook posts and LinkedIn, and podcasts with their public contact emails. It saves them on your computer, lets you filter and export them, checks numbers on WhatsApp, and can run careful WhatsApp introduction campaigns.</> },
      { q: "Is it a website or a desktop app?", a: <>A desktop app for Windows, macOS and Linux. It works through the Google Chrome already installed on your computer.</> },
      { q: "Does it work on iPhone, iPad or Android?", a: <>No. Lead Finder controls desktop Chrome, which mobile systems don’t allow. There is no mobile version.</> },
      { q: "Why does it need Google Chrome?", a: <>Lead Finder searches through your own Chrome — the same profile and logins you use every day — so you can watch every step. Chrome {product.chromeMinVersion} or newer is required.</> },
      { q: "Will it find emails for Google Maps businesses?", a: <>Yes, if you turn on <strong>Find Emails from Websites</strong> beside the Google Maps switch: Lead Finder then reads each business’s website (home page, Contact, About and similar pages). It’s off by default. Emails are also looked up for LinkedIn companies (LinkedIn page, Google Maps, website) and for podcasts (RSS feed, website, link-in-bio pages). Nothing is guessed: if an email isn’t published, the lead says so.</> },
      { q: "How many leads will I get?", a: <>It depends on the keyword, place and source. Searches run until the results end or you stop them; searches run at a deliberately slow pace (a few seconds per listing, 10–30 seconds per LinkedIn company). As an example, our screenshots show 12 leads from 15 Google Maps listings and 50 podcasts with 43 emails.</> },
    ],
  },
  {
    title: "Pricing & activation",
    items: [
      { q: "How much does it cost?", a: <>Monthly PKR 4,500, 6 Months PKR 15,000, Lifetime PKR 50,000. The download is free and includes a 5-day Free Trial of 30 leads. See <Link href="/pricing/">Pricing</Link>.</> },
      { q: "Is there a free trial?", a: <>Yes. A Free Trial starts by itself the first time you open the app on a computer: 5 days and 30 leads in total, with no payment or code. It ends after 5 days or at 30 leads, whichever comes first.</> },
      { q: "Do the plans have different features?", a: <>No — every plan unlocks every feature. They differ only in length.</> },
      { q: "How do I pay?", a: <>Click Activate in the app, choose a plan, then contact us on WhatsApp or by phone ({contact.phoneDisplay}). After payment we send your 6-digit code. Please confirm payment methods with us on WhatsApp.</> },
      { q: "Can I use one plan on two computers?", a: <>Each computer has its own Activation ID and a code only works on the computer it was requested for. Ask us about moving or adding computers.</> },
      { q: "What happens when my plan ends?", a: <>Searching, exporting and WhatsApp features stop until you renew. Your leads stay, and you can still view, filter and delete them.</> },
      { q: "My activation code doesn’t work.", a: <>Codes expire after 10 minutes and allow 5 tries; a new request cancels the old code. Click <strong>Send a new code</strong> and message us.</> },
    ],
  },
  {
    title: "Privacy & safety",
    items: [
      { q: "Where are my leads stored?", a: <>In a database in the app’s data folder on your computer. Leads are never uploaded to us.</> },
      { q: "Does Lead Finder read my passwords or cookies?", a: <>No. It uses Chrome as you are logged in, but doesn’t read cookies or passwords, and never logs in for you.</> },
      { q: "Does it solve CAPTCHAs or get around blocks?", a: <>No. CAPTCHAs, login pages, security checks and limits pause or stop the search and are reported to you.</> },
      { q: "Is using it allowed by Google, Facebook, LinkedIn and WhatsApp?", a: <>Not necessarily. Their terms restrict automated collection and unofficial clients, and accounts can be restricted. Lead Finder works slowly, through your own account, and never bypasses protections — but you are responsible for how you use it. Read <Link href="/terms-of-use/">Responsible use</Link>.</> },
      { q: "Can my WhatsApp account be banned?", a: <>Yes, it can. WhatsApp linking uses an unofficial library and WhatsApp may restrict accounts that send automated or unexpected messages. Use a number you can afford to lose, keep volumes low, and try campaigns in Test run first.</> },
    ],
  },
  {
    title: "Installation & updates",
    items: [
      { q: "Windows says “Windows protected your PC”.", a: <>The installer isn’t code-signed yet. Click <strong>More info → Run anyway</strong>.</> },
      { q: "macOS won’t open the app.", a: <>Right-click the app → Open, or System Settings → Privacy &amp; Security → Open Anyway. See the <Link href="/installation/#macos">installation guide</Link>.</> },
      { q: "How do updates work?", a: <>Installed copies check GitHub Releases automatically and update themselves (on macOS you click Download). Updates never interrupt a search and never touch your data.</> },
      { q: "I forgot my PIN.", a: <>Click <strong>Forgot PIN?</strong> on the lock screen. A new four-digit PIN is emailed to us, never shown in the app. <Link href="/support/">Contact us</Link> to get it, then enter it on the keypad: it unlocks Lead Finder and becomes your PIN. It is valid for 24 hours, and your old PIN keeps working until then.</> },
    ],
  },
];

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <div className="container-x mt-16 grid max-w-4xl gap-14">
        {groups.map((g) => (
          <section key={g.title} aria-labelledby={slug(g.title)}>
            <h2 id={slug(g.title)} className="text-gradient text-2xl font-semibold">{g.title}</h2>
            <div className="mt-5 grid gap-3">
              {g.items.map((i) => (
                <details key={i.q} className="faq card group px-6 py-5 open:border-line-strong">
                  <summary className="flex items-start justify-between gap-4 text-[16.5px] font-semibold text-text">
                    {i.q}
                    <Plus size={20} className="faq-icon mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  </summary>
                  <div className="prose-lf mt-3 !text-[15.5px]">{i.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
      <CtaBand title="Still have a question?">Message us on WhatsApp at {contact.phoneDisplay}.</CtaBand>
    </>
  );
}
