"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Sun, Cloud, Moon } from "lucide-react";

const PRAYER_KEYS = [
  { key: "fajr", name: "Фаджр", icon: Sun },
  { key: "dhuhr", name: "Зухр", icon: Sun },
  { key: "asr", name: "Аср", icon: Cloud },
  { key: "maghrib", name: "Магриб", icon: Moon },
  { key: "isha", name: "Иша", icon: Moon },
] as const;

const DEFAULT_TIMES: Record<string, string> = {
  fajr: "05:30",
  dhuhr: "13:15",
  asr: "16:45",
  maghrib: "19:20",
  isha: "21:00",
};

function formatDateForKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

type DaySchedule = Record<string, string>;

export function PrayerSchedule() {
  const [isToday, setIsToday] = useState(true);
  const [schedule, setSchedule] = useState<Record<string, DaySchedule> | null>(null);

  useEffect(() => {
    fetch("/data/prayer-times.json")
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data && typeof data.schedule === "object") setSchedule(data.schedule);
      })
      .catch(() => setSchedule(null));
  }, []);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const dateKey = isToday ? formatDateForKey(today) : formatDateForKey(tomorrow);
  const dayTimes = schedule?.[dateKey] ?? null;

  const prayers = PRAYER_KEYS.map(({ key, name, icon }) => ({
    name,
    time: dayTimes?.[key] ?? DEFAULT_TIMES[key] ?? "--:--",
    icon,
  }));

  return (
    <section id="prayer" className="bg-[var(--section-alt)] py-[var(--section-py)]" aria-labelledby="prayer-title">
      <Container>
        <h2 id="prayer-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-heading)] text-center mb-3">
          Расписание намазов
        </h2>
        <p className="text-lg md:text-xl text-[var(--text-muted)] text-center mb-8">
          Актуальное время намазов на сегодня и завтра
        </p>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-[var(--border-light)] shadow-sm" role="group" aria-label="Выбор дня">
            <button
              type="button"
              onClick={() => setIsToday(true)}
              aria-pressed={isToday}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isToday
                  ? "bg-primary text-white"
                  : "text-[var(--text-muted)] hover:bg-white/80"
              }`}
            >
              Сегодня
            </button>
            <button
              type="button"
              onClick={() => setIsToday(false)}
              aria-pressed={!isToday}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                !isToday
                  ? "bg-primary text-white"
                  : "text-[var(--text-muted)] hover:bg-white/80"
              }`}
            >
              Завтра
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-12">
          {prayers.map(({ name, time, icon: Icon }) => (
            <div
              key={name}
              className="rounded-xl bg-white border border-[var(--border-light)] p-6 shadow-[var(--shadow-card)] flex flex-col items-center text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-light)] text-primary mb-4" aria-hidden>
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <p className="text-[var(--text-dark)] text-lg font-normal mb-1">
                {name}
              </p>
              <p className="text-primary text-2xl font-bold tabular-nums">{time}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-amber-200 bg-[var(--info-bg)] p-5 flex gap-4 items-start max-w-3xl mx-auto">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--info-icon-bg)] text-[var(--text-heading)]"
            aria-hidden
          >
            <span className="text-lg font-bold">i</span>
          </span>
          <div>
            <p className="font-bold text-[var(--text-muted)] text-lg mb-1">
              Важная информация
            </p>
            <p className="text-[var(--text-muted-2)] text-base">
              Намаз читают через 5–10 минут после захода намаза
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
