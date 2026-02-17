"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo, LogoDark } from "@/components/ui/Logo";

const NAV_LINKS = [
  { href: "#about", label: "О мечети" },
  { href: "#prayer", label: "Расписание намазов" },
  { href: "#lessons", label: "Уроки" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isLight
          ? "bg-white border-b border-[var(--border-light)]"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 md:h-[72px] items-center justify-between gap-4">
        <div className="flex-shrink-0">{isLight ? <LogoDark /> : <Logo />}</div>

        <nav
          className="hidden md:flex items-center gap-8 flex-shrink-0"
          aria-label="Основное меню"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base font-normal no-underline transition-colors hover:opacity-90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded ${
                isLight ? "text-[var(--text-dark)]" : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span
            className={`block w-6 h-0.5 rounded-full transition-colors ${
              isLight ? "bg-[var(--text-dark)]" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 rounded-full transition-colors ${
              isLight ? "bg-[var(--text-dark)]" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 rounded-full transition-colors ${
              isLight ? "bg-[var(--text-dark)]" : "bg-white"
            }`}
          />
        </button>
      </Container>

      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[var(--border-light)] shadow-lg"
          role="dialog"
          aria-label="Мобильное меню"
        >
          <nav className="mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)] flex flex-col py-4 gap-2" aria-label="Мобильное меню">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="py-3 px-4 text-[var(--text-dark)] font-normal no-underline rounded hover:bg-black/5"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
