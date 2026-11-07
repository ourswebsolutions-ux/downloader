"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Download } from "lucide-react";
import { osNames } from "@/content/product";

type OS = keyof typeof osNames;

export function detectOS(): OS | null {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "windows";
  if (/Mac OS X|Macintosh/i.test(ua) && !/iPhone|iPad/i.test(ua)) return "macos";
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return "linux";
  return null;
}

const noSubscribe = () => () => {};

// The visitor's desktop OS (null while pre-rendering, and on phones).
export function useOS() {
  return useSyncExternalStore(noSubscribe, detectOS, () => null);
}

// "Download for Windows" (or the visitor's desktop OS) → the Downloads page section.
export function DownloadButton({ className = "btn btn-primary btn-lg" }: { className?: string }) {
  const os = useOS();
  return (
    <Link href={os ? `/download/#${os}` : "/download/"} className={className}>
      <Download size={18} aria-hidden="true" />
      {os ? `Download for ${osNames[os]}` : "Download Lead Finder"}
    </Link>
  );
}
