// Turns the genuine app screenshots in screenshots/originals/*.png into
// responsive WebP files in public/screenshots/ and records their sizes in
// src/content/screenshot-sizes.json. Run: npm run images
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const src = path.join(root, "screenshots", "originals");
const out = path.join(root, "public", "screenshots");
const WIDTHS = [960, 1600, 2560];

await mkdir(out, { recursive: true });
const sizes = {};
for (const file of (await readdir(src)).filter((f) => f.endsWith(".png")).sort()) {
  const name = file.replace(/\.png$/, "");
  const img = sharp(path.join(src, file));
  const { width, height } = await img.metadata();
  const made = [];
  for (const w of WIDTHS.filter((w) => w < width).concat(width > WIDTHS.at(-1) ? [] : [width])) {
    await sharp(path.join(src, file)).resize({ width: w }).webp({ quality: 82, effort: 5 }).toFile(path.join(out, `${name}-${w}.webp`));
    made.push(w);
  }
  sizes[name] = { width, height, widths: [...new Set(made)].sort((a, b) => a - b) };
  console.log(name, width, "x", height, "→", sizes[name].widths.join(", "));
}
await writeFile(path.join(root, "src", "content", "screenshot-sizes.json"), JSON.stringify(sizes, null, 2) + "\n");

// Social preview (1200x630) from the hero screenshot.
const og = path.join(src, "podcasts-dark.png");
const ogFallback = path.join(src, "podcasts-cards.png");
const base = await sharp(og).metadata().then(() => og, () => ogFallback);
await sharp(base).resize({ width: 1200, height: 630, fit: "cover", position: "top" }).png({ compressionLevel: 9 }).toFile(path.join(root, "public", "og.png"));
console.log("og.png");
