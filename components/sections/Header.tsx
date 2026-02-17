"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo, LogoDark } from "@/components/ui/Logo";

const NAV_LINKS = [
  { href: "/ramadan", label: "Рамадан" },
  { href: "/lessons", label: "Образовательные программы" },
  { href: "/nikah", label: "Никах" },
  { href: "/podderzhka", label: "Поддержка" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasHash, setHasHash] = useState(false);

  useEffect(() => {
    const updateHash = () => setHasHash(!!window.location.hash);
    updateHash();
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", updateHash);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const isHome = pathname === "/";
  const isLight = scrolled || !isHome || hasHash;

  const linkClass = (href: string) => {
    const isPageLink = href.startsWith("/") && href.length > 1 && !href.includes("#");
    const isActive = isPageLink && pathname === href;
    const base =
      "text-base font-normal no-underline transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded";
    const light = isLight ? "text-[var(--text-dark)]" : "text-white";
    const active = isActive ? "font-semibold text-primary" : "hover:opacity-90";
    return `${base} ${light} ${active}`;
  };

  const navContent = (
    <>
      <div className="flex-shrink-0">
        {isLight ? <LogoDark /> : <Logo />}
      </div>
      <nav
        className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0"
        aria-label="Основное меню"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={linkClass(href)}>
            {label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className="lg:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary"
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
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--border-light)]"
          : "pt-2 px-4 md:px-6"
      }`}
    >
      {isLight ? (
        <Container className="flex h-16 md:h-[72px] items-center justify-between gap-4">
          {navContent}
        </Container>
      ) : (
        <div className="mx-auto max-w-7xl rounded-full bg-black/25 backdrop-blur-xl border border-white/20 flex h-14 md:h-16 items-center justify-between gap-4 px-5 md:px-8 py-2 shadow-lg shadow-black/10">
          {navContent}
        </div>
      )}

      {mobileOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[var(--border-light)] shadow-lg max-h-[80vh] overflow-y-auto"
          role="dialog"
          aria-label="Мобильное меню"
        >
          <nav
            className="mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)] flex flex-col py-4 gap-1"
            aria-label="Мобильное меню"
          >
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
