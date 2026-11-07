// The public address of the website. Set NEXT_PUBLIC_SITE_URL before
// `npm run build` (see README); it is used for canonical links, the sitemap
// and social previews.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const nav = [
  { href: "/features/", label: "Features" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/guide/", label: "How to use" },
  { href: "/docs/", label: "Docs" },
  { href: "/faq/", label: "FAQ" },
  { href: "/support/", label: "Support" },
] as const;

export const footerNav = [
  {
    title: "Product",
    links: [
      { href: "/features/", label: "Features" },
      { href: "/pricing/", label: "Pricing" },
      { href: "/download/", label: "Download" },
      { href: "/changelog/", label: "Release notes" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/installation/", label: "Installation guide" },
      { href: "/guide/", label: "How to use" },
      { href: "/docs/", label: "Documentation" },
      { href: "/faq/", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/support/", label: "Contact & support" },
      { href: "/terms-of-use/", label: "Responsible use" },
    ],
  },
] as const;
