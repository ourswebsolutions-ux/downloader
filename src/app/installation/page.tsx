import type { Metadata } from "next";
import Link from "next/link";
import { Shot } from "@/components/Shot";
import { Callout, CtaBand, PageHero, Toc } from "@/components/ui";
import { downloads, product } from "@/content/product";

export const metadata: Metadata = {
  title: "Installation guide",
  description: "Install Lead Finder on Windows, macOS or Linux, set up Chrome once, create your PIN and activate your plan.",
  alternates: { canonical: "/installation/" },
};

const file = (os: string, kind?: string) => downloads.find((d) => d.os === os && (!kind || d.file.endsWith(kind)))!;

const toc = [
  { id: "before", label: "Before you start" },
  { id: "windows", label: "Windows" },
  { id: "macos", label: "macOS" },
  { id: "linux", label: "Linux" },
  { id: "first-launch", label: "First launch & PIN" },
  { id: "chrome", label: "Connect Chrome (once)" },
  { id: "activate", label: "Activate" },
  { id: "verify", label: "Verify a download" },
  { id: "uninstall", label: "Updating & uninstalling" },
  { id: "troubleshooting", label: "Troubleshooting" },
];

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="relative grid grid-cols-[36px_1fr] gap-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent-soft font-mono text-sm text-accent">{n}</span>
      <div className="min-w-0 pt-1">
        <h3 className="!mt-0 !text-[17px]">{title}</h3>
        <div>{children}</div>
      </div>
    </li>
  );
}

export default function InstallationPage() {
  return (
    <>
      <PageHero eyebrow="Installation guide" title="Install Lead Finder in a few minutes.">
        Step-by-step instructions for Windows, macOS and Linux, then the one-time Chrome setup, your PIN and activation.
      </PageHero>
      <div className="container-x mt-16 grid gap-12 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block"><Toc items={toc} /></aside>
        <article className="prose-lf min-w-0 max-w-3xl">
          <h2 id="before" className="!mt-0">Before you start</h2>
          <ul>
            <li><strong>Google Chrome {product.chromeMinVersion} or newer</strong> must be installed. Check in Chrome: menu ⋮ → Help → About Google Chrome.</li>
            <li>To search Facebook or LinkedIn company pages, be logged in to them in that Chrome. Lead Finder uses your Chrome profile and never logs in for you.</li>
            <li>Download the installer for your system from the <Link href="/download/">Downloads page</Link>.</li>
          </ul>

          <h2 id="windows">Windows</h2>
          <ol className="!list-none !pl-0 grid gap-6">
            <Step n={1} title="Run the installer">
              <p>Open <code>{file("windows").file}</code> from your Downloads folder.</p>
            </Step>
            <Step n={2} title="If SmartScreen appears">
              <p>The installer is not code-signed yet, so Windows may show <strong>“Windows protected your PC”</strong>. Click <strong>More info</strong>, then <strong>Run anyway</strong>.</p>
            </Step>
            <Step n={3} title="Choose where to install">
              <p>The installer lets you change the installation folder and creates a desktop shortcut. Click <strong>Install</strong>, then <strong>Finish</strong>.</p>
            </Step>
            <Step n={4} title="Open Lead Finder">
              <p>Start it from the desktop shortcut or the Start menu.</p>
            </Step>
          </ol>

          <h2 id="macos">macOS</h2>
          <ol className="!list-none !pl-0 grid gap-6">
            <Step n={1} title="Pick the right file">
              <p>Apple Silicon (M1–M4): <code>{file("macos", "arm64.dmg").file}</code>. Intel Macs: <code>{file("macos", "x64.dmg").file}</code>. Check under Apple menu → About This Mac.</p>
            </Step>
            <Step n={2} title="Install">
              <p>Open the .dmg and drag <strong>Lead Finder</strong> into <strong>Applications</strong>.</p>
            </Step>
            <Step n={3} title="Open it the first time">
              <p>The app is not signed with an Apple Developer ID yet. Right-click (or Control-click) Lead Finder in Applications and choose <strong>Open</strong>, then <strong>Open</strong> again. If macOS only offers <em>Done</em> or <em>Move to Trash</em>, open <strong>System Settings → Privacy &amp; Security</strong>, scroll down and click <strong>Open Anyway</strong> next to Lead Finder.</p>
            </Step>
          </ol>

          <h2 id="linux">Linux</h2>
          <h3>Debian, Ubuntu and derivatives (.deb)</h3>
          <ol className="!list-none !pl-0 grid gap-6">
            <Step n={1} title="Install the package">
              <p>Double-click <code>{file("linux", ".deb").file}</code> to open it in your software installer, or in a terminal:</p>
              <pre className="mt-2 overflow-x-auto rounded-xl border border-line bg-black/40 p-4 font-mono text-sm text-text"><code>{`sudo apt install ./${file("linux", ".deb").file}`}</code></pre>
            </Step>
            <Step n={2} title="Open Lead Finder">
              <p>Find <strong>Lead Finder</strong> in your applications menu.</p>
            </Step>
          </ol>
          <h3>Any distribution (AppImage)</h3>
          <ol className="!list-none !pl-0 grid gap-6">
            <Step n={1} title="Make it executable">
              <pre className="mt-2 overflow-x-auto rounded-xl border border-line bg-black/40 p-4 font-mono text-sm text-text"><code>{`chmod +x ${file("linux", ".AppImage").file}`}</code></pre>
              <p>Or: right-click the file → Properties → Permissions → <em>Allow executing file as program</em>.</p>
            </Step>
            <Step n={2} title="Run it">
              <pre className="mt-2 overflow-x-auto rounded-xl border border-line bg-black/40 p-4 font-mono text-sm text-text"><code>{`./${file("linux", ".AppImage").file}`}</code></pre>
            </Step>
          </ol>

          <h2 id="first-launch">First launch: create your PIN</h2>
          <p>The first time Lead Finder opens, it asks for a four-digit PIN. You will need it every time the app opens.</p>
          <ol className="!list-none !pl-0 grid gap-6">
            <Step n={1} title="Choose a four-digit PIN">
              <p>Click the keypad or type the digits.</p>
              <Shot name="pin-create" sizes="(min-width: 1024px) 720px, 100vw" />
            </Step>
            <Step n={2} title="Confirm it">
              <p>Type the same four digits again.</p>
              <Shot name="pin-confirm" sizes="(min-width: 1024px) 720px, 100vw" />
            </Step>
            <Step n={3} title="The main window opens">
              <Shot name="main-first-launch" sizes="(min-width: 1024px) 720px, 100vw" />
            </Step>
          </ol>
          <Callout tone="warn" title="Remember your PIN">
            After 5 wrong PINs the app pauses before the next try, from 30 seconds up to 15 minutes. You can change your PIN later from the lock button at the top right (<strong>Change PIN</strong>, which needs the current PIN).
          </Callout>

          <h2 id="chrome">Connect Chrome (one time)</h2>
          <p>Lead Finder works through the Chrome you already use — same profile, same logins. For your safety, Chrome only lets another app use your normal profile after you switch this on yourself. Chrome remembers it, so you do this once.</p>
          <ol className="!list-none !pl-0 grid gap-6">
            <Step n={1} title="Click Start Search">
              <p>If the switch is off, Lead Finder copies <code>chrome://inspect/#remote-debugging</code> to your clipboard and tells you what to do. (Chrome refuses <code>chrome://</code> addresses opened by other programs.)</p>
            </Step>
            <Step n={2} title="Turn on remote debugging in Chrome">
              <p>Paste the address into Chrome’s address bar, press Enter, and turn on <strong>Allow remote debugging for this browser instance</strong>.</p>
            </Step>
            <Step n={3} title="Click Allow">
              <p>Chrome asks whether to allow the connection: click <strong>Allow</strong>. Lead Finder waits up to 5 minutes and then continues by itself.</p>
            </Step>
          </ol>
          <p>From then on, only Chrome’s <strong>Allow</strong> prompt appears, once per Lead Finder session. If Chrome was already open before the switch was saved, Lead Finder offers to restart Chrome for you; your tabs are restored.</p>

          <h2 id="activate">Activate your plan</h2>
          <p>Searching needs an active plan. Click <strong>Activate</strong> at the top of the window — the full walkthrough with screenshots is in the <Link href="/guide/#activate">how-to-use guide</Link>, and prices are on the <Link href="/pricing/">pricing page</Link>.</p>

          <h2 id="verify">Verify a download (optional)</h2>
          <p>Each file’s SHA-512 checksum is listed on the <Link href="/download/">Downloads page</Link> (in the same base64 form the auto-updater uses). To compute it for your file:</p>
          <pre className="overflow-x-auto rounded-xl border border-line bg-black/40 p-4 font-mono text-sm text-text"><code>{`# macOS / Linux
openssl dgst -sha512 -binary <file> | base64

# Windows (PowerShell)
$s = [IO.File]::OpenRead("<file>")
[Convert]::ToBase64String([Security.Cryptography.SHA512]::Create().ComputeHash($s)); $s.Close()`}</code></pre>

          <h2 id="uninstall">Updating and uninstalling</h2>
          <ul>
            <li><strong>Updates</strong> are automatic: the app checks 10 seconds after it starts and every 4 hours. Windows and the AppImage update silently; the .deb asks for your password; macOS shows a <strong>Download</strong> button. An update never interrupts a running search, and never touches your leads, settings, PIN or plan.</li>
            <li><strong>Uninstall:</strong> Windows — Settings → Apps → Lead Finder → Uninstall. macOS — drag Lead Finder from Applications to the Trash. Linux — <code>sudo apt remove lead-finder</code>, or delete the AppImage.</li>
            <li>Your data folder is kept when you uninstall: <code>%APPDATA%\Lead Finder</code> (Windows), <code>~/Library/Application Support/Lead Finder</code> (macOS), <code>~/.config/Lead Finder</code> (Linux). Delete it only if you want to remove your leads too.</li>
          </ul>

          <h2 id="troubleshooting">Troubleshooting</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Problem</th><th>What to do</th></tr></thead>
              <tbody>
                <tr><td>“Windows protected your PC”</td><td>More info → Run anyway. The installer is not code-signed yet.</td></tr>
                <tr><td>macOS won’t open the app</td><td>System Settings → Privacy &amp; Security → Open Anyway. If macOS says the app “is damaged”, run <code>xattr -cr &quot;/Applications/Lead Finder.app&quot;</code> in Terminal, then open it again.</td></tr>
                <tr><td>AppImage does nothing when double-clicked</td><td>Make it executable (<code>chmod +x</code>). Some distributions also need the <code>libfuse2</code> package for AppImages.</td></tr>
                <tr><td>Status says Chrome is missing or too old</td><td>Install or update Google Chrome to version {product.chromeMinVersion} or newer.</td></tr>
                <tr><td>Chrome connection never completes</td><td>Make sure remote debugging is switched on in <code>chrome://inspect/#remote-debugging</code> and click <strong>Allow</strong> when Chrome asks.</td></tr>
                <tr><td>“WhatsApp unavailable”</td><td>WhatsApp linking needs the system keychain (Keychain on macOS, Windows credential protection, GNOME Keyring or KWallet on Linux). Without one, linking is disabled on purpose.</td></tr>
              </tbody>
            </table>
          </div>
          <p>Still stuck? <Link href="/support/">Contact support</Link>.</p>
        </article>
      </div>
      <CtaBand title="Installed? Find your first leads." />
    </>
  );
}
