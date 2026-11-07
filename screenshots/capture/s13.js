module.exports = async ({ win, shot, sleep }) => {
  const ws = (n) => win.getByRole('navigation', { name: 'Workspace' }).getByRole('button', { name: n }).click();
  await win.getByRole('button', { name: 'Switch to dark mode' }).click();
  await sleep(1200);
  await ws('Leads');
  await win.getByLabel('Show source').selectOption('maps');
  await sleep(800);
  await shot('leads-dark');
  await ws('Podcasts');
  const pc = win.locator('section.podcasts');
  await pc.getByRole('tab', { name: 'Cards' }).click();
  await pc.locator('#pc-q').fill('gardening');
  await sleep(600);
  await shot('podcasts-dark');
  await pc.locator('#pc-q').fill('');
  await win.getByRole('button', { name: 'Switch to light mode' }).click();
  await sleep(600);
};
