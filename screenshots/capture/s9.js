module.exports = async ({ win, shot, sleep }) => {
  const ws = (n) => win.getByRole('navigation', { name: 'Workspace' }).getByRole('button', { name: n }).click();
  await ws('Leads');
  await win.getByText('Past leads', { exact: true }).first().click();
  await sleep(1000);
  await shot('past-leads');
  await win.getByText('Today', { exact: true }).first().click().catch(() => {});
  await win.locator('.wa-pill').click();
  await shot('whatsapp-menu');
  await win.keyboard.press('Escape');
  await ws('Outreach');
  await sleep(1200);
  await shot('outreach');
  console.log((await win.locator('section.outreach').innerText()).slice(0, 2500));
};
