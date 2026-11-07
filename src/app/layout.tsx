import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionProvider } from "@/components/MotionProvider";
import { product } from "@/content/product";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const description =
  "Lead Finder is a desktop app for Windows, macOS and Linux that finds business leads on Google Maps, Facebook and LinkedIn, discovers podcast contact emails, checks numbers on WhatsApp and runs careful outreach — all from your own computer.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${product.name} — Lead generation desktop software`, template: `%s · ${product.name}` },
  description,
  applicationName: product.name,
  authors: [{ name: product.publisher }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: product.name,
    title: `${product.name} — Lead generation desktop software`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Lead Finder desktop app" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#050b09",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn btn-primary">
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
