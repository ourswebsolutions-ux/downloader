module.exports = async ({ win, shot, sleep }) => {
  await win.getByRole('navigation', { name: 'Workspace' }).getByRole('button', { name: 'Podcasts' }).click();
  const pc = win.locator('section.podcasts');
  await pc.locator('#pc-q').waitFor();
  await shot('podcasts-empty');
  const cat = pc.getByLabel('Save leads to category');
  console.log('cat tag', await cat.evaluate((e) => e.tagName + ' ' + e.outerHTML.slice(0, 300)).catch((e) => e.message));
  await pc.locator('#pc-q').fill('gardening');
  await shot('podcasts-keyword');
  await pc.getByRole('button', { name: 'Search', exact: true }).click();
  await sleep(9000);
  await shot('podcasts-running');
  await win.waitForFunction(() => /state-(done|stopped|failed)/.test(document.querySelector('.pc-run')?.className || ''), null, { timeout: 600000 });
  await sleep(2000);
  await shot('podcasts-done');
  console.log(await pc.locator('.pc-run').innerText());
};
