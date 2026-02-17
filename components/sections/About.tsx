import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const ABOUT_IMAGE =
  "/assets/c__Users_ilsha_AppData_Roaming_Cursor_User_workspaceStorage_5ff879856bb366bc0f346ea1a7008ccc_images_image-1eb23592-4f50-4df4-86cd-8acbacf249de.png";

export function About() {
  return (
    <section
      id="about"
      className="bg-white min-h-screen flex flex-col justify-center py-[var(--section-py)]"
      aria-labelledby="about-title"
    >
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative pl-6 border-l-4 border-primary">
              <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                О нас
              </p>
              <h2
                id="about-title"
                className="font-heading heading-accent text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-heading)] mb-8 leading-tight"
              >
                О нашей мечети
              </h2>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-[var(--leading-relaxed)] mb-5">
              Наша мечеть является центром духовной жизни мусульманской общины,
              где каждый может найти покой, знания и поддержку. Мы стремимся
              создать атмосферу единства и взаимопонимания.
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-[var(--leading-relaxed)]">
              Здесь проводятся ежедневные намазы, религиозные уроки, лекции и
              мероприятия для всех возрастов. Мы открыты для всех, кто ищет
              духовного развития и познания исламских ценностей.
            </p>
          </div>
          <div className="relative shrink-0">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] lg:h-[480px] rounded-[var(--radius-card)] overflow-hidden shadow-card card-hover">
              <Image
                src={ABOUT_IMAGE}
                alt="Минарет мечети Рамазан с бирюзовыми куполами и хвойное дерево на фоне голубого неба, Казань"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
