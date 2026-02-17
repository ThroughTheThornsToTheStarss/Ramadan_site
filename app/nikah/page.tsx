import type { Metadata } from "next";
import { Nikah as NikahSection } from "@/components/sections/Nikah";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export const metadata: Metadata = {
  title: "Никах, акика, курбан ашы в мечети Рамазан",
  description:
    "Никах, исем кушу, акика, корьән ашы, курбан ашы в мечети Рамазан. Казань. Контакты и запись.",
  alternates: { canonical: `${SITE_URL}/nikah` },
  openGraph: {
    title: "Никах | Мечеть Рамазан",
    description: "Никах, акика в мечети Рамазан. Казань.",
    url: `${SITE_URL}/nikah`,
  },
};

export default function NikahPage() {
  return (
    <div className="min-h-screen bg-white">
      <NikahSection />
    </div>
  );
}
