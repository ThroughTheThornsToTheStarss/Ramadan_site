"use client";

import { useState, useCallback, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  UtensilsCrossed,
  Landmark,
  Building2,
  Quote,
} from "lucide-react";

const DONATE_URL = "https://mechet-ramazan.ru/";

const PROJECTS = [
  {
    id: "iftar",
    title: "Ифтар",
    description:
      "Поддержка организации ифтаров в мечети Рамазан в священный месяц.",
    icon: UtensilsCrossed,
  },
  {
    id: "madrasa",
    title: "Строительство медресе",
    description:
      "Строительство медресе при мечети Рамазан — вклад в образование и будущее общины.",
    icon: Landmark,
  },
  {
    id: "monthly",
    title: "Сбор на обслуживание мечети",
    description:
      "Ежемесячные расходы на содержание мечети: коммунальные услуги, ФОТ, клининг. Цель на месяц — 648 000 ₽.",
    icon: Building2,
  },
];

export function Donations() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = PROJECTS.length;

  const goNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((i) => (i + 1) % total);
    setTimeout(() => setIsTransitioning(false), 350);
  }, [total, isTransitioning]);

  const goPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((i) => (i - 1 + total) % total);
    setTimeout(() => setIsTransitioning(false), 350);
  }, [total, isTransitioning]);

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  return (
    <section
      id="donations"
      className="relative min-h-screen py-24 md:py-32 overflow-hidden"
    >
      {/* Layered background — depth and warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
            linear-gradient(165deg, #f0f9f8 0%, #f8fafb 35%, #ffffff 70%),
            radial-gradient(ellipse 120% 80% at 90% 10%, rgba(42, 157, 143, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 100% 60% at 10% 90%, rgba(42, 157, 143, 0.06) 0%, transparent 45%)
          `,
        }}
      />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z' fill='none' stroke='%232a9d8f' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Decorative shape — soft blur */}
      <div
        className="absolute top-0 right-0 w-[min(80vw,600px)] h-[min(60vw,500px)] pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(circle, rgba(42, 157, 143, 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[min(70vw,500px)] h-[min(50vw,400px)] pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(circle, rgba(42, 157, 143, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <Container className="relative">
        {/* Intro block — card feel with accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24">
          <div className="lg:col-span-7">
            <div className="relative pl-6 border-l-4 border-primary">
              <p className="text-primary font-semibold text-xs uppercase tracking-[0.25em] mb-4">
                Поддержка
              </p>
              <h1 className="font-heading heading-accent text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[var(--text-heading)] tracking-tight leading-[1.12] mb-6">
                Поддержка и пожертвования
              </h1>
              <p className="text-[var(--text-muted)] text-[var(--text-body)] leading-[1.75] max-w-xl">
                Для стабильной работы мечети «Рамазан» и поддержки проектов нужна
                ваша помощь. Ваш вклад — садака джария: награда записывается и после
                вашей смерти.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center">
            <blockquote className="relative rounded-2xl bg-white/90 backdrop-blur-sm border border-[var(--border-light)] p-7 md:p-9 shadow-[0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)]">
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--primary-hover))" }}
                aria-hidden
              />
              <Quote
                className="absolute top-6 right-6 w-10 h-10 text-primary/15"
                strokeWidth={1.25}
                aria-hidden
              />
              <p className="text-[var(--text-heading)] text-[1.0625rem] leading-relaxed relative z-10">
                «Защитите себя от огня Ада пожертвованием хотя бы половинки финика»
              </p>
              <cite className="not-italic block mt-5 text-sm text-[var(--text-muted)] font-medium">
                — аль-Бухари
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Projects — elevated panel */}
        <Reveal>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-5 mb-10">
            <span
              className="h-0.5 flex-1 max-w-[80px] rounded-full"
              style={{ background: "linear-gradient(90deg, var(--primary), transparent)" }}
              aria-hidden
            />
            <h2 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-[0.2em]">
              Наши проекты
            </h2>
            <span
              className="h-0.5 flex-1 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, var(--border-light))" }}
              aria-hidden
            />
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm border border-[var(--border-light)] shadow-[0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)] min-h-[280px] sm:min-h-[260px]">
              {PROJECTS.map((project, i) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="absolute inset-0 transition-opacity duration-500 ease-out"
                    style={{
                      opacity: i === index ? 1 : 0,
                      pointerEvents: i === index ? "auto" : "none",
                    }}
                    aria-hidden={i !== index}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6 px-8 pt-10 pb-12 md:px-12 md:pt-12 md:pb-14 relative z-0">
                      <div
                        className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-primary shadow-[0 2px 8px rgba(42, 157, 143, 0.15)]"
                        style={{
                          background: "linear-gradient(135deg, var(--primary-light) 0%, var(--primary-light-2) 100%)",
                        }}
                        aria-hidden
                      >
                        <Icon className="w-8 h-8" strokeWidth={1.6} />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-heading)] mb-2">
                          {project.title}
                        </h3>
                        <p className="text-[var(--text-muted)] text-[var(--text-body)] leading-relaxed mb-5 flex-1">
                          {project.description}
                        </p>
                        <a
                          href={DONATE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-[gap] focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md py-2 -mb-1"
                        >
                          Подробнее на mechet-ramazan.ru
                          <ArrowUpRight className="w-4 h-4 shrink-0" strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-[var(--border-light)] flex items-center justify-center text-[var(--text-muted)] hover:text-primary hover:border-primary/50 hover:shadow-xl transition-all focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Предыдущий проект"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-[var(--border-light)] flex items-center justify-center text-[var(--text-muted)] hover:text-primary hover:border-primary/50 hover:shadow-xl transition-all focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Следующий проект"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={2} />
                </button>

                <div className="flex justify-center gap-2.5 mt-10">
                  {PROJECTS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      className="h-1.5 rounded-full transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      style={{
                        width: i === index ? 24 : 6,
                        backgroundColor:
                          i === index ? "var(--primary)" : "var(--border-light)",
                      }}
                      aria-label={`Проект ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}


