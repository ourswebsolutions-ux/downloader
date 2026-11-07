'use strict';
// Capture harness: launches the real Lead Finder desktop app from its source
// (LEAD_FINDER_SRC, default ../../../chrom-lead; run `npx vite build` there
// first), with a separate data folder and a separate Chrome profile, runs the
// given step files and saves 2x screenshots to ./shots.
//   node cap.js s1.js            first launch: PIN
//   node cap.js unlock.js s3.js  activation, and so on.
// Third-party emails and phone numbers are partly masked before each shot.
const path = require('node:path');
const fs = require('node:fs');
const { createRequire } = require('node:module');
const APP = process.env.LEAD_FINDER_SRC || path.resolve(__dirname, '../../../chrom-lead');
const req = createRequire(path.join(APP, 'package.json'));
const { _electron } = req('playwright-core');
const { startSmtp } = req('./test/fake-smtp.js');
const HERE = __dirname;
const SHOTS = path.join(HERE, 'shots');

(async () => {
  const port = 2525 + 17;
  const mail = await startSmtp({ port, unref: true });
  const contact = JSON.parse(fs.readFileSync(path.join(APP, 'src/main/activation-config.json'), 'utf8')).contact;
  // A throwaway test secret (dev builds only accept this test configuration).
  const secretFile = path.join(HERE, 'secret.txt');
  if (!fs.existsSync(secretFile)) fs.writeFileSync(secretFile, require('node:crypto').randomBytes(32).toString('base64'));
  const cfg = { secret: fs.readFileSync(secretFile, 'utf8').trim(), adminEmail: 'admin@example.com', contact, fallbackPattern: null,
    smtp: { host: '127.0.0.1', port, user: 'sender@example.com', pass: 'x', from: 'Lead Finder <sender@example.com>', insecure: true } };
  const userData = path.join(HERE, process.env.PROFILE || 'app');
  fs.mkdirSync(userData, { recursive: true });
  const env = { ...process.env, LEAD_FINDER_ACTIVATION_CONFIG: JSON.stringify(cfg), LEAD_FINDER_NO_NETWORK_TIME: '1', LEAD_FINDER_USER_DATA: userData, LEAD_FINDER_CHROME_USER_DATA: path.join(HERE, 'chrome'), LEAD_FINDER_NO_UPDATES: '1' };
  delete env.ELECTRON_RUN_AS_NODE;
  const app = await _electron.launch({ args: [...(process.env.EXTRA_ARGS ? process.env.EXTRA_ARGS.split(' ') : []), APP], cwd: APP, env });
  const win = await app.firstWindow();
  const errors = [];
  win.on('pageerror', (e) => errors.push(e.message));
  await app.evaluate(({ BrowserWindow }) => { const w = BrowserWindow.getAllWindows()[0]; w.setSize(1440, 900); w.center(); });
  await win.waitForTimeout(800);
  const cdp = await win.context().newCDPSession(win);
  const W = Number(process.env.W || 1440), H = Number(process.env.H || 900);
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 2, mobile: false });
  await win.waitForTimeout(300);
  const shot = async (name, opts = {}) => {
    await win.waitForTimeout(opts.wait ?? 700);
    if (opts.mask !== false) await mask();
    const file = path.join(SHOTS, `${name}.png`);
    const params = { format: 'png' };
    if (opts.locator) {
      const b = await opts.locator.boundingBox();
      const pad = opts.pad ?? 0;
      params.clip = { x: Math.max(0, b.x - pad), y: Math.max(0, b.y - pad), width: b.width + 2 * pad, height: b.height + 2 * pad, scale: 1 };
    }
    const { data } = await cdp.send('Page.captureScreenshot', params);
    fs.writeFileSync(file, Buffer.from(data, 'base64'));
    console.log('shot', name);
  };
  const code = (id) => { const m = mail.messages.filter((x) => x.text.includes(id)).at(-1); return m && m.text.match(/Activation code \(OTP\): (\d{6})/)[1]; };
  // Partly hides third-party emails and phone numbers (not the app's own support number).
  const mask = () => win.evaluate(() => {
    const keep = /923245237429|3245237429/;
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const fix = (t) => t
      .replace(/([A-Za-z0-9._%+-])[A-Za-z0-9._%+-]*@/g, (m, a) => `${a}•••@`)
      .replace(/\+?\d[\d\s()-]{8,}\d/g, (m) => (keep.test(m.replace(/\D/g, '')) ? m : m.replace(/\d(?=[\d\s()-]{4,}$)/g, (d, i) => (i < 4 ? d : '•'))));
    let n; while ((n = w.nextNode())) { const v = fix(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; }
    for (const el of document.querySelectorAll('input')) { if (el.value && /@|\d{7,}/.test(el.value)) el.value = fix(el.value); }
  });
  const ctx = { mask, app, win, shot, mail, code, errors, sleep: (ms) => win.waitForTimeout(ms) };
  try {
    for (const step of process.argv.slice(2)) await require(path.resolve(step))(ctx);
  } catch (e) {
    console.error('STEP FAILED', e.message);
    await win.screenshot({ path: path.join(HERE, 'fail.png') }).catch(() => {});
  } finally {
    if (errors.length) console.log('page errors', errors);
    if (!process.env.KEEP) await app.close();
  }
})();
