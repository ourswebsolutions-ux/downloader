// Genuine screenshots of Lead Finder 1.8.1, captured from the real app on
// 30 Oct 2026 with real searches (Google Maps "Bakery in Lahore", Apple
// Podcasts "gardening", LinkedIn "Full Stack Developer"). Third-party email
// addresses and phone numbers are partly hidden (•••) for privacy; nothing
// else was changed. See screenshots/README.md.

export const shots = {
  "pin-create": { alt: "Create your PIN screen with a numeric keypad", caption: "First launch: choose a four-digit PIN that protects the app." },
  "pin-confirm": { alt: "Confirm your PIN screen with two digits entered", caption: "Type the same PIN again to confirm it." },
  "main-first-launch": { alt: "Lead Finder main window before activation, with an empty leads table", caption: "The main window after the PIN is set. The Activate button at the top opens the plans." },
  "activate-plans": { alt: "Activate Lead Finder dialog listing Monthly PKR 4,500, 6 Months PKR 15,000 and Lifetime PKR 50,000, with the Activation ID", caption: "The Activate panel: the three plans with their prices, and this computer's Activation ID." },
  "activate-plan-selected": { alt: "Activate dialog with the 6 Months plan selected", caption: "Choose a plan, then click Activate to request a code for this computer and plan." },
  "activate-code-entry": { alt: "Request sent: 6 Months (PKR 15,000), with WhatsApp and Call buttons and six code boxes", caption: "After the request: contact us on WhatsApp or by phone to pay, then enter the 6-digit code you receive." },
  "activate-code-typed": { alt: "Six-digit activation code typed into the code boxes", caption: "Enter the code and click Verify & Activate." },
  "activate-done": { alt: "6 Months plan activated, valid until Apr 30, 2027", caption: "The plan starts immediately; the header shows the plan and the days left." },
  "maps-form": { alt: "Search form with keyword Bakery in Lahore, category Bakery and Website set to With website", caption: "A Google Maps search: keyword, category and the Website filter." },
  "maps-running": { alt: "Google Maps search running with leads appearing in the table and the agent card at the bottom left", caption: "Leads appear in the table the moment they are saved, while the agent card shows what is happening." },
  "maps-running-late": { alt: "12 bakery leads from Lahore with phone, address and website", caption: "A real search for “Bakery in Lahore”: each lead has its phone, address and website. Phone numbers are partly hidden here for privacy." },
  "maps-stopped": { alt: "Search stopped card: 12 new leads, 15 listings processed, 0 already saved", caption: "When a search ends or you stop it, a card shows the real counts from the database." },
  "maps-captcha-paused": { alt: "Paused: Google is showing a CAPTCHA. Lead Finder has paused and will not try to solve it.", caption: "If Google shows a CAPTCHA, the search pauses and keeps its place. Lead Finder never solves or bypasses it." },
  "sources-all": { alt: "Google Maps, Facebook and LinkedIn switches all on, with the LinkedIn search bar and Jobs, Posts, Companies modes", caption: "Three independent sources. With LinkedIn on, its own search bar and modes appear." },
  "linkedin-form": { alt: "LinkedIn search for Full Stack Developer with only the Jobs mode selected", caption: "LinkedIn on its own: the search describes the need (here “Full Stack Developer”), Jobs mode only." },
  "linkedin-running-late": { alt: "LinkedIn search running: page 100, 1000 jobs, 8 of 444 companies done, 8 new leads with phone, email and website", caption: "A real LinkedIn search for “Full Stack Developer” (Jobs mode, no login): 100 pages of jobs, 444 hiring companies, each looked up for a phone, email and website." },
  "linkedin-stopped": { alt: "Search stopped: 8 new leads, 1000 listings processed", caption: "Stopping keeps every company already saved." },
  "past-leads": { alt: "Past leads view with category, website, campaign, source, WhatsApp and date filters", caption: "Past leads: earlier days, with a date filter alongside the usual filters." },
  "security-menu": { alt: "Security menu with Change PIN and Lock now", caption: "The lock button: change your PIN or lock the app." },
  "leads-dark": { alt: "Lead Finder in dark mode showing Google Maps leads", caption: "Dark mode, with the same leads." },
  "podcasts-empty": { alt: "Podcasts workspace with the search box and Apple, Spotify, YouTube and Amazon switches", caption: "The Podcasts workspace: one search box, a switch per platform." },
  "podcasts-keyword": { alt: "Podcast search box with the keyword gardening", caption: "Type a topic, a podcast name, or paste a podcast link or website." },
  "podcasts-running": { alt: "Podcast search running: 7 of 50 checked, 6 with an email, leads appearing as cards", caption: "Every podcast is saved immediately; emails are discovered automatically while you watch." },
  "podcasts-done": { alt: "Podcast search done: 50 podcasts found, 43 with an email", caption: "A real search for “gardening”: 50 podcasts, 43 with a public contact email." },
  "podcasts-cards": { alt: "Podcast leads shown as cards with artwork, publisher, keyword and email status", caption: "Podcast leads as cards." },
  "podcasts-email-found": { alt: "Podcast library filtered to Email found", caption: "The Email found filter." },
  "podcasts-no-email": { alt: "Podcast library filtered to No email", caption: "The No email filter, with Retry to look again." },
  "podcasts-table": { alt: "Podcast leads in a table with publisher, platforms, keyword, email, website and status", caption: "The same leads as a table." },
  "podcasts-details": { alt: "Podcast card expanded showing discovery details and RSS feed", caption: "Details show where each email was found, the RSS feed and every address discovered." },
  "podcasts-selection": { alt: "Three podcast leads selected with Export selected and Delete selected buttons", caption: "Select leads (or all matching leads) to export or delete them." },
  "podcasts-settings": { alt: "Search settings dialog with results per platform and a YouTube API key field", caption: "Settings: results per platform (25–200) and the optional YouTube API key." },
  "podcasts-platforms": { alt: "Platform switches: Apple, Spotify (Chrome), YouTube (Key), Amazon (Chrome)", caption: "Labels show what each platform needs: Chrome opens Spotify and Amazon Music; YouTube needs a key." },
  "podcasts-dark": { alt: "Podcasts workspace in dark mode", caption: "The Podcasts workspace in dark mode." },
  "outreach-campaigns": { alt: "Category campaigns list with Bakery and Podcasts, each with an ON/OFF switch", caption: "Outreach: one campaign per lead category, each with its own ON/OFF switch." },
  "outreach-settings": { alt: "Campaign settings: Test run or Live, interval between contacts, daily limit 10, sending hours 09:00–21:00", caption: "Campaign settings: test run, timing, daily limit and sending hours." },
} as const;

export type ShotName = keyof typeof shots;
