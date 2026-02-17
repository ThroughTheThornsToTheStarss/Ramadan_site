import type { Metadata } from "next";
import { Donations } from "@/components/sections/Donations";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export const metadata: Metadata = {
  title: "Поддержка и пожертвования — помочь мечети",
  description:
    "Помочь мечети Рамазан: сбор на обслуживание, ифтар, строительство медресе. Садака джария. Казань.",
  alternates: { canonical: `${SITE_URL}/podderzhka` },
  openGraph: {
    title: "Поддержка и пожертвования | Мечеть Рамазан",
    description: "Помочь мечети Рамазан. Садака джария. Казань.",
    url: `${SITE_URL}/podderzhka`,
  },
};

export default function PodderzhkaPage() {
  return (
    <div className="min-h-screen">
      <Donations />
    </div>
  );
}
