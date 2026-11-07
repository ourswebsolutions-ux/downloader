import { Check } from "lucide-react";
import { planIncludes, plans, whatsappLink } from "@/content/product";
import { TiltCard } from "./motion";

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {plans.map((p) => (
        <li key={p.id}>
          <TiltCard max={4} className={`card flex flex-col p-7 ${p.highlight ? "!border-accent/40 bg-[linear-gradient(180deg,rgb(61_220_151/0.10),rgb(61_220_151/0.02))]" : ""}`}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-text">{p.name}</h3>
              {p.highlight && <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-ink">Best value</span>}
            </div>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-[40px] font-semibold leading-none tracking-tight text-text">{p.priceLabel}</span>
            </p>
            <p className="mt-2 text-sm text-text-2">
              <span className="font-semibold text-text">{p.duration}</span> · {p.durationDetail}
            </p>
            <p className="mt-2 text-sm font-medium text-text">{p.dailyLeads}</p>
            {p.note && <p className="mt-3 text-sm text-accent">{p.note}</p>}
            {!compact && (
              <ul className="mt-6 grid gap-2.5 border-t border-line pt-6 text-[14.5px] text-text-2">
                {planIncludes.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-7">
              <a
                href={whatsappLink(`Hello, I would like to buy the Lead Finder ${p.name} plan (${p.priceLabel}). My Activation ID is: `)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn w-full ${p.highlight ? "btn-primary" : "btn-ghost"}`}
              >
                Buy {p.name} on WhatsApp
              </a>
            </div>
          </TiltCard>
        </li>
      ))}
    </ul>
  );
}
