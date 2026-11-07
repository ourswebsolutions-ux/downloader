module.exports = async ({ win, shot, sleep }) => {
  await win.getByRole('navigation', { name: 'Workspace' }).getByRole('button', { name: 'Podcasts' }).click();
  const pc = win.locator('section.podcasts');
  await pc.locator('.pc-card, .pc-row').first().waitFor();
  await shot('podcasts-cards');
  await pc.getByRole('tab', { name: /^Email found/ }).click();
  await shot('podcasts-email-found');
  await pc.getByRole('tab', { name: /^No email/ }).click();
  await shot('podcasts-no-email');
  await pc.getByRole('tab', { name: /^All leads/ }).click();
  await pc.getByRole('tab', { name: 'Table' }).click();
  await pc.locator('.pc-row').first().waitFor();
  await shot('podcasts-table');
  // Details of the first lead
  await pc.getByRole('tab', { name: 'Cards' }).click();
  await pc.getByRole('button', { name: 'Details' }).first().click().catch((e) => console.log('details', e.message));
  await sleep(800);
  await shot('podcasts-details');
  console.log((await win.getByRole('dialog').last().innerText().catch(() => 'no dialog')).slice(0, 1200));
  await win.keyboard.press('Escape');
  await sleep(400);
  // Selection
  await pc.getByRole('tab', { name: 'Table' }).click();
  const boxes = pc.getByRole('checkbox', { name: /^Select / });
  for (const i of [1, 2, 4]) await boxes.nth(i).check();
  await shot('podcasts-selection');
  await pc.getByRole('button', { name: 'Clear' }).click().catch(() => {});
  // Settings
  await pc.getByRole('button', { name: 'Settings' }).click();
  await win.getByRole('dialog', { name: 'Search settings' }).waitFor();
  await shot('podcasts-settings');
  await win.keyboard.press('Escape');
  await sleep(400);
  await win.getByRole('dialog', { name: 'Search settings' }).getByRole('button', { name: 'Close', exact: true }).last().click().catch(() => {});
  // All platforms on
  for (const n of ['Spotify', 'YouTube', 'Amazon Music']) await pc.getByRole('switch', { name: n }).click();
  await win.evaluate(() => window.scrollTo(0, 0));
  await shot('podcasts-platforms', { locator: pc.locator('.pc-hero, header').first(), pad: 0 }).catch(async (e) => { console.log(e.message); await shot('podcasts-platforms'); });
  for (const n of ['Spotify', 'YouTube', 'Amazon Music']) await pc.getByRole('switch', { name: n }).click();
};
