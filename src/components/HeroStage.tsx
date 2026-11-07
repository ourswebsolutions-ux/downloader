"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { shotSrc } from "./Shot";
import sizes from "@/content/screenshot-sizes.json";
import { shots } from "@/content/screenshots";

const main = sizes["leads-dark" as keyof typeof sizes];
const back = sizes["podcasts-dark" as keyof typeof sizes];

// The hero's 3D stage: real app screenshots layered in depth. The stack
// starts tilted back and settles flat as you scroll; on desktop it leans
// gently toward the pointer.
export function HeroStage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const tilt = useTransform(scrollYProgress, [0.15, 0.55], [24, 0]);
  const scale = useTransform(scrollYProgress, [0.15, 0.55], [0.9, 1]);
  const lift = useTransform(scrollYProgress, [0.15, 0.55], [40, 0]);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const ry = useSpring(px, { stiffness: 120, damping: 20 });
  const rxPointer = useSpring(py, { stiffness: 120, damping: 20 });
  const rx = useTransform([tilt, rxPointer], ([a, b]) => (a as number) + (b as number));

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = ref.current!.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    py.set(-((e.clientY - r.top) / r.height - 0.5) * 5);
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={() => (px.set(0), py.set(0))} className="relative mx-auto mt-16 w-full max-w-[1120px] md:mt-20" style={{ perspective: 1800 }}>
      {/* Glow under the stage */}
      <div aria-hidden="true" className="absolute inset-x-[8%] -bottom-10 top-[30%] rounded-[50%] bg-accent/25 blur-[90px]" />
      <motion.div style={reduce ? undefined : { rotateX: rx, rotateY: ry, scale, y: lift, transformStyle: "preserve-3d" }} className="relative">
        {/* Back layer: the Podcasts workspace */}
        <div
          aria-hidden="true"
          className="absolute -top-[10%] left-[9%] right-[-3%] hidden overflow-hidden rounded-2xl border border-line-strong opacity-50 md:block"
          style={{ transform: "translateZ(-160px)" }}
        >
          <img src={shotSrc("podcasts-dark", 1600)} width={back.width} height={back.height} alt="" className="block h-auto w-full" loading="eager" decoding="async" />
        </div>
        {/* Main window */}
        <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-panel shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)]" style={{ transform: "translateZ(0)" }}>
          <div className="flex h-9 items-center gap-1.5 border-b border-line bg-white/[0.03] px-4" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
            <span className="ml-4 font-mono text-xs text-muted">Lead Finder 1.8.1</span>
          </div>
          <img
            src={shotSrc("leads-dark", 1600)}
            srcSet={main.widths.map((w) => `/screenshots/leads-dark-${w}.webp ${w}w`).join(", ")}
            sizes="(min-width: 1200px) 1120px, 100vw"
            width={main.width}
            height={main.height}
            alt={shots["leads-dark"].alt}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
        {/* Floating chips: facts from the real searches shown in the screenshots */}
        <div className="absolute -left-[5%] -top-[5%] hidden rounded-2xl border border-line-strong bg-[#0d1b16]/95 px-4 py-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] lg:block" style={{ transform: "translateZ(90px)" }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Podcast search · “gardening”</p>
          <p className="mt-1 text-[15px] font-semibold text-text">
            50 podcasts · <span className="text-accent">43 with an email</span>
          </p>
        </div>
        <div className="absolute -right-[5%] -bottom-[5%] hidden rounded-2xl border border-line-strong bg-[#0d1b16]/95 px-4 py-3 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] lg:block" style={{ transform: "translateZ(120px)" }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">Saved on this computer</p>
          <p className="mt-1 flex items-center gap-2 text-[15px] font-semibold text-text">
            <span className="live-dot inline-block h-2 w-2 rounded-full bg-accent" /> Leads appear as they’re found
          </p>
        </div>
      </motion.div>
    </div>
  );
}
