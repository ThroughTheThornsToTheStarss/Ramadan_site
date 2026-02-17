import { Container } from "@/components/ui/Container";

type ScheduleItem = string | string[];

const SCHEDULE: { day: string; items: ScheduleItem[] }[] = [
  { day: "Понедельник", items: ["8:00–11:30 Тазкира устаз (2 год обучения)"] },
  { day: "Вторник", items: ["8:00–11:30 Тазкира устаз (3 год обучения)"] },
  {
    day: "Среда",
    items: [
      "18:00–19:30 Султан хазрат (1 год обучения (новенькие))",
      "18:00–19:30 Закир хазрат (1–2 год обучения)",
    ],
  },
  {
    day: "Четверг",
    items: [
      "8:00–11:30 Нурзия устаз (1 год обучения (новенькие))",
      "8:00–11:30 Тазкира устаз (продолжающая группа)",
      "9:00–12:00 Асия устаз (2 год обучения)",
    ],
  },
  { day: "Пятница", items: ["8:00–11:30 Сания устаз"] },
  {
    day: "Суббота",
    items: [
      "9:00–12:00 Исламия устаз (3 год обучения)",
      "10:00–12:00 Детские курсы — дети 5 лет (2 год обучения)",
      "14:00–16:30 Детские курсы — дети 5–13 лет (2 год обучения)",
      "17:00–19:00 Подростковая группа 13–17 лет (2 год обучения)",
    ],
  },
  {
    day: "Воскресенье",
    items: [
      "8:00–10:00 Вильдан хазрат (2 год обучения)",
      "8:00–10:00 Марат хазрат (3 год обучения)",
      "9:00–12:00 Раиса устаз (3 год обучения)",
      [
        "10:00–12:00 Детские группы (5–13 лет)",
        "13:00–15:30 Подростковая группа 13–17 лет",
      ],
      "16:30–18:00 Мастерская хазрата и МК студия",
      "16:00–18:00 Тахфиз — группа по заучиванию Корана",
    ],
  },
];

function parseLine(line: string): { time: string; text: string } {
  const timeMatch = line.match(/^[\d:–\-]+\s*/);
  const time = timeMatch ? timeMatch[0].trim() : "";
  const text = time ? line.slice(timeMatch![0].length).trim() : line;
  return { time, text };
}

function ScheduleText({ text }: { text: string }) {
  const i = text.indexOf(" (");
  if (i === -1) {
    return <span className="text-primary font-medium">{text}</span>;
  }
  const name = text.slice(0, i);
  const rest = text.slice(i);
  return (
    <span className="text-sm leading-snug text-[var(--text-muted)]">
      <span className="text-primary font-medium">{name}</span>
      {rest}
    </span>
  );
}

function ScheduleRow({ line }: { line: string }) {
  const { time, text } = parseLine(line);
  return (
    <div className="flex gap-4 py-2.5 border-b border-[var(--border-light)] last:border-0 items-baseline">
      <span className="w-24 shrink-0 text-sm font-semibold text-primary tabular-nums">
        {time}
      </span>
      <span className="min-w-0 flex-1 text-sm leading-snug">
        <ScheduleText text={text} />
      </span>
    </div>
  );
}

const MOTIVATION = {
  verse: {
    ru: "… и говори: «Господь мой, прибавь мне знания!»",
    sura: "Та ха",
    ayah: 114,
    ar: "وَقُلْ رَبِّ زِدْنِي عِلْمًا",
  },
  hadith: {
    ru: "Вступившему на какой-нибудь путь в поисках знания Аллах облегчит путь в рай.",
    source: "Муслим 2699",
    ar: "وَمَنْ سَلَكَ طَرِيقاً يَلْتَمِسُ فِيهِ عِلْماً ، سَهَّلَ اللَّهُ لَهُ طَرِيقاً إِلَى الجَنَّةِ",
  },
};

export function Lessons() {
  return (
    <section id="lessons" className="bg-[var(--bg-page-alt)] py-16 md:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-primary font-semibold text-sm uppercase tracking-widest mb-1">
            Образовательные программы
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-center mb-4">
            Расписание занятий 2025/26
          </h2>
          <p className="text-center text-[var(--text-muted)] text-sm md:text-base mb-14 max-w-xl mx-auto">
            Занятия для детей и взрослых в мечети Рамазан
          </p>

          {/* Мотивационный блок о знаниях */}
          <article className="mb-14 rounded-[var(--radius-card)] overflow-hidden bg-white border border-[var(--border-light)] shadow-[var(--shadow-card)]">
            <div className="px-6 py-6 md:px-8 md:py-8">
              <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-stretch">
                <div className="flex-1 space-y-6">
                  <div className="relative pl-5 border-l-4 border-primary">
                    <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider font-semibold mb-1">
                      Аллах Всевышний сказал
                    </p>
                    <p className="text-[var(--text-heading)] text-lg md:text-xl leading-relaxed">
                      «{MOTIVATION.verse.ru}»
                    </p>
                    <p className="text-sm text-[var(--text-muted-2)] mt-2">
                      («{MOTIVATION.verse.sura}», {MOTIVATION.verse.ayah})
                    </p>
                  </div>
                  <div className="relative pl-5 border-l-4 border-primary/70">
                    <p className="text-[var(--text-muted)] text-xs uppercase tracking-wider font-semibold mb-1">
                      Посланник Аллаха ﷺ сказал
                    </p>
                    <p className="text-[var(--text-heading)] text-lg md:text-xl leading-relaxed">
                      «{MOTIVATION.hadith.ru}»
                    </p>
                    <p className="text-sm text-[var(--text-muted-2)] mt-2">
                      ({MOTIVATION.hadith.source})
                    </p>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-[280px] lg:shrink-0 flex flex-col justify-center">
                  <div
                    className="rounded-xl border-2 p-5 md:p-6 text-right bg-[linear-gradient(135deg,var(--primary-light)_0%,var(--primary-light-2)_100%)] border-primary/20"
                    dir="rtl"
                    lang="ar"
                  >
                    <p className="text-[var(--text-heading)] text-xl md:text-2xl leading-loose font-[inherit] mb-4">
                      ﴿{MOTIVATION.verse.ar}﴾
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mb-2">
                      [طه: {MOTIVATION.verse.ayah}]
                    </p>
                    <p className="text-[var(--text-heading)] text-lg leading-loose font-[inherit]">
                      {MOTIVATION.hadith.ar}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] mt-2">
                      رواه مسلم
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center text-[var(--text-muted-2)] text-sm mt-6 pt-4 border-t border-[var(--border-light)]">
                Путь знания — путь к милости Аллаха. Мы приглашаем на занятия всех, кто желает учиться.
              </p>
            </div>
          </article>

          <h3 className="text-lg font-bold text-[var(--text-heading)] mb-6">
            По дням недели
          </h3>
          <div className="space-y-6">
            {SCHEDULE.map(({ day, items }) => (
              <article
                key={day}
                className="bg-white rounded-[var(--radius-card)] border border-[var(--border-light)] shadow-[var(--shadow-card-soft)] overflow-hidden"
              >
                <header className="flex items-center gap-3 px-5 py-3.5 border-b border-[var(--border-light)] bg-[var(--section-alt)]/80">
                  <span className="w-1 h-6 rounded-full bg-primary shrink-0" />
                  <h3 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-wide">
                    {day}
                  </h3>
                </header>
                <div className="px-5 py-1">
                  {items.map((item, i) =>
                    Array.isArray(item) ? (
                      <div
                        key={i}
                        className="py-2.5 border-b border-[var(--border-light)] last:border-0 space-y-2"
                      >
                        {item.map((line, j) => {
                          const { time, text } = parseLine(line);
                          return (
                            <div key={j} className="flex gap-4 items-baseline">
                              <span className="w-24 shrink-0 text-sm font-semibold text-primary tabular-nums">
                                {time}
                              </span>
                              <span className="min-w-0 flex-1 text-sm leading-snug">
                                <ScheduleText text={text} />
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <ScheduleRow key={i} line={item} />
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
