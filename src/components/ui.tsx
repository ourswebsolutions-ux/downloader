import Link from "next/link";
import { AlertTriangle, CircleHelp, Info, ArrowRight } from "lucide-react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div aria-hidden="true" className="absolute left-1/2 top-[-40%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="container-x relative py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-gradient mt-4 max-w-3xl text-[clamp(36px,6vw,64px)] font-semibold leading-[1.04]">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-text-2">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children, center }: { eyebrow?: string; title: React.ReactNode; children?: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-gradient mt-3 text-[clamp(30px,4.4vw,48px)] font-semibold leading-[1.06]">{title}</h2>
      {children && <div className="mt-4 text-[17px] leading-relaxed text-text-2">{children}</div>}
    </div>
  );
}

const tones = {
  note: { icon: Info, cls: "border-accent/25 bg-accent-soft", iconCls: "text-accent", label: "Note" },
  warn: { icon: AlertTriangle, cls: "border-warn/30 bg-warn-soft", iconCls: "text-warn", label: "Important" },
  confirm: { icon: CircleHelp, cls: "border-warn/30 bg-warn-soft", iconCls: "text-warn", label: "Needs confirmation" },
} as const;

export function Callout({ tone = "note", title, children }: { tone?: keyof typeof tones; title?: string; children: React.ReactNode }) {
  const t = tones[tone];
  const Icon = t.icon;
  return (
    <aside className={`my-6 flex gap-3 rounded-2xl border p-4 md:p-5 ${t.cls}`} role="note">
      <Icon size={20} className={`mt-0.5 shrink-0 ${t.iconCls}`} aria-hidden="true" />
      <div className="text-[15px] leading-relaxed text-text-2 [&_strong]:text-text">
        <p className="font-semibold text-text">{title ?? t.label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </aside>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-1.5 font-semibold text-accent">
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

export function Badge({ children, tone = "accent" }: { children: React.ReactNode; tone?: "accent" | "muted" | "warn" }) {
  const cls = tone === "accent" ? "border-accent/30 bg-accent-soft text-accent" : tone === "warn" ? "border-warn/30 bg-warn-soft text-warn" : "border-line-strong bg-white/[0.03] text-text-2";
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em] ${cls}`}>{children}</span>;
}

// A table inside long-form text, scrollable on small screens.
export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="table-wrap">
      <table>{children}</table>
    </div>
  );
}

// Table of contents for long pages.
export function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-24">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">On this page</p>
      <ol className="mt-4 grid gap-1 border-l border-line">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-text-2 transition-colors hover:border-accent hover:text-text">
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CtaBand({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="container-x mt-24">
      <div className="relative overflow-hidden rounded-[28px] border border-line-strong bg-panel px-6 py-14 text-center md:px-16 md:py-20">
        <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="absolute left-1/2 top-full h-[360px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[100px]" />
        <div className="relative">
          <h2 className="text-gradient mx-auto max-w-2xl text-[clamp(28px,4vw,44px)] font-semibold leading-tight">{title}</h2>
          {children && <div className="mx-auto mt-4 max-w-xl text-text-2">{children}</div>}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/download/" className="btn btn-primary btn-lg">
              Download Lead Finder
            </Link>
            <Link href="/pricing/" className="btn btn-ghost btn-lg">
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
