import Link from "next/link";
import { Logo } from "./Logo";
import { footerNav } from "@/lib/site";
import { contact, product } from "@/content/product";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-line bg-ink-2">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Desktop lead generation for Windows, macOS and Linux. Your leads stay in a database on your own computer.
          </p>
          <p className="mt-6 text-sm text-text-2">
            Support on WhatsApp:{" "}
            <a className="text-accent hover:underline" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              {contact.phoneDisplay}
            </a>
          </p>
        </div>
        {footerNav.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{col.title}</h2>
            <ul className="mt-4 grid gap-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] text-text-2 transition-colors hover:text-text">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date(product.releaseDate).getFullYear()} {product.publisher}. {product.name} {product.version}.
          </p>
          <p>Google Maps, Facebook, LinkedIn, WhatsApp, Apple Podcasts, Spotify, YouTube, Listen Notes, Deezer, Player FM, Pandora and Amazon Music are trademarks of their owners. Lead Finder is not affiliated with them.</p>
        </div>
      </div>
    </footer>
  );
}
