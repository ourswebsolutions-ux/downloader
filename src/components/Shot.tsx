"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import sizes from "@/content/screenshot-sizes.json";
import { shots, type ShotName } from "@/content/screenshots";

type Size = { width: number; height: number; widths: number[] };
const table = sizes as Record<string, Size>;

export const shotSrc = (name: ShotName, w?: number) => {
  const s = table[name];
  const width = w && s.widths.includes(w) ? w : s.widths.at(-1);
  return `/screenshots/${name}-${width}.webp`;
};

type Props = {
  name: ShotName;
  /** CSS sizes attribute for responsive loading. */
  sizes?: string;
  priority?: boolean;
  caption?: boolean;
  frame?: boolean;
  zoom?: boolean;
  className?: string;
};

// A genuine screenshot of the desktop app, in a window frame, with a
// caption and click-to-zoom.
export function Shot({ name, sizes: sizesAttr = "(min-width: 1200px) 1100px, 100vw", priority, caption = true, frame = true, zoom = true, className = "" }: Props) {
  const s = table[name];
  const meta = shots[name];
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const img = (
    <img
      src={shotSrc(name, s.widths.find((w) => w >= 1600) ?? s.widths.at(-1))}
      srcSet={s.widths.map((w) => `/screenshots/${name}-${w}.webp ${w}w`).join(", ")}
      sizes={sizesAttr}
      width={s.width}
      height={s.height}
      alt={meta.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className="block h-auto w-full"
    />
  );

  return (
    <figure className={className}>
      <div className={frame ? "group relative overflow-hidden rounded-[14px] border border-line-strong bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]" : "group relative"}>
        {frame && (
          <div className="flex h-8 items-center gap-1.5 border-b border-line bg-white/[0.03] px-3" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 truncate font-mono text-[11px] text-muted">Lead Finder</span>
          </div>
        )}
        {zoom ? (
          <button type="button" onClick={() => setOpen(true)} className="relative block w-full cursor-zoom-in text-left" aria-label={`Enlarge screenshot: ${meta.alt}`}>
            {img}
            <span className="pointer-events-none absolute right-3 bottom-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100" aria-hidden="true">
              <Maximize2 size={15} />
            </span>
          </button>
        ) : (
          img
        )}
      </div>
      {caption && meta.caption && <figcaption className="mt-3 text-sm leading-relaxed text-muted">{meta.caption}</figcaption>}
      {zoom && (
        <dialog
          ref={dialog}
          onClose={() => setOpen(false)}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          className="m-auto max-h-[94vh] w-[min(96vw,1600px)] max-w-none overflow-auto rounded-2xl border border-line-strong bg-ink p-0 text-text backdrop:bg-black/80 backdrop:backdrop-blur-sm"
          aria-label={meta.alt}
        >
          {open && (
            <div className="relative">
              <button type="button" onClick={() => setOpen(false)} className="sticky top-3 z-10 float-right mr-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white" aria-label="Close">
                <X size={18} />
              </button>
              <img src={shotSrc(name)} width={s.width} height={s.height} alt={meta.alt} className="block h-auto w-full" />
              {meta.caption && <p className="border-t border-line p-4 text-sm text-text-2">{meta.caption}</p>}
            </div>
          )}
        </dialog>
      )}
    </figure>
  );
}
