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
    <span className="text-sm leading-snug text-gray-600">
      <span className="text-primary font-medium">{name}</span>
      {rest}
    </span>
  );
}

function ScheduleRow({ line }: { line: string }) {
  const { time, text } = parseLine(line);
  return (
    <div className="flex gap-4 py-2.5 border-b border-gray-100 last:border-0 items-baseline">
      <span className="w-24 shrink-0 text-sm font-semibold text-primary tabular-nums">
        {time}
      </span>
      <span className="min-w-0 flex-1 text-sm leading-snug">
        <ScheduleText text={text} />
      </span>
    </div>
  );
}

export function Lessons() {
  return (
    <section id="lessons" className="bg-gray-50 py-16 md:py-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-primary font-semibold text-sm uppercase tracking-widest mb-1">
            Образовательные программы
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Расписание занятий 2025/26
          </h2>

          <div className="space-y-6">
            {SCHEDULE.map(({ day, items }) => (
              <article
                key={day}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <header className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 bg-gray-50/80">
                  <span className="w-1 h-6 rounded-full bg-primary shrink-0" />
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    {day}
                  </h3>
                </header>
                <div className="px-5 py-1">
                  {items.map((item, i) =>
                    Array.isArray(item) ? (
                      <div
                        key={i}
                        className="py-2.5 border-b border-gray-100 last:border-0 space-y-2"
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
