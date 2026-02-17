import { Container } from "@/components/ui/Container";
import { Phone } from "lucide-react";

const VK_NIKAH_URL = "https://vk.com/nikah_kazan?w=club154918106";
const PHONE = "+7 (937) 598-65-03";

export function Nikah() {
  return (
    <section id="nikah" className="bg-white py-[var(--section-py)]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)] mb-4">
            Никах
          </h2>
          <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-[var(--leading-relaxed)] mb-6">
            Приглашаем вас в мечеть Рамазан для проведения никаха, исем кушу,
            акика, корьән ашы, курбан ашы.
          </p>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:underline mb-6"
          >
            <Phone className="h-5 w-5 shrink-0" strokeWidth={2} />
            {PHONE}
          </a>
          <p className="text-sm text-[var(--text-muted-2)] mb-6">
            Группа ВКонтакте:{" "}
            <span className="font-medium text-[var(--text-dark)]">nikah_kazan</span>
          </p>
          <a
            href={VK_NIKAH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[var(--radius-button)] font-semibold transition-colors bg-primary text-white hover:bg-[var(--primary-hover)] px-6 py-3 text-base focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Подробнее
          </a>
        </div>
      </Container>
    </section>
  );
}

