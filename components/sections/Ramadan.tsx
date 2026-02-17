import { Container } from "@/components/ui/Container";

const DUAS = [
  {
    id: "suhoor",
    title: "Сәхәр ашаганнан соң уразага ниятләү догасы:",
    subtitle: "Дуа, которое нужно читать после сухура (утреннего принятия пищи)",
    arabic:
      "نَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرِ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ خَالِصًا لِلَّهِ تَعَالَى",
    transliteration:
      "Нәүәйтү ән әсуумә саумә шәһра рамәдаанә минәл фәҗри иләл-мәгъриби хаалисан лилләһи Тәгалә",
    translationTatar:
      "Аллаһ Тәгалә ризалыгы өчен ихласлык белән, таң вакытыннан башлап, кояш батканчыга кадәр, Рамазан ае уразасын тотарга ният кылдым",
    translationRu:
      "Я намереваюсь держать пост месяца рамадан от рассвета до заката искренне ради Аллаха.",
  },
  {
    id: "iftar",
    title: "Ураза тотып авыз ачкач укыла торган дога:",
    subtitle: "Дуа, которое нужно читать во время ифтара",
    arabic:
      "اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ فَاغْفِرْ لِي يَا غَفَّارُ مَا قَدَّمْتُ وَمَا أَخَّرْتُ",
    transliteration:
      "Әллаһүммә ләкә сумтү үә бикә әәмәңтү үә гәләйкә тәүәккәлтү үә гэләә ризкыйкә әфтартү фәгъфирлии йәә гаффаарү мә каддәмтү үә мәә әххартү",
    translationTatar:
      "Аллаһым, шушы уразамны Синең өчен тоттым һәм Сиңа гына иман китердем һәм Сиңа тәвәккәл иттем. Синең ризыгың белән авыз ачам. Әй, гөнаһларны гафу итүче Аллаһым, минем әүвәлге гөнаһларымны да, соңгы гөнаһларымны да ярлыка",
    translationRu:
      "О Аллах, ради Тебя я постился, в Тебя уверовал, на Тебя положился, Твоей пищей разговелся. О, Прощающий, прости мне грехи, что я совершил или совершу.",
  },
];

export function Ramadan() {
  return (
    <section id="ramadan" className="bg-[var(--bg-page-alt)] py-[var(--section-py)]">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)] text-center mb-3">
          Рамадан
        </h2>
        <p className="text-[var(--text-muted)] text-center mb-12 max-w-2xl mx-auto">
          Молитвы, читаемые во время сухура и ифтара
        </p>

        <div className="max-w-3xl mx-auto space-y-10">
          {DUAS.map((dua) => (
            <article
              key={dua.id}
              className="bg-white rounded-[var(--radius-card)] border border-[var(--border-light)] shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-lg font-bold text-primary">
                  {dua.title}
                </h3>
                <p className="text-sm text-[var(--text-muted-2)]">
                  {dua.subtitle}
                </p>
                <div
                  className="text-2xl md:text-3xl leading-loose text-[var(--text-heading)] text-right font-[inherit]"
                  dir="rtl"
                  lang="ar"
                >
                  {dua.arabic}
                </div>
                <div className="space-y-2 pt-2 border-t border-[var(--border-light)]">
                  <p className="text-sm text-[var(--text-muted)]">
                    <span className="font-medium text-[var(--text-dark)]">
                      Транслитерация:
                    </span>{" "}
                    {dua.transliteration}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    <span className="font-medium text-[var(--text-dark)]">
                      Перевод (тат.):
                    </span>{" "}
                    «{dua.translationTatar}»
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    <span className="font-medium text-[var(--text-dark)]">
                      Перевод:
                    </span>{" "}
                    «{dua.translationRu}»
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

