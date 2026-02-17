import type { Metadata } from "next";
import { Ramadan as RamadanSection } from "@/components/sections/Ramadan";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export const metadata: Metadata = {
  title: "Рамадан — дуа сухура и ифтара",
  description:
    "Молитвы во время сухура и ифтара. Дуа после сухура и при разговении. Мечеть Рамазан, Казань.",
  alternates: { canonical: `${SITE_URL}/ramadan` },
  openGraph: {
    title: "Рамадан | Мечеть Рамазан",
    description: "Дуа сухура и ифтара. Мечеть Рамазан, Казань.",
    url: `${SITE_URL}/ramadan`,
  },
};

export default function RamadanPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page-alt)]">
      <RamadanSection />
    </div>
  );
}


