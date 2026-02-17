import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Phone, Clock } from "lucide-react";

export function Contacts() {
  return (
    <section
      id="contacts"
      className="bg-[var(--bg-page-alt)] py-[var(--section-py)]"
      aria-labelledby="contacts-title"
    >
      <Container>
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-2">
              Связь
            </p>
            <h2
              id="contacts-title"
              className="font-heading heading-accent text-3xl md:text-4xl font-bold text-[var(--text-heading)] mb-3"
            >
              Контакты
            </h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-[var(--text-body)]">
              Мы всегда рады ответить на ваши вопросы и видеть вас в нашей мечети
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-card card-hover flex gap-4 items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-light)] text-primary">
                <MapPin className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <p className="font-bold text-[var(--text-heading)] mb-1">Адрес</p>
                <a
                  href="https://yandex.ru/maps/?pt=49.045228,55.826606&z=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] text-[15px] leading-relaxed hover:text-primary transition-colors"
                >
                  Окольная ул., 25Б, Казань
                </a>
              </div>
              </div>
              <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-card card-hover flex gap-4 items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-light)] text-primary">
                  <Phone className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>
              <div>
                <p className="font-bold text-[var(--text-heading)] mb-1">Телефон</p>
                <p className="text-[var(--text-muted)] text-[15px] leading-relaxed space-y-0.5">
                  <a href="tel:+78432600313" className="block hover:text-primary transition-colors">
                    +7 (843) 260-03-13
                  </a>
                  <a href="tel:+79375986503" className="block hover:text-primary transition-colors">
                    +7 (937) 598-65-03
                  </a>
                </p>
              </div>
              </div>
              <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-card card-hover flex gap-4 items-start">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-light)] text-primary">
                  <Clock className="h-6 w-6" strokeWidth={2} aria-hidden />
                </span>
              <div>
                <p className="font-bold text-[var(--text-heading)] mb-1">Время работы</p>
                <p className="text-[var(--text-muted)] text-[15px] leading-relaxed whitespace-pre-line">
                  Открыто ежедневно{"\n"}с 6:30 до 23:00
                </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-[var(--radius-card)] overflow-hidden shadow-card aspect-[4/3] lg:aspect-auto lg:min-h-[320px] bg-gray-100">
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
        </Reveal>
      </Container>
    </section>
  );
}
