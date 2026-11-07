// Every fact on this site comes from the Lead Finder desktop app itself
// (source code, README and the published GitHub release). When something
// changes in the app, change it here. Items marked `confirm` are not stated
// anywhere in the app and must be confirmed by the business before launch.

export const product = {
  name: "Lead Finder",
  publisher: "Axora Web",
  tagline: "Find leads from Google Maps, Facebook, LinkedIn and podcasts — on your own computer.",
  version: "1.17.0",
  releaseDate: "2026-11-07",
  releaseUrl: "https://github.com/ourswebsolutions-ux/lead-getter/releases/tag/v1.17.0",
  releasesUrl: "https://github.com/ourswebsolutions-ux/lead-getter/releases",
  chromeMinVersion: 144,
} as const;

// Contact details shown inside the app's Activate panel
// (src/main/activation-config.json). The email is the publisher address in
// the app's package metadata.
export const contact = {
  whatsappNumber: "923245237429",
  phoneDisplay: "+92 324 5237429",
  phoneHref: "tel:+923245237429",
  whatsappHref: "https://wa.me/923245237429",
  email: "info.axoraweb@gmail.com",
} as const;

export const whatsappLink = (text: string) => `${contact.whatsappHref}?text=${encodeURIComponent(text)}`;

export type Plan = {
  id: "monthly" | "six_months" | "lifetime";
  name: string;
  price: number;
  priceLabel: string;
  duration: string;
  durationDetail: string;
  dailyLeads: string; // src/main/activation-config.json → limits.dailyLeads
  highlight?: boolean;
  note?: string;
};

// src/main/activation.js → PLANS
export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: 4500,
    priceLabel: "PKR 4,500",
    duration: "1 month",
    durationDetail: "Ends on the same calendar date next month.",
    dailyLeads: "Up to 100 new leads a day",
  },
  {
    id: "six_months",
    name: "6 Months",
    price: 15000,
    priceLabel: "PKR 15,000",
    duration: "6 months",
    durationDetail: "Ends on the same calendar date six months later.",
    dailyLeads: "No daily lead limit",
    highlight: true,
    note: "Works out to PKR 2,500 a month, 44% less than six Monthly plans (PKR 27,000).",
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: 50000,
    priceLabel: "PKR 50,000",
    duration: "Never expires",
    durationDetail: "One payment; the plan never ends on this computer.",
    dailyLeads: "No daily lead limit",
  },
];

// What an active plan unlocks (src/main/main.js → requirePlan()).
// Every plan unlocks the same features; plans differ in length, and Monthly
// finds up to 100 new leads a day (all sources together, Pakistan time).

export const planIncludes = [
  "Google Maps lead search",
  "Facebook post lead search",
  "LinkedIn company lead search",
  "Podcast search with automatic email discovery",
  "CSV export of leads and podcast leads",
  "WhatsApp linking, number checks and sending",
  "Several WhatsApp accounts with parallel outreach campaigns",
];

export const withoutPlan = [
  "View, filter and search saved leads",
  "Delete leads",
  "Run outreach campaigns in Test run mode (nothing is sent)",
];

// src/main/activation-config.json → trial. Starts by itself on first launch;
// not sold, so it isn't in `plans`.
export const freeTrial = {
  name: "Free Trial",
  priceLabel: "PKR 0",
  days: 5,
  leads: 30,
  summary: "5 days and 30 leads in total, starting by itself the first time you open the app. No payment, no code, no approval.",
};

// Facts about activation (src/main/activation.js and README).
export const activationRules = [
  "A plan is activated on one computer, identified by its Activation ID.",
  "Activation codes are 6 digits, work once, for 10 minutes, with 5 tries.",
  "A code only works on the computer and plan it was requested for.",
  "Requesting a new code cancels the previous one.",
  "Renewing while a plan is still running adds the new plan's length to the current end date.",
  "Monthly and 6 Months end on their calendar date; Lifetime never ends.",
  "Monthly finds up to 100 unique new leads a day across Google Maps, Facebook, LinkedIn and podcasts together; leads already saved don't count, and the count resets at midnight Pakistan time.",
  "Your plan is kept across restarts and updates.",
  "The Free Trial starts by itself once per computer: exactly 5 days and 30 leads in total. Duplicates don't count. Reinstalling doesn't start it again.",
  "A plan bought during the Free Trial starts that day; leftover trial days aren't added.",
];

// Not stated anywhere in the app: shown on the site with a "confirm with us" label.
export const needsConfirmation = [
  "Accepted payment methods (the app only says to pay us via WhatsApp or phone).",
  "Refund policy.",
  "Moving a plan to a new computer, or one plan on several computers.",
  "Prices in currencies other than PKR, and any taxes.",
];

export type Asset = {
  os: "windows" | "macos" | "linux";
  label: string;
  file: string;
  size: number;
  arch: string;
  kind: string;
  recommended?: boolean;
  sha512: string;
};

const dl = (file: string) => `${product.releasesUrl}/download/v${product.version}/${file}`;

// Verified against the v1.17.0 release assets and latest*.yml (sizes in bytes, SHA-512 as published for the auto-updater).
const assets: Asset[] = [
  { os: "windows", label: "Windows installer", file: "Lead-Finder-Setup-1.17.0.exe", size: 121912453, arch: "64-bit (x64)", kind: ".exe installer", recommended: true, sha512: "o843MwAzzqbdMPZA5WBXzkKDdJl4kdiLzBJXQRXpCZM0ZZXevbUrPrAhoS7s1u/EywdDX/gL3NWHVozuukk7jw==" },
  { os: "macos", label: "macOS · Apple Silicon", file: "Lead-Finder-1.17.0-mac-arm64.dmg", size: 143502563, arch: "M1, M2, M3, M4 (arm64)", kind: ".dmg disk image", recommended: true, sha512: "QHCOkX9dz6TIC2jIe5VqhPIJcMk3mHMFjPjbhmbp0M77wxkbmWkR5db+jf8XgwZ7aALbK8yiSIvcZqSLmWT/2Q==" },
  { os: "macos", label: "macOS · Intel", file: "Lead-Finder-1.17.0-mac-x64.dmg", size: 147324211, arch: "Intel (x64)", kind: ".dmg disk image", sha512: "vq6itUeAdB4QCPDICII/ehFqz/zQZiwYahtiuENHDY94bcGf4nk87gOpD6h0sh3PxXQdqTv1fJntTDFj/dUWaQ==" },
  { os: "macos", label: "macOS · Apple Silicon (zip)", file: "Lead-Finder-1.17.0-mac-arm64.zip", size: 143530039, arch: "arm64", kind: ".zip archive", sha512: "TnVsAWK09uQkIm3qpBHWxQhmyEgVuRQ+W2ESiMfyXy/WugkUo4DLMixqhXv+K5IyR2DtO7vcxh4WdKVtV7s1NA==" },
  { os: "macos", label: "macOS · Intel (zip)", file: "Lead-Finder-1.17.0-mac-x64.zip", size: 147337764, arch: "x64", kind: ".zip archive", sha512: "1mHc2ejgcq/ktgU1eUd362BOyQ/XNQQ56dV5iR5bruwts/jdVsSuRqHBmkiuXr4j9BEnMkS0eqMv3t4yvhoxnQ==" },
  { os: "linux", label: "Linux · Debian / Ubuntu", file: "lead-finder_1.17.0_amd64.deb", size: 110054260, arch: "x86_64 (amd64)", kind: ".deb package", recommended: true, sha512: "xggUJaTmE4LXdZNyu823zX9r8IIBWXb0siuW8OXMY1DjUOc8CRDxENjUHd7eAyljjM4yGODi+POzazGvS6n+ng==" },
  { os: "linux", label: "Linux · AppImage", file: "Lead-Finder-1.17.0-linux-x86_64.AppImage", size: 140928362, arch: "x86_64", kind: "AppImage (any distro)", sha512: "pmvnCvTyx0Wn9Cog+OiQFB7HfINpqXdyGdlHQ/lrBeR+0xLF5J4gQG7gM7jag8Hi61rd5O8DhXvA/DmPm1IRGg==" },
];

export const downloads = assets.map((a) => ({ ...a, url: dl(a.file) }));

export const formatSize = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(0)} MB`;

export const osNames = { windows: "Windows", macos: "macOS", linux: "Linux" } as const;
