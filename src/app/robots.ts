import { MetadataRoute } from "next";

const siteUrl = "https://haidarfahmi.vercel.app/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Jangan rayapi folder API
    },
    // Tautkan ke sitemap Anda
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
