module.exports = async ({ win }) => {
  await win.getByRole('dialog', { name: /Enter your PIN/ }).waitFor({ timeout: 20000 });
  await win.keyboard.type('1357', { delay: 40 });
  await win.getByRole('heading', { name: 'Lead Finder' }).waitFor();
  await win.waitForTimeout(1200);
};
