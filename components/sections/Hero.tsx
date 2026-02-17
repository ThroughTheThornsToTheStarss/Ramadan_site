import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

const HERO_IMAGE =
  "/assets/c__Users_ilsha_AppData_Roaming_Cursor_User_workspaceStorage_5ff879856bb366bc0f346ea1a7008ccc_images_image-9c0e8fee-cf36-4955-9ac1-eaf6af23aaaf.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center -mt-16 md:-mt-[72px] pt-16 md:pt-[72px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Мечеть Рамазан: вид сверху на комплекс с зелёными крышами и минаретом"
          fill
          className="object-cover"
          style={{ objectPosition: "right 1%" }}
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/25"
          aria-hidden
        />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-tight mb-4 md:mb-6">
            Мечеть Рамазан
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Место духовного единства и познания
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href="#prayer" variant="primary">
              Расписание намазов
            </LinkButton>
            <LinkButton href="#about" variant="secondary">
              Узнать больше
            </LinkButton>
          </div>
        </Container>
      </div>
    </section>
  );
}
