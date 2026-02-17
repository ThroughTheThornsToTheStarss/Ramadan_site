import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { StructuredData } from "./structured-data";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Мечеть Рамазан — Казань | Расписание намазов, уроки, никах",
    template: "%s | Мечеть Рамазан",
  },
  description:
    "Мечеть Рамазан в Казани: расписание намазов на сегодня и завтра, образовательные программы, никах, пожертвования. Окольная ул., 25Б. Открыто ежедневно с 6:30 до 23:00.",
  keywords: [
    "мечеть Рамазан",
    "мечеть Казань",
    "расписание намазов Казань",
    "намаз Казань",
    "никах Казань",
    "мечеть Татарстан",
    "ислам Казань",
  ],
  authors: [{ name: "Мечеть Рамазан", url: SITE_URL }],
  creator: "Мечеть Рамазан",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Мечеть Рамазан",
    title: "Мечеть Рамазан — Казань | Расписание намазов, уроки, никах",
    description:
      "Мечеть Рамазан в Казани: расписание намазов, уроки, никах, контакты. Окольная ул., 25Б.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Мечеть Рамазан — Казань" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Мечеть Рамазан — Казань",
    description: "Мечеть Рамазан в Казани. Расписание намазов, уроки, никах, контакты.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "religion",
  other: {
    "geo.region": "RU-TA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2a9d8f" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${sourceSerif.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen font-sans antialiased bg-[var(--bg-page)] text-[var(--text-dark)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Перейти к содержанию
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
