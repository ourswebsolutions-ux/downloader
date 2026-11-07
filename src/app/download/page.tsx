import type { Metadata } from "next";
import Link from "next/link";
import { DownloadGrid } from "@/components/DownloadGrid";
import { Callout, PageHero } from "@/components/ui";
import { product } from "@/content/product";

export const metadata: Metadata = {
  title: "Download",
  description: `Download Lead Finder ${product.version} for Windows (.exe), macOS (Apple Silicon and Intel .dmg) and Linux (.deb and AppImage).`,
  alternates: { canonical: "/download/" },
};

const released = new Date(product.releaseDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function DownloadPage() {
  return (
    <>
      <PageHero eyebrow={`Version ${product.version} · released ${released}`} title="Download Lead Finder">
        Free to download for Windows, macOS and Linux. Installed copies update themselves to new releases.
      </PageHero>

      <div className="container-x mt-16">
        <DownloadGrid />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card p-7">
            <h2 className="text-xl font-semibold text-text">System requirements</h2>
            <ul className="prose-lf mt-3">
              <li><strong>Windows</strong> 64-bit (x64).</li>
              <li><strong>macOS</strong> on Apple Silicon (M-series) or Intel. Not sure which? Apple menu → About This Mac → <em>Chip</em> (Apple M…) or <em>Processor</em> (Intel).</li>
              <li><strong>Linux</strong> x86_64: the .deb for Debian, Ubuntu and derivatives; the AppImage for other distributions.</li>
              <li><strong>Google Chrome {product.chromeMinVersion} or newer</strong>, installed normally. Lead Finder searches through your own Chrome.</li>
              <li>An internet connection for searching, activation and updates.</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="text-xl font-semibold text-text">After downloading</h2>
            <ul className="prose-lf mt-3">
              <li>Follow the <Link href="/installation/">installation guide</Link> for your system.</li>
              <li>Then the <Link href="/guide/">how-to-use guide</Link> takes you from your PIN and activation to your first search.</li>
              <li>The download is free and starts a 5-day Free Trial of 30 leads; after that, <Link href="/pricing/">a plan</Link> is needed to search.</li>
              <li>All releases and release notes: <a href={product.releasesUrl} target="_blank" rel="noopener noreferrer">GitHub Releases</a>.</li>
            </ul>
          </div>
        </div>

        <Callout tone="warn" title="The installers are not code-signed yet">
          Windows SmartScreen may say <strong>“Windows protected your PC”</strong>: choose <strong>More info → Run anyway</strong>. On macOS, the first time, right-click (or Control-click) the app and choose <strong>Open</strong>; on newer macOS versions use <strong>System Settings → Privacy &amp; Security → Open Anyway</strong>. Only download Lead Finder from this page or the official GitHub release, and compare the SHA-512 checksum if you want to be sure the file is intact (<Link href="/installation/#verify">how</Link>).
        </Callout>
      </div>
    </>
  );
}
