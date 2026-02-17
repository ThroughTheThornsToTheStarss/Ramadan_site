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

        {/* Даты и информация о Рамадане 2026 */}
        <div className="max-w-3xl mx-auto mt-16 space-y-10">
          <article className="bg-white rounded-[var(--radius-card)] border border-[var(--border-light)] shadow-[var(--shadow-card)] p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold text-[var(--text-heading)] mb-4">
              Рамадан 2026
            </h3>
            <ul className="space-y-2 text-[var(--text-body)] text-[var(--text-muted)]">
              <li>Месяц Рамадан начинается после захода солнца <strong className="text-[var(--text-heading)]">18 февраля 2026 года</strong>. Первый день поста — <strong className="text-[var(--text-heading)]">19 февраля 2026 года</strong>.</li>
              <li>В этом году продолжительность Рамадана составляет <strong className="text-[var(--text-heading)]">29 дней</strong>.</li>
              <li>Первый таравих-намаз будет прочитан <strong className="text-[var(--text-heading)]">18 февраля 2026 года</strong> после ночного намаза Иша.</li>
            </ul>
          </article>

          <article className="bg-white rounded-[var(--radius-card)] border border-[var(--border-light)] shadow-[var(--shadow-card)] p-6 md:p-8 space-y-5">
            <h3 className="font-heading text-xl font-bold text-[var(--text-heading)]">
              Таравих-намаз
            </h3>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Таравих намаз является сунной муаккада. В мечетях Татарстана таравих-намаз согласно Ханафитскому мазхабу читается в <strong className="text-[var(--text-heading)]">20 ракаʼатов</strong>.
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Тот, кто оставляет молитву таравих без серьёзного основания в месяц Рамадан или сокращает её, выполняя менее 20 ракаʼатов, совершает действие, противоречащее единогласному мнению сахабов и осуществляет поступок, от которого следует максимально отстраниться.
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Имеются хадисы, в которых говорится:
            </p>
            <div
              className="text-xl leading-loose text-[var(--text-heading)] text-right font-[inherit] py-3"
              dir="rtl"
              lang="ar"
            >
              «أنه ﷺ مَا كَانَ يَزِيدُ فِي رَمَضَانَ وَلاَ فِي غَيْرِهِ عَلَى إِحْدَى عَشْرَةَ رَكْعَةً»
            </div>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              «Посланник Аллаха ﷺ в Рамадане и вне Рамадана больше одиннадцати ракаʼатов не читал».<sup>[1]</sup>
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Однако в этом и ему подобных хадисах, по мнению мусульманских правоведов (факихов), говорится о тахаджуд намазе, а не о молитве таравих, поскольку в хадисе упоминается как Рамадан, так и другие месяцы. Тахаджуд намаз читается и в месяце Рамадан, и вне Рамадана, а таравих же читается исключительно в месяц Рамадан.
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Изначально Пророк Мухаммад ﷺ читал намаз около трёх дней с джамаʼатом в мечети, но затем Посланник Аллаха ﷺ, остерегаясь того, что молитва таравих будет вменена в обязанность, перестал читать её с джамаʼатом.
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              В известной книге по фикху «аль-Ихтияр» говорится: «Таравих намаз является сунной муаккада. Посланник Аллаха ﷺ совершал этот намаз в первых числах месяца Рамадан, а в следующие ночи не вышел к людям, объяснив причину этого боязнью того, что постоянность в нём может стать причиной вменения в обязанность (став фардом) этого намаза. Праведные халифы и все верующие, начиная со времён ʼУмара (радыяллаху ʼанху) и до сегодняшнего дня, относились к этому намазу с большим вниманием и ответственностью».<sup>[2]</sup>
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Таравих намаз — это сунна. Имам аль-Хасан ибн Зияд (рахматуллахи ʼалейхи) передаёт это мнение от имама Абу Ханифы (рахматуллахи ʼаляйхи). Доводом являются слова Посланника Аллаха ﷺ:
            </p>
            <div
              className="text-xl leading-loose text-[var(--text-heading)] text-right font-[inherit] py-3"
              dir="rtl"
              lang="ar"
            >
              «إن الله تعالى فرض عليكم صيامه وسننت لكم قيامه»
            </div>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              «Всевышний Аллах сделал пост фардом в этом месяце, я же сделал намаз (таравих) в нём сунной».
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Также Пророк Мухаммад ﷺ сказал:
            </p>
            <div
              className="text-xl leading-loose text-[var(--text-heading)] text-right font-[inherit] py-3"
              dir="rtl"
              lang="ar"
            >
              «عليكم بسنّتي وسنّة الخلفاء الراشدين من بعدي»
            </div>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              «Я завещаю вам держаться моей сунны и сунны праведных халифов, которые будут после меня».<sup>[3]</sup>
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              В книге «ад-Дурруль-мухтар» написано: «Таравих — сунна муаккада и праведные халифы и остальные сахабы, как мужчины, так и женщины, единогласны в этом. Затем имам ибн ʼАбидин (рахматуллахи ʼаляйхи) говорит, что количество ракаʼатов этого намаза равно двадцати».<sup>[4]</sup>
            </p>
            <div
              className="text-xl leading-loose text-[var(--text-heading)] text-right font-[inherit] py-3"
              dir="rtl"
              lang="ar"
            >
              أَنَّ عُمَرَ، - رَضِيَ اللَّهُ عَنْهُ – »لَمَّا جَمَعَ النَّاسَ عَلَى أُبَيِّ بْنِ كَعْبٍ، وَكَانَ يُصَلِّي لَهُمْ عِشْرِينَ رَكْعَةً«
            </div>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Основным доводом является то, что когда ʼУмар ибн аль-Хаттаб (радыяллаху ʼанху) собрал людей и имамом назначил ʼУбай ибн Каʼба, то приказал совершать именно двадцать ракаʼатов.
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Имам Малик передаёт от Язида ибн Румана (рахматуллахи ʼалейхима), что люди во времена ʼУмара ибн аль-Хаттаба (радыяллаху ʼанху) читали таравих в двадцать три ракаʼата. А также ʼАли (радыяллаху ʼанху) приказал совершать этот намаз в двадцать ракаʼатов.<sup>[5]</sup>
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Такие учёные, как имам Суфьян ас-Саури, Абдуллах ибн аль-Мубарак, имам аш-Шафиʼи (рахматуллахи ʼалейхи) считали, что молитва таравих состоит из двадцати ракаʼатов. А также имам аш-Шафиʼи сказал, что он застал жителей Мекки читающими таравих-намаз в двадцать ракаʼатов.<sup>[6]</sup>
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Имам ан-Навави (рахматуллахи ʼалейхи) говорит, что таравих намаз — сунна. И читается он в двадцать ракаʼатов, каждый намаз — по два ракаʼата.<sup>[7]</sup>
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed italic">
              А Аллах знает лучше.
            </p>
            <footer className="pt-4 mt-6 border-t border-[var(--border-light)] text-sm text-[var(--text-muted-2)] space-y-1">
              <p>[1] См. «Сахихуль-Бухари» № 2013</p>
              <p>[2] См. «аль-Ихтияр ли тʼалилиль-мухтар» т.1 стр. 68</p>
              <p>[3] См. «аль-Мухытуль-бурхани филь-фикхиль-Нʼумани» т. 1, стр. 456</p>
              <p>[4] См. «ад-Дурруль-мухтар» т. 2, стр. 45</p>
              <p>[5] См. «аль-Мугни ли ибни Кудама» т. 2, стр. 123</p>
              <p>[6] См. «Сунанут-Тирмизи» т. 2, стр. 162</p>
              <p>[7] См. «аль-Муджмʼу шархуль-мухаззаб» т. 4, стр. 31</p>
            </footer>
          </article>

          <article className="bg-white rounded-[var(--radius-card)] border border-[var(--border-light)] shadow-[var(--shadow-card)] p-6 md:p-8 space-y-4">
            <h3 className="font-heading text-xl font-bold text-[var(--text-heading)]">
              Ураза-байрам и садака
            </h3>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              <strong className="text-[var(--text-heading)]">20 марта</strong> наступит великий праздник — Ид аль-Фитр – Ураза-байрам. О порядке проведения гает-намаза в честь Ураза-байрам ДУМ РТ сообщит дополнительно.
            </p>
            <ul className="space-y-2 text-[var(--text-body)] text-[var(--text-muted)]">
              <li><strong className="text-[var(--text-heading)]">Нисаб</strong> для выплаты фитр-садака, рассчитанный по серебру — <strong className="text-[var(--text-heading)]">120 000 руб.</strong></li>
              <li>Нисаб для выплаты закята, рассчитанный по золоту — <strong className="text-[var(--text-heading)]">940 000 руб.</strong></li>
            </ul>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Нисаб — это свободные за вычетом долгов и необходимых расходов средства, обладание которыми делает для мусульманина обязательным выплату закята и фитр-садака в адрес неимущих.
            </p>
            <p className="text-[var(--text-body)] text-[var(--text-muted)] leading-relaxed">
              Минимальный размер фитр-садаки составил <strong className="text-[var(--text-heading)]">200 рублей</strong>, а для тех, кто имеет возможность выплачивать закят — <strong className="text-[var(--text-heading)]">1200 рублей</strong>. Садака-фитр можно начинать раздавать с первого дня Рамадана до праздничного намаза Ураза-байрама. Кроме того, в качестве искупления за невозможность держать пост по состоянию здоровья и при невозможности восполнить его в другой время установлена <strong className="text-[var(--text-heading)]">фидия</strong> — за каждый пропущенный день <strong className="text-[var(--text-heading)]">450 рублей</strong>.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}


