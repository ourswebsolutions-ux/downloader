import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { product } from "@/content/product";

export const dynamic = "force-static";

const routes = ["", "features/", "pricing/", "download/", "installation/", "guide/", "docs/", "faq/", "support/", "changelog/", "terms-of-use/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${siteUrl}/${r}`,
    lastModified: product.releaseDate,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r === "pricing/" || r === "download/" ? 0.9 : 0.7,
  }));
}
