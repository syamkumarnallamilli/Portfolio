import { MetadataRoute } from "next";

const baseUrl = "https://syamdevportfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/project`,
      
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}