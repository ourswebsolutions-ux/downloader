import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Callout, PageHero } from "@/components/ui";
import { contact, whatsappLink } from "@/content/product";

export const metadata: Metadata = {
  title: "Contact & support",
  description: "Contact the Lead Finder team on WhatsApp or by phone for purchases, activation codes and support.",
  alternates: { canonical: "/support/" },
};

const channels = [
  { icon: MessageCircle, title: "WhatsApp", value: contact.phoneDisplay, href: whatsappLink("Hello, I have a question about Lead Finder."), note: "Purchases, activation codes and support. The fastest way to reach us.", external: true },
  { icon: Phone, title: "Phone", value: contact.phoneDisplay, href: contact.phoneHref, note: "Call us about payment or activation.", external: false },
  { icon: Mail, title: "Email", value: contact.email, href: `mailto:${contact.email}`, note: "The publisher address listed in the app.", external: false },
];

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Contact & support" title="We’re here to help.">
        For buying a plan, receiving your activation code, or help with the app, contact us directly.
      </PageHero>
      <div className="container-x mt-16">
        <ul className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <li key={c.title}>
              <a href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="card group block h-full p-7 transition-colors hover:border-accent/40">
                <c.icon size={22} className="text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold text-text">{c.title}</h2>
                <p className="mt-1 break-all font-mono text-[15px] text-text">{c.value}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-text-2">{c.note}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <section className="card p-7" aria-labelledby="include-h">
            <h2 id="include-h" className="text-xl font-semibold text-text">When you contact us, include</h2>
            <ul className="prose-lf mt-2">
              <li>Your <strong>Activation ID</strong> (shown in the Activate panel, for example <code>LF-XXXX-XXXX-XXXX</code>) and the plan you want — the app’s <strong>Copy ID &amp; plan</strong> button copies both.</li>
              <li>Your operating system and the Lead Finder version.</li>
              <li>For a problem: what you clicked, and the exact message in the status bar or agent card. A screenshot helps.</li>
            </ul>
          </section>
          <section className="card p-7" aria-labelledby="self-h">
            <h2 id="self-h" className="text-xl font-semibold text-text">Find the answer yourself</h2>
            <ul className="prose-lf mt-2">
              <li><Link href="/installation/#troubleshooting">Installation troubleshooting</Link></li>
              <li><Link href="/guide/#troubleshooting">Using the app: troubleshooting</Link></li>
              <li><Link href="/faq/">Frequently asked questions</Link></li>
              <li><Link href="/docs/">Documentation</Link></li>
            </ul>
          </section>
        </div>

        <Callout tone="confirm" title="Business hours and response times">
          Support hours and expected response times are not published yet. Please ask us on WhatsApp.
        </Callout>
      </div>
    </>
  );
}
