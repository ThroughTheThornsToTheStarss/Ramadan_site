const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramazan-kazan.ru";

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "PlaceOfWorship",
    "@id": `${SITE_URL}/#organization`,
    name: "Мечеть Рамазан",
    alternateName: "Мечеть Рамазан Казань",
    description:
      "Мечеть Рамазан в Казани — место духовного единства и познания. Ежедневные намазы, уроки, никах, пожертвования.",
    url: SITE_URL,
    telephone: ["+7 (843) 260-03-13", "+7 927 249 4752"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Окольная ул., 25Б",
      addressLocality: "Казань",
      addressRegion: "Республика Татарстан",
      addressCountry: "RU",
      postalCode: "420033",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.826606,
      longitude: 49.045228,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:30",
      closes: "23:00",
    },
    sameAs: [
      "https://vk.com/nikah_kazan",
      "https://mechet-ramazan.ru/",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Мечеть Рамазан — Казань",
    description: "Официальный сайт мечети Рамазан. Расписание намазов, уроки, никах, контакты.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "ru-RU",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([localBusiness, website]),
      }}
    />
  );
}



