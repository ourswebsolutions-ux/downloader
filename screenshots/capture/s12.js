module.exports = async ({ win, shot, sleep }) => {
  await win.getByRole('navigation', { name: 'Workspace' }).getByRole('button', { name: 'Outreach' }).click();
  const sec = win.locator('section.outreach');
  await sleep(1500);
  await sec.getByRole('button', { name: /Bakery/ }).first().click();
  await sleep(1000);
  const card = (text) => sec.locator('xpath=.//*[self::h2 or self::h3][normalize-space()="' + text + '"]/ancestor::*[contains(@class,"panel") or contains(@class,"card") or self::section][1]');
  for (const t of ['Category campaigns', 'Settings']) {
    const c = card(t);
    console.log(t, await c.count(), await c.first().evaluate((e) => e.className).catch((e) => e.message.slice(0, 60)));
  }
  await shot('outreach-campaigns', { locator: card('Category campaigns').first() });
  const st = card('Settings').first();
  await st.scrollIntoViewIfNeeded();
  await sleep(500);
  const b = await st.boundingBox();
  console.log('settings box', b);
  await shot('outreach-settings', { locator: st });
};
