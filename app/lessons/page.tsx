import type { Metadata } from "next";
import { Lessons } from "@/components/sections/Lessons";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export const metadata: Metadata = {
  title: "Образовательные программы — расписание занятий",
  description:
    "Расписание занятий мечети Рамазан в Казани. Уроки для детей и взрослых, курсы по исламу.",
  alternates: { canonical: `${SITE_URL}/lessons` },
  openGraph: {
    title: "Образовательные программы | Мечеть Рамазан",
    description: "Расписание занятий. Мечеть Рамазан, Казань.",
    url: `${SITE_URL}/lessons`,
  },
};

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Lessons />
    </div>
  );
}

