import { MetadataRoute } from "next";

const siteUrl =
  "https://my-portfolio-c1e6vcai0-haidarfahmiis-projects.vercel.app/";

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
