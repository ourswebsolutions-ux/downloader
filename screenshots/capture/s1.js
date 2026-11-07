module.exports = async ({ win, shot, sleep }) => {
  const d = win.getByRole('dialog', { name: /Create your PIN/ });
  await d.waitFor({ timeout: 20000 });
  await shot('pin-create');
  await win.keyboard.type('1357', { delay: 120 });
  await win.getByRole('dialog', { name: 'Confirm your PIN' }).waitFor();
  await win.keyboard.type('13', { delay: 120 });
  await shot('pin-confirm');
  await win.keyboard.type('57', { delay: 120 });
  await win.getByRole('heading', { name: 'Lead Finder' }).waitFor();
  await sleep(1500);
  await shot('main-first-launch');
  const header = await win.locator('header').first().innerHTML();
  console.log(header.slice(0, 3000));
};
