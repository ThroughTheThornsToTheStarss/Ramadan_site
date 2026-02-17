import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Clock } from "lucide-react";

const CONTACTS = [
  {
    icon: MapPin,
    title: "Адрес",
    value: "Окольная ул., 25Б, Казань",
  },
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (843) 260-03-13",
  },
  {
    icon: Clock,
    title: "Время работы",
    value: "Открыто ежедневно\nс 6:30 до 23:00",
  },
];

export function Contacts() {
  return (
    <section id="contacts" className="bg-[var(--bg-page-alt)] py-[var(--section-py)]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)] text-center mb-3">
          Контакты
        </h2>
        <p className="text-[var(--text-muted)] text-center mb-12 max-w-2xl mx-auto">
          Мы всегда рады ответить на ваши вопросы и видеть вас в нашей мечети
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2 flex flex-col gap-5">
            {CONTACTS.map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className="rounded-xl bg-white p-6 shadow-[var(--shadow-card)] flex gap-4 items-start"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--primary-light)] text-primary">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <div>
                  <p className="font-bold text-[var(--text-heading)] mb-1">
                    {title}
                  </p>
                  <p className="text-[var(--text-muted)] text-[15px] leading-relaxed whitespace-pre-line">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-[var(--shadow-card)] aspect-[4/3] lg:aspect-auto lg:min-h-[320px] bg-gray-100">
            <iframe
              title="Мечеть Рамазан на карте — Окольная ул., 25Б, Казань"
              src="https://yandex.ru/map-widget/v1/?ll=49.045228%2C55.826606&z=16&l=map&pt=49.045228,55.826606"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[280px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
