import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Мечеть Рамазан — Место духовного единства и познания",
    template: "%s | Мечеть Рамазан",
  },
  description:
    "Мечеть Рамазан в Казани. Расписание намазов, уроки и занятия, контакты. Окольная ул., 25Б.",
  keywords: ["мечеть Рамазан", "Казань", "расписание намазов", "мечеть", "ислам"],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Мечеть Рамазан",
    title: "Мечеть Рамазан — Место духовного единства и познания",
    description: "Мечеть Рамазан в Казани. Расписание намазов, уроки, занятия. Окольная ул., 25Б.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Мечеть Рамазан — Казань",
    description: "Мечеть Рамазан в Казани. Расписание намазов, уроки, занятия.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a9d8f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:w-auto focus:h-auto focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          Перейти к содержанию
        </a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
