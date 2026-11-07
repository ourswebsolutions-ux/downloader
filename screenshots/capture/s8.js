module.exports = async ({ win, shot, sleep }) => {
  const ws = (n) => win.getByRole('navigation', { name: 'Workspace' }).getByRole('button', { name: n }).click();
  await ws('Leads');
  await win.getByLabel('Show source').selectOption('maps');
  // Source switches all on (form only, no search)
  const fb = win.getByRole('switch', { name: /Facebook/ }).first();
  const li = win.getByRole('switch', { name: /LinkedIn/ }).first();
  console.log('switches', await win.getByRole('switch').count());
  await fb.click(); await li.click();
  await sleep(600);
  await win.getByLabel('LinkedIn search').fill('Full Stack Developer').catch((e) => console.log('li input', e.message));
  await shot('sources-all');
  console.log((await win.locator('form, .search-card, section').first().innerText()).slice(0, 800));
  await fb.click(); await li.click();
  // Security menu
  await win.getByRole('button', { name: 'Security' }).click().catch(async () => win.locator('button[aria-label*="ecurity"], .lock-btn').first().click());
  await shot('security-menu');
  await win.keyboard.press('Escape');
  // Category manager
  await win.getByRole('button', { name: 'Manage categories' }).click();
  await shot('category-manager');
  await win.keyboard.press('Escape');
  await win.getByRole('button', { name: 'Manage categories' }).click().catch(() => {});
  // Past leads
  await win.getByRole('button', { name: 'Past leads' }).first().click();
  await sleep(800);
  await shot('past-leads');
  await win.getByRole('button', { name: /Today/ }).first().click().catch(() => {});
  // WhatsApp panel
  await win.locator('.wa-pill').click();
  await shot('whatsapp-menu');
  await win.keyboard.press('Escape');
  // Outreach
  await ws('Outreach');
  await sleep(1200);
  await shot('outreach');
  console.log((await win.locator('section.outreach').innerText()).slice(0, 1500));
};
