// The Lead Finder mark, exactly as in the desktop app (build/icon.svg).
export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="#165f4a" />
      <path d="M8 6.5v11h8" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="8" r="2" fill="#fff" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-[17px] font-semibold tracking-tight text-text">Lead Finder</span>
    </span>
  );
}
