module.exports = async ({ win, shot, sleep }) => {
  await win.getByRole('navigation', { name: 'Workspace' }).getByRole('button', { name: 'Leads' }).click();
  await win.getByLabel('Show source').selectOption('linkedin');
  await win.getByRole('switch', { name: /LinkedIn/ }).first().click();
  await win.getByRole('switch', { name: /Google Maps/ }).first().click();
  await sleep(500);
  await win.getByLabel('LinkedIn search').fill('Full Stack Developer');
  const modes = win.getByLabel('LinkedIn modes');
  for (const m of ['Posts', 'Companies']) await modes.getByRole('checkbox', { name: m }).uncheck().catch((e) => console.log(m, e.message.slice(0, 80)));
  await win.getByPlaceholder('e.g. Software House', { exact: true }).fill('Software Companies');
  await win.keyboard.press('Escape');
  await shot('linkedin-form');
  await win.getByRole('button', { name: 'Start Search' }).click();
  const t0 = Date.now();
  let early = false;
  while (Date.now() - t0 < 12 * 60000) {
    await sleep(15000);
    const rows = await win.locator('tbody tr').count();
    const st = (await win.locator('body').innerText()).match(/LinkedIn[^\n]*\n[^\n]*/g)?.slice(0, 3).join(' | ');
    console.log(Math.round((Date.now() - t0) / 1000), 'rows', rows, '|', (st || '').slice(0, 200));
    if (rows >= 3 && !early) { await shot('linkedin-running'); early = true; }
    if (rows >= 8) break;
  }
  await shot('linkedin-running-late');
  await win.getByRole('button', { name: 'Stop Search' }).click();
  await sleep(10000);
  await shot('linkedin-stopped');
  // restore switches
  await win.getByRole('switch', { name: /Google Maps/ }).first().click();
  await win.getByRole('switch', { name: /LinkedIn/ }).first().click();
};
