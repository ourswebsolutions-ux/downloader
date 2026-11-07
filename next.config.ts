import type { NextConfig } from "next";

// Static export: `npm run build` writes a self-contained site to `out/`
// that any static host (Nginx, Apache, Netlify, Vercel, S3, cPanel) can serve.
// Screenshots are pre-optimised to WebP by `npm run images`, so the
// Next.js image server is not needed.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
