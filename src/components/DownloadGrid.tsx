"use client";

import { Apple, Download, Monitor, Terminal } from "lucide-react";
import { useOS } from "./DownloadButton";
import { downloads, formatSize, osNames } from "@/content/product";

const icons = { windows: Monitor, macos: Apple, linux: Terminal } as const;
const order = ["windows", "macos", "linux"] as const;

export function DownloadGrid() {
  const os = useOS();

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {order.map((key) => {
        const Icon = icons[key];
        const files = downloads.filter((d) => d.os === key);
        const mine = os === key;
        return (
          <section
            key={key}
            id={key}
            aria-labelledby={`${key}-h`}
            className={`card relative scroll-mt-24 flex flex-col p-7 ${mine ? "!border-accent/45 shadow-[0_0_0_1px_rgb(61_220_151/0.25),0_30px_80px_-40px_rgb(61_220_151/0.5)]" : ""}`}
          >
            {mine && <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-ink">Your system</span>}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-white/[0.03] text-text">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h2 id={`${key}-h`} className="text-2xl font-semibold text-text">{osNames[key]}</h2>
            </div>
            <ul className="mt-6 grid gap-3">
              {files.map((f) => (
                <li key={f.file}>
                  <a
                    href={f.url}
                    className={`group flex items-center gap-3 rounded-xl border p-4 transition-colors ${f.recommended ? "border-accent/30 bg-accent-soft hover:border-accent/60" : "border-line hover:border-line-strong hover:bg-white/[0.03]"}`}
                  >
                    <Download size={18} className={f.recommended ? "text-accent" : "text-text-2"} aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-text">{f.label}</span>
                      <span className="block text-[13px] text-muted">{f.kind} · {f.arch} · {formatSize(f.size)}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <details className="mt-5 text-[13px] text-muted">
              <summary className="cursor-pointer text-text-2 hover:text-text">File names and SHA-512 checksums</summary>
              <ul className="mt-3 grid gap-3">
                {files.map((f) => (
                  <li key={f.file}>
                    <code className="block font-mono text-text-2">{f.file}</code>
                    <code className="mt-1 block break-all font-mono text-[11.5px] leading-relaxed">{f.sha512}</code>
                  </li>
                ))}
              </ul>
            </details>
          </section>
        );
      })}
    </div>
  );
}
