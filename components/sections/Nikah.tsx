import { Container } from "@/components/ui/Container";
import { Phone } from "lucide-react";

const VK_NIKAH_URL = "https://vk.com/nikah_kazan?w=club154918106";
const PHONE = "+7 927-249-47-52";

const VERSES = [
  {
    sura: "Ан-Наба (Вести)",
    suraNum: 78,
    ayah: 8,
    total: 40,
    ru: "И создали Мы вас парами.",
    ar: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
  },
  {
    sura: "Ар-Рум (Римляне)",
    suraNum: 30,
    ayah: 21,
    total: 60,
    ru: "И из знамений Его — что Он создал для вас из вас самих жён, чтобы вы находили в них успокоение, и установил между вами любовь и милосердие. Поистине, в этом — знамения для людей размышляющих.",
    ar: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
  },
];

export function Nikah() {
  return (
    <section id="nikah" className="bg-white py-[var(--section-py)]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--text-heading)] text-center mb-4">
            Никах
          </h2>
          <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-[var(--leading-relaxed)] text-center mb-10">
            Приглашаем вас в мечеть Рамазан для проведения никаха, исем кушу,
            акика, корьән ашы, курбан ашы.
          </p>

          {/* Аяты о браке и парах */}
          <article className="rounded-[var(--radius-card)] border border-[var(--border-light)] shadow-[var(--shadow-card-soft)] overflow-hidden bg-[var(--bg-page-alt)]/50 mb-10">
            <div className="px-6 py-6 md:px-8 md:py-8">
              <p className="text-primary font-semibold text-xs uppercase tracking-wider text-center mb-6">
                Аллах Всевышний сказал
              </p>
              <div className="space-y-6">
                {VERSES.map((v) => (
                  <div
                    key={`${v.sura}-${v.ayah}`}
                    className="flex flex-col sm:flex-row sm:gap-6 sm:items-start"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-[var(--text-heading)] text-base md:text-lg leading-relaxed">
                        «{v.ru}»
                      </p>
                      <p className="text-sm text-[var(--text-muted-2)] mt-2">
                        {v.sura}, {v.ayah}-й аят из {v.total}
                      </p>
                    </div>
                    <div
                      className="mt-4 sm:mt-0 sm:w-64 sm:shrink-0 rounded-xl border border-primary/20 bg-[linear-gradient(135deg,var(--primary-light)_0%,var(--primary-light-2)_100%)] p-4 text-right"
                      dir="rtl"
                      lang="ar"
                    >
                      <p className="text-[var(--text-heading)] text-lg leading-loose font-[inherit]">
                        ﴿{v.ar}﴾
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-2">
                        [{v.suraNum}: {v.ayah}]
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="max-w-2xl mx-auto text-center">
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
        </div>
      </Container>
    </section>
  );
}



