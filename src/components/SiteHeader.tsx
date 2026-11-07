"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => setOpenOn((typeof v === "function" ? v(open) : v) ? pathname : null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center gap-3 md:gap-6">
        <Link href="/" aria-label="Lead Finder home" className="shrink-0">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[14.5px] transition-colors ${
                    isActive(item.href) ? "bg-white/[0.06] text-text" : "text-text-2 hover:text-text"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link href="/installation/" className="hidden md:inline-flex btn btn-ghost !h-10 !min-h-10 text-sm">
            Install guide
          </Link>
          <Link href="/download/" aria-label="Download" className="btn btn-primary !h-10 !min-h-10 text-sm max-[379px]:!px-3">
            <Download size={16} aria-hidden="true" />
            <span className="max-[379px]:sr-only">Download</span>
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-text"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="lg:hidden border-t border-line">
          <ul className="container-x grid gap-1 py-4">
            {[...nav, { href: "/download/", label: "Download" }, { href: "/installation/", label: "Installation guide" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base ${isActive(item.href) ? "bg-white/[0.06] text-text" : "text-text-2"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
