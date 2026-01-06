import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://syamdevportfolio.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
  ];
}
