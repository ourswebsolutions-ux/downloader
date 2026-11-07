module.exports = async ({ win, shot, sleep }) => {
  await win.getByRole('navigation', { name: 'Workspace' }).getByRole('button', { name: 'Leads' }).click();
  await win.getByLabel('Show source').selectOption('maps');
  const kw = win.getByPlaceholder('e.g. Software House in Lahore');
  const cat = win.getByPlaceholder('e.g. Software House', { exact: true });
  const webSel = win.locator('select').filter({ has: win.locator('option', { hasText: 'Without website' }) }).first();
  // 1) The CAPTCHA pause (troubleshooting)
  await kw.fill('Bakery in Lahore'); await cat.fill('Bakery'); await win.keyboard.press('Escape');
  await win.getByRole('button', { name: 'Start Search' }).click();
  const t0 = Date.now();
  while (Date.now() - t0 < 120000) {
    await sleep(4000);
    const t = await win.locator('body').innerText();
    if (/CAPTCHA/.test(t)) { await shot('maps-captcha-paused'); break; }
  }
  await win.getByRole('button', { name: 'Stop Search' }).click();
  await sleep(8000);
  // 2) With website: no Google web check.
  await webSel.selectOption({ label: 'With website' });
  await kw.fill('Bakery in Lahore'); await cat.fill('Bakery'); await win.keyboard.press('Escape');
  await shot('maps-form');
  await win.getByRole('button', { name: 'Start Search' }).click();
  const t1 = Date.now();
  let early = false;
  while (Date.now() - t1 < 10 * 60000) {
    await sleep(10000);
    const rows = await win.locator('tbody tr').count();
    const st = await win.locator('body').innerText();
    console.log(Math.round((Date.now() - t1) / 1000), 'rows', rows, /CAPTCHA/.test(st) ? 'CAPTCHA' : '');
    if (rows >= 4 && !early) { await shot('maps-running'); early = true; }
    if (rows >= 12) break;
  }
  await shot('maps-running-late');
  await win.getByRole('button', { name: 'Stop Search' }).click();
  await sleep(8000);
  await shot('maps-stopped');
};
