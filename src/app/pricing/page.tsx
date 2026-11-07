import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { PricingCards } from "@/components/PricingCards";
import { Shot } from "@/components/Shot";
import { Reveal } from "@/components/motion";
import { Callout, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { activationRules, contact, freeTrial, needsConfirmation, planIncludes, plans, withoutPlan } from "@/content/product";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Lead Finder: a 5-day Free Trial with 30 leads, then Monthly PKR 4,500, 6 Months PKR 15,000, Lifetime PKR 50,000. Every plan includes every feature. How payment and activation work.",
  alternates: { canonical: "/pricing/" },
};

const faq = [
  { q: "Is there a free trial?", a: "Yes. The first time you open the app on a computer, a Free Trial starts by itself: 5 days and 30 leads in total, with no payment or code. It ends after 5 days or at 30 leads, whichever comes first. Your leads stay, and you can buy a plan at any time." },
  { q: "Do the plans have different features?", a: "No. Every plan unlocks every feature; plans differ only in how long they last." },
  { q: "What happens when my plan ends?", a: "Searching, CSV export, WhatsApp and live campaigns stop until you renew. Your saved leads stay on your computer and you can still view, filter and delete them." },
  { q: "Can I renew early?", a: "Yes. A code entered while a plan is still running adds the new plan's length to your current end date, so you don't lose any days." },
  { q: "Is the Lifetime plan really permanent?", a: "The Lifetime plan never expires on the computer it was activated on." },
];

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple plans. Every feature included.">
        Prices are in Pakistani rupees (PKR) and are exactly what the app shows in its Activate panel.
      </PageHero>

      <section className="container-x mt-16">
        <div className="card mb-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 p-6">
          <h2 className="text-xl font-semibold text-text">{freeTrial.name} · {freeTrial.priceLabel}</h2>
          <p className="text-[15px] text-text-2">{freeTrial.summary}</p>
        </div>
        <PricingCards />
        <p className="mt-6 text-center text-sm text-muted">The download is free. After the Free Trial, a plan is needed to search, export and use WhatsApp features.</p>
      </section>

      {/* Comparison */}
      <section className="container-x mt-28" aria-labelledby="compare-h">
        <SectionHeading eyebrow="Compare" title={<span id="compare-h">What a plan unlocks</span>} />
        <div className="table-wrap mt-10">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-line bg-white/[0.03]">
                <th scope="col" className="p-4 font-semibold text-text">Feature</th>
                <th scope="col" className="p-4 font-semibold text-text">No plan</th>
                {plans.map((p) => (
                  <th scope="col" key={p.id} className="p-4 font-semibold text-text">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {withoutPlan.map((f) => (
                <tr key={f} className="border-b border-line">
                  <td className="p-4 text-text-2">{f}</td>
                  <td className="p-4"><Check size={18} className="text-accent" aria-label="Included" /></td>
                  {plans.map((p) => <td key={p.id} className="p-4"><Check size={18} className="text-accent" aria-label="Included" /></td>)}
                </tr>
              ))}
              {planIncludes.map((f) => (
                <tr key={f} className="border-b border-line">
                  <td className="p-4 text-text-2">{f}</td>
                  <td className="p-4"><Minus size={18} className="text-muted" aria-label="Not included" /></td>
                  {plans.map((p) => <td key={p.id} className="p-4"><Check size={18} className="text-accent" aria-label="Included" /></td>)}
                </tr>
              ))}
              <tr className="border-b border-line">
                <td className="p-4 text-text-2">Automatic app updates</td>
                <td className="p-4"><Check size={18} className="text-accent" aria-label="Included" /></td>
                {plans.map((p) => <td key={p.id} className="p-4"><Check size={18} className="text-accent" aria-label="Included" /></td>)}
              </tr>
              <tr>
                <td className="p-4 text-text-2">Length</td>
                <td className="p-4 text-muted">—</td>
                {plans.map((p) => <td key={p.id} className="p-4 font-semibold text-text">{p.duration}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Activation */}
      <section className="container-x mt-28" aria-labelledby="activation-h">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="How to buy" title={<span id="activation-h">Payment and activation</span>}>
              There is no online checkout. You request a code from inside the app, pay us, and we send you the code.
            </SectionHeading>
            <ol className="mt-8 grid gap-5">
              {[
                ["Open Activate", "Install Lead Finder, create your PIN, then click Activate at the top of the window."],
                ["Choose a plan", "Pick Monthly, 6 Months or Lifetime and click Activate. The app sends us your request with your Activation ID, plan and price."],
                ["Pay us", `Contact us on WhatsApp or by phone (${contact.phoneDisplay}). The app has WhatsApp, Call and “Copy ID & plan” buttons for this.`],
                ["Enter your code", "After payment we give you a 6-digit code. Enter it and click Verify & Activate — the plan starts immediately."],
              ].map(([t, d], i) => (
                <Reveal as="li" key={t} delay={i * 0.05} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft font-mono text-sm text-accent">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-text">{t}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-text-2">{d}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <p className="mt-8">
              <Link href="/guide/#activate" className="font-semibold text-accent hover:underline">See every activation step with screenshots →</Link>
            </p>
          </div>
          <div className="grid gap-6">
            <Shot name="activate-plans" sizes="(min-width: 1024px) 600px, 100vw" />
            <Shot name="activate-code-entry" sizes="(min-width: 1024px) 600px, 100vw" />
          </div>
        </div>
      </section>

      {/* Rules + limitations */}
      <section className="container-x mt-28 grid gap-6 lg:grid-cols-2">
        <div className="card p-7">
          <h2 className="text-xl font-semibold text-text">Activation rules</h2>
          <ul className="mt-5 grid gap-3 text-[15px] text-text-2">
            {activationRules.map((r) => (
              <li key={r} className="flex gap-3"><Check size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />{r}</li>
            ))}
          </ul>
        </div>
        <div className="card p-7">
          <h2 className="text-xl font-semibold text-text">Good to know</h2>
          <ul className="mt-5 grid gap-3 text-[15px] text-text-2">
            <li className="flex gap-3"><Minus size={17} className="mt-0.5 shrink-0 text-muted" aria-hidden="true" />A plan covers one computer. Each computer has its own Activation ID.</li>
            <li className="flex gap-3"><Minus size={17} className="mt-0.5 shrink-0 text-muted" aria-hidden="true" />Prices are listed in PKR only.</li>
            <li className="flex gap-3"><Minus size={17} className="mt-0.5 shrink-0 text-muted" aria-hidden="true" />If the app says your activation request could not be sent (for example, you are offline), try again or contact us on WhatsApp.</li>
            <li className="flex gap-3"><Minus size={17} className="mt-0.5 shrink-0 text-muted" aria-hidden="true" />The YouTube podcast search needs your own free YouTube API key.</li>
          </ul>
        </div>
      </section>

      <section className="container-x mt-10">
        <Callout tone="confirm" title="Please confirm with us before paying">
          <p>These details are not stated in the app, so ask us on WhatsApp:</p>
          <ul className="mt-2 list-disc pl-5">
            {needsConfirmation.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </Callout>
      </section>

      <section className="container-x mt-20" aria-labelledby="pfaq-h">
        <h2 id="pfaq-h" className="text-gradient text-3xl font-semibold">Pricing questions</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faq.map((f) => (
            <div key={f.q} className="card p-6">
              <h3 className="font-semibold text-text">{f.q}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Ready to activate?">Download the app, click Activate, and message us your Activation ID.</CtaBand>
    </>
  );
}
