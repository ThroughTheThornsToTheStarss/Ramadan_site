import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MapPin, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/#about", label: "О мечети" },
  { href: "/#prayer", label: "Расписание намазов" },
  { href: "/ramadan", label: "Рамадан" },
  { href: "/lessons", label: "Образовательные программы" },
  { href: "/nikah", label: "Никах" },
  { href: "/podderzhka", label: "Поддержка" },
  { href: "/#contacts", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white" role="contentinfo">
      <div className="border-t border-white/10">
        <Container className="py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            <div className="md:col-span-5">
              <Logo />
              <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xs">
                Место духовного единства и познания. Казань.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="https://yandex.ru/maps/?pt=49.045228,55.826606&z=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Окольная ул., 25Б, Казань
                </a>
                <a
                  href="tel:+78432600313"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  +7 (843) 260-03-13
                </a>
                <a
                  href="tel:+79375986503"
                  className="flex items-center gap-2 text-white/80 text-sm hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  +7 (927) 249-47-52
                </a>
              </div>
            </div>

            <nav
              className="md:col-span-4 md:col-start-8 flex flex-wrap gap-x-8 gap-y-2 md:justify-end md:flex-col"
              aria-label="Навигация"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white/80 text-sm hover:text-white transition-colors py-1"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="py-5">
          <p className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Мечеть Рамазан. Казань.
          </p>
        </Container>
      </div>
    </footer>
  );
}
