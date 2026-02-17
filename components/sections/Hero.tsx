import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

const HERO_IMAGE =
  "/assets/c__Users_ilsha_AppData_Roaming_Cursor_User_workspaceStorage_5ff879856bb366bc0f346ea1a7008ccc_images_image-9c0e8fee-cf36-4955-9ac1-eaf6af23aaaf.png";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center -mt-16 md:-mt-[72px] pt-16 md:pt-[72px]"
      aria-label="Главный экран"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Мечеть Рамазан: вид на комплекс с зелёными крышами и минаретом, Казань"
          fill
          className="object-cover transition-smooth"
          style={{ objectPosition: "right 1%" }}
          priority
          sizes="100vw"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/40 animate-overlay-pulse"
          aria-hidden
        />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <Container className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.1] mb-4 md:mb-6 drop-shadow-sm">
            Мечеть Рамазан
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed drop-shadow-sm">
            Место духовного единства и познания
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href="#prayer" variant="primary" className="btn-hover shadow-lg hover:shadow-xl">
              Расписание намазов
            </LinkButton>
            <LinkButton href="#about" variant="secondary" className="btn-hover">
              Узнать больше
            </LinkButton>
          </div>
        </Container>
      </div>
    </section>
  );
}
