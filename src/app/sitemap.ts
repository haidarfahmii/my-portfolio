import { MetadataRoute } from "next";

const siteUrl = "https://haidarfahmi.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  // Hanya ada satu halaman utama
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly", // Seberapa sering konten berubah
      priority: 1,
    },
  ];

  return routes;
}
