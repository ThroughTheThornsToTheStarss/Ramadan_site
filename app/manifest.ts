import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Мечеть Рамазан — Казань",
    short_name: "Мечеть Рамазан",
    description: "Мечеть Рамазан в Казани. Расписание намазов, уроки, никах, контакты.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2a9d8f",
    lang: "ru",
    scope: SITE_URL,
  };
}



