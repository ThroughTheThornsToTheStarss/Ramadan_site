import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = {
    changeFrequency: "weekly" as const,
    priority: 1,
  };
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/ramadan`,
      lastModified: new Date(),
      ...base,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/lessons`,
      lastModified: new Date(),
      ...base,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/nikah`,
      lastModified: new Date(),
      ...base,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/podderzhka`,
      lastModified: new Date(),
      ...base,
      priority: 0.9,
    },
  ];
}
