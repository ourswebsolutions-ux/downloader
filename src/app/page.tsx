import Link from "next/link";
import { Building2, Briefcase, MessagesSquare, Lock, MapPin, Mic, MonitorDown, PauseCircle, RefreshCw, ShieldCheck, HardDrive, Send } from "lucide-react";
import { HeroStage } from "@/components/HeroStage";
import { DownloadButton } from "@/components/DownloadButton";
import { Shot } from "@/components/Shot";
import { Reveal, TiltCard } from "@/components/motion";
import { ArrowLink, CtaBand, SectionHeading } from "@/components/ui";
import { PricingCards } from "@/components/PricingCards";
import { product } from "@/content/product";
import { siteUrl } from "@/lib/site";
import { shots } from "@/content/screenshots";
import { plans } from "@/content/product";

const sources = [
  {
    icon: MapPin,
    title: "Google Maps",
    text: "Search any keyword and place. Keep businesses without a website, with one, or both — with phone, address and website.",
    href: "/features/#google-maps",
  },
  {
    icon: MessagesSquare,
    title: "Facebook posts",
    text: "Read posts for your keyword with your own Facebook login and save the phone numbers people publish.",
    href: "/features/#facebook",
  },
  {
    icon: Briefcase,
    title: "LinkedIn companies",
    text: "Find companies hiring for — or asking about — what you sell, then look up their public phone and email.",
    href: "/features/#linkedin",
  },
  {
    icon: Mic,
    title: "Podcasts",
    text: "Search Apple Podcasts, YouTube, Listen Notes, Spotify, Deezer, Player FM and Pandora, and discover each show's public contact email.",
    href: "/features/#podcasts",
  },
];

const tour = [
  {
    eyebrow: "Google Maps",
    title: "Leads appear while Chrome searches.",
    body: "Lead Finder types your keyword into Google Maps in your own Chrome, opens each listing and reads its public name, phone, address and website. Qualified leads land in the table the moment they are saved.",
    points: ["Website filter: without, with, or all businesses", "Phone numbers checked against each country's numbering plan", "Pauses on CAPTCHAs — never solves them"],
    shot: "maps-running-late" as const,
    href: "/features/#google-maps",
  },
  {
    eyebrow: "Podcasts",
    title: "Contact emails, found automatically.",
    body: "Every podcast is saved the moment it is found. Lead Finder then reads its RSS feed, episode notes, website contact pages and public link-in-bio pages for a published email. Nothing is guessed.",
    points: ["Apple Podcasts, YouTube and Listen Notes search; Spotify, Deezer, Player FM and Pandora in Chrome", "Email found / No email / Pending filters with counts", "Select, export to CSV or delete in bulk"],
    shot: "podcasts-done" as const,
    href: "/features/#podcasts",
  },
  {
    eyebrow: "Outreach",
    title: "WhatsApp checks and careful campaigns.",
    body: "Link your own WhatsApp by QR code. Lead Finder checks which lead numbers use WhatsApp and can run slow, category-based introduction campaigns — one contact at a time, with daily limits and sending hours.",
    points: ["Three messages per contact, about a minute apart", "45–60 minutes between contacts, 10–15 contacts a day", "Replies and opt-outs stop the sequence"],
    shot: "outreach-settings" as const,
    href: "/features/#whatsapp",
  },
];

const careful = [
  { icon: HardDrive, title: "Your data stays local", text: "Leads are saved in a database on your computer. Nothing is uploaded to us." },
  { icon: Lock, title: "PIN-locked", text: "A four-digit PIN, stored as a salted hash, protects the app every time it opens." },
  { icon: PauseCircle, title: "No workarounds", text: "CAPTCHAs, logins and blocks are never bypassed. The search pauses and tells you why." },
  { icon: ShieldCheck, title: "Slow by design", text: "A few seconds between listings and longer breaks keep searches at a human pace." },
  { icon: RefreshCw, title: "Updates itself", text: "Installed copies check for new releases and update automatically — never mid-search." },
  { icon: MonitorDown, title: "Windows, macOS, Linux", text: "Native installers for Windows, Intel and Apple Silicon Macs, Debian/Ubuntu and AppImage." },
];

const audiences = [
  { icon: Building2, title: "Web design agencies", text: "Find local businesses that have no website of their own yet." },
  { icon: Briefcase, title: "Software & outsourcing teams", text: "Find companies on LinkedIn hiring for the skills you offer." },
  { icon: Mic, title: "PR & guest booking", text: "Build lists of podcasts in a niche with their public contact emails." },
  { icon: Send, title: "Local sales teams", text: "Collect phone numbers by category and city, then reach out on WhatsApp." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: product.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows, macOS, Linux",
  softwareVersion: product.version,
  datePublished: product.releaseDate,
  publisher: { "@type": "Organization", name: product.publisher },
  url: siteUrl,
  offers: plans.map((p) => ({ "@type": "Offer", name: p.name, price: p.price, priceCurrency: "PKR" })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section className="relative overflow-hidden pb-24">
        <div aria-hidden="true" className="grid-bg absolute inset-0" />
        <div aria-hidden="true" className="absolute left-1/2 top-[-280px] h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(61_220_151/0.22),transparent)]" />
        <div className="container-x relative pt-16 text-center md:pt-24">
          <Reveal>
            <Link href="/changelog/" className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] text-text-2 hover:text-text">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
              Version {product.version} · See what’s new
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto mt-7 max-w-4xl text-[clamp(40px,7.4vw,84px)] font-semibold leading-[0.98] tracking-[-0.035em]">
              <span className="text-gradient">Your next clients,</span>
              <br />
              <span className="accent-gradient">found while you watch.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-[clamp(17px,2vw,20px)] leading-relaxed text-text-2">
              Lead Finder is a desktop app that searches <strong className="font-semibold text-text">Google Maps, Facebook, LinkedIn and podcasts</strong> in your own Chrome, saves every lead on your computer, finds published phone numbers and emails, and checks numbers on WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <DownloadButton />
              <Link href="/guide/" className="btn btn-ghost btn-lg">
                See how it works
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">Windows · macOS · Linux — free download with a 5-day Free Trial of 30 leads; plans from PKR 4,500.</p>
          </Reveal>
          <HeroStage />
        </div>
      </section>

      {/* Sources */}
      <section className="container-x" aria-labelledby="sources-h">
        <SectionHeading eyebrow="Lead sources" title={<span id="sources-h">Four ways to find leads. One place to keep them.</span>} center>
          Switch sources on independently; they run side by side and save to the same local database, one lead per business.
        </SectionHeading>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sources.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06}>
              <TiltCard className="card flex h-full flex-col p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent-soft text-accent" style={{ transform: "translateZ(30px)" }}>
                  <s.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-text">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-text-2">{s.text}</p>
                <div className="mt-5 text-sm">
                  <ArrowLink href={s.href}>Learn more</ArrowLink>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Product tour */}
      <section className="container-x mt-32 grid gap-28" aria-label="Product tour">
        {tour.map((t, i) => (
          <div key={t.title} className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <p className="eyebrow">{t.eyebrow}</p>
              <h2 className="text-gradient mt-3 text-[clamp(28px,3.6vw,42px)] font-semibold leading-[1.08]">{t.title}</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-text-2">{t.body}</p>
              <ul className="mt-6 grid gap-2.5">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] text-text-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ArrowLink href={t.href}>Explore {t.eyebrow}</ArrowLink>
              </div>
            </Reveal>
            <Reveal delay={0.1} className={i % 2 ? "lg:order-1" : ""}>
              <div style={{ perspective: 1600 }}>
                <div className={`transition-transform duration-700 ease-out hover:[transform:rotateY(0deg)_rotateX(0deg)] ${i % 2 ? "[transform:rotateY(8deg)_rotateX(4deg)]" : "[transform:rotateY(-8deg)_rotateX(4deg)]"}`}>
                  <Shot name={t.shot} caption={false} sizes="(min-width: 1024px) 640px, 100vw" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{shots[t.shot].caption}</p>
            </Reveal>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="container-x mt-36" aria-labelledby="how-h">
        <SectionHeading eyebrow="Getting started" title={<span id="how-h">From download to first leads in minutes.</span>} center />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { n: "01", t: "Install & activate", d: "Download the installer for your system, create your PIN, choose a plan and enter the code we send you after payment.", href: "/installation/" },
            { n: "02", t: "Search in your Chrome", d: "Allow Lead Finder to use your Chrome once, choose sources, type a keyword and a category, and press Start Search.", href: "/guide/#search" },
            { n: "03", t: "Work your leads", d: "Filter, search and export to CSV, check numbers on WhatsApp, or run a careful outreach campaign.", href: "/guide/#leads" },
          ].map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08}>
              <Link href={s.href} className="card group block h-full p-7 transition-colors hover:border-line-strong">
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <h3 className="mt-4 text-xl font-semibold text-text">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-2">{s.d}</p>
              </Link>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Who it's for */}
      <section className="container-x mt-36" aria-labelledby="for-h">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Who it's for" title={<span id="for-h">Built for people who sell to businesses.</span>}>
            If you need a steady list of businesses to contact — and their published phone numbers or emails — Lead Finder does the searching for you.
          </SectionHeading>
          <ul className="grid gap-4 sm:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 0.05} className="card p-6">
                <a.icon size={20} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-text">{a.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-text-2">{a.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Careful by design */}
      <section className="container-x mt-36" aria-labelledby="careful-h">
        <SectionHeading eyebrow="Careful by design" title={<span id="careful-h">Runs on your computer, at a human pace.</span>} center />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {careful.map((c) => (
            <li key={c.title} className="bg-ink p-7">
              <c.icon size={20} className="text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-text">{c.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-text-2">{c.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="container-x mt-36" aria-labelledby="pricing-h">
        <SectionHeading eyebrow="Pricing" title={<span id="pricing-h">Every feature in every plan.</span>} center>
          Plans differ only in length. Pay once by WhatsApp or phone and receive your activation code.
        </SectionHeading>
        <div className="mt-14">
          <PricingCards compact />
        </div>
        <p className="mt-8 text-center">
          <ArrowLink href="/pricing/">Compare plans and see how activation works</ArrowLink>
        </p>
      </section>

      <CtaBand title="Start finding leads today.">
        Download Lead Finder for Windows, macOS or Linux, and follow the step-by-step guide with real screenshots.
      </CtaBand>
    </>
  );
}
