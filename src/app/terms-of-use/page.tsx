import type { Metadata } from "next";
import { Callout, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Responsible use",
  description: "How to use Lead Finder responsibly, and what the terms of Google Maps, Facebook, LinkedIn and WhatsApp say about automation.",
  alternates: { canonical: "/terms-of-use/" },
};

export default function ResponsibleUsePage() {
  return (
    <>
      <PageHero eyebrow="Responsible use" title="Use Lead Finder responsibly.">
        Lead Finder automates work in services that have their own rules. Please read this before you use it.
      </PageHero>
      <article className="container-x prose-lf mt-16 max-w-3xl">
        <Callout tone="warn" title="You are responsible for how you use Lead Finder">
          Lead Finder is not verified as compliant with the terms of the services it works with. You use it at your own risk and are responsible for how you use it and the data it collects.
        </Callout>

        <h2>What the services’ terms say</h2>
        <ul>
          <li><strong>Google Maps:</strong> the <a href="https://www.google.com/help/terms_maps/" target="_blank" rel="noopener noreferrer">Google Maps Terms of Service</a> say you may not copy the content or mass download or create bulk feeds of it without permission. Automatically collecting listing details conflicts with those terms.</li>
          <li><strong>Facebook:</strong> <a href="https://www.facebook.com/terms.php" target="_blank" rel="noopener noreferrer">Facebook’s terms</a> restrict automated collection.</li>
          <li><strong>LinkedIn:</strong> the <a href="https://www.linkedin.com/legal/user-agreement" target="_blank" rel="noopener noreferrer">LinkedIn User Agreement</a> prohibits automated access and scraping. LinkedIn may restrict accounts that use automation.</li>
          <li><strong>WhatsApp:</strong> WhatsApp’s terms don’t allow automated or unofficial clients. Lead Finder links through Baileys, an unofficial open-source WhatsApp Web library, and accounts used this way may be restricted or banned.</li>
          <li><strong>Spotify, Deezer, Player FM and Pandora:</strong> when you turn these on, Lead Finder reads what their search pages show in your own Chrome. Those services’ terms may not allow automated reading, and using these options is your choice and responsibility.</li>
        </ul>

        <h2>How Lead Finder limits its impact</h2>
        <ul>
          <li>It works only through your own Chrome and accounts, and reads only what you would see.</li>
          <li>It runs slowly: seconds between listings and pages, longer breaks, and small daily outreach limits.</li>
          <li>It never solves CAPTCHAs, answers security checks, logs in for you, or works around rate limits or blocks.</li>
          <li>It respects websites’ robots.txt rules when looking for contact emails on them.</li>
          <li>It never invents contact details, and stops messaging anyone who opts out.</li>
        </ul>

        <h2>Good practice</h2>
        <ul>
          <li>Contact only businesses you have a genuine reason to contact, and respect requests to stop.</li>
          <li>Follow the privacy, marketing and data-protection laws that apply to you and to the people you contact.</li>
          <li>For WhatsApp, use a number you can afford to have restricted, keep volumes low, and run campaigns in Test run first.</li>
          <li>Keep your exported lead files secure and delete what you no longer need.</li>
        </ul>

        <Callout tone="confirm" title="Legal terms">
          A formal end-user licence agreement, privacy policy and refund policy for the website have not been published yet. They should be reviewed by the business before launch.
        </Callout>
      </article>
    </>
  );
}
