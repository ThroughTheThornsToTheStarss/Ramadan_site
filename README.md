# Мечеть Рамазан — Landing Page

Пиксель-в-пиксель клон лендинга мечети Рамазан (референс: Readdy).

## Стек

- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** + CSS-переменные (design tokens)
- **next/font** (Inter)
- **lucide-react** для иконок

## Требования

- **Node.js 18.17+** (рекомендуется 20 LTS). На Node 12 `npm install` падает с ошибкой `Cannot find module 'node:fs'`.

### Как поставить Node 18 (если сейчас стоит 12)

**Вариант 1 — через nvm (удобно на Linux/macOS):**

```bash
# Установить nvm, если ещё нет: https://github.com/nvm-sh/nvm#installing-and-updating
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# Перезайти в терминал или: source ~/.nvmrc 2>/dev/null; source ~/.bashrc 2>/dev/null

# Установить и использовать Node 18
nvm install 18
nvm use 18
```

В каталоге проекта уже есть `.nvmrc` с версией 18 — можно просто выполнить:

```bash
cd /home/ilshat/workspace/Ramadan_landing_page
nvm use
```

**Вариант 2 — без nvm (NodeSource на Ubuntu/Debian):**

Если уже стоит Node из репозитория Ubuntu (например 12), сначала убери старые пакеты, чтобы не было конфликта файлов:

```bash
sudo apt-get remove -y nodejs libnode-dev libnode72 2>/dev/null
sudo apt-get autoremove -y
```

Затем добавь репозиторий NodeSource и установи Node 20:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # должно быть v20.x
```

После этого в каталоге проекта:

```bash
cd /home/ilshat/workspace/Ramadan_landing_page
npm install
npm run dev
```

## Запуск

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

Сборка:

```bash
npm run build
npm start
```

## Деплой

- **Статика:** `npm run build` → папка `.next`. Запуск: `npm start` (Node) или экспорт в статику: `next export` не используется в App Router; для статического хостинга подойдут Vercel, Netlify, или `output: 'export'` в `next.config.js` при необходимости.
- **Переменные:** для canonical URL и Open Graph задайте `NEXT_PUBLIC_SITE_URL` (см. `.env.example`). На Vercel/Netlify укажите эту переменную в настройках проекта.
- **Рекомендации:** включён `reactStrictMode`, отключён заголовок `X-Powered-By`. Генерируются `robots.txt` и `sitemap.xml` из `app/robots.ts` и `app/sitemap.ts`.

## Структура проекта

- `app/layout.tsx` — корневой layout, шрифты, meta
- `app/page.tsx` — главная страница (сборка секций)
- `app/globals.css` — CSS-переменные и базовые стили
- `components/sections/` — секции: Header, Hero, About, PrayerSchedule, Lessons, Contacts, Footer
- `components/ui/` — Container, Button, Card, Logo
- `public/assets/` — изображения (Hero, About и др.). Для удобства можно переименовать файлы в `hero.png`, `about.png` и обновить пути в `Hero.tsx` и `About.tsx`.
- `public/data/prayer-times.json` — **расписание намазов на месяц** (редактируй или загружай новый файл — сайт подхватит при обновлении страницы)
- `reference-screenshots/` — эталонные скриншоты референса (для сверки)
- `tailwind.config.ts` — тема и расширения Tailwind

## Checklist pixel-perfect

- [ ] Desktop 1440: совпадает сетка, отступы, типографика
- [ ] Laptop 1280: совпадает
- [ ] Tablet 768: совпадает
- [ ] Mobile 390/360: совпадает
- [ ] Hover/focus состояния совпадают
- [ ] Все ассеты идентичны (те же файлы/иконки)
- [ ] Нет CLS, изображения оптимизированы (next/image)
- [ ] Lighthouse: performance / SEO / accessibility без критических проблем

## Секции

1. **Hero** — фон мечети/город, оверлей, заголовок «Мечеть Рамазан», подзаголовок, две CTA-кнопки
2. **About** — «О нашей мечети», текст, фото справа (минарет и сосна)
3. **Prayer Schedule** — «Расписание намазов», переключатель Сегодня/Завтра, карточки намазов, блок «Важная информация»
4. **Lessons** — «Уроки и занятия», карточка «Запишитесь на урок», кнопка «Связаться с нами»
5. **Contacts** — «Контакты», три карточки (адрес, телефон, время работы), карта
6. **Footer** — логотип, навигация, копирайт

## Расписание намазов (данные)

Время намазов на **сегодня и завтра** берётся из файла `public/data/prayer-times.json`. Сайт сам подставляет нужный день по текущей дате — **менять что-то каждый день не нужно**.

### Обновление раз в месяц

1. **Вариант A — из таблицы (Excel / CSV)**  
   Сохраните таблицу на месяц в CSV с колонками: день (1–31) или дата (ГГГГ-ММ-ДД), фаджр, зухр, аср, магриб, иша (время в формате ЧЧ:ММ). Затем выполните:

   ```bash
   # если в CSV колонка «день» + месяц и год
   node scripts/csv-to-prayer-times.js --month=2 --year=2026 ваш-файл.csv

   # если в CSV уже есть колонка «дата» (ГГГГ-ММ-ДД)
   node scripts/csv-to-prayer-times.js ваш-файл.csv
   ```

   Скрипт перезапишет `public/data/prayer-times.json`. Опция `--merge` подмешивает новые даты в существующий файл.

2. **Вариант B — вручную**  
   Отредактируй или замени `public/data/prayer-times.json`: в объекте `schedule` ключи — даты `ГГГГ-ММ-ДД`, значения — объект с полями `fajr`, `dhuhr`, `asr`, `maghrib`, `isha` (время в формате `ЧЧ:ММ`). Достаточно один раз залить расписание на весь месяц — на сайте автоматически будут отображаться сегодня и завтра.

Подробнее: `public/data/README.md`. Пример CSV: `scripts/example-february-2026.csv`.

## Design tokens (globals.css)

- Цвета: `--primary`, `--text-dark`, `--text-muted`, `--border-light`, `--info-bg` и др.
- Контейнер: `--container-max: 1280px`, `--container-px`
- Секции: `--section-py`
- Радиусы: `--radius-logo`, `--radius-button`, `--radius-card`
- Тени: `--shadow-card`, `--shadow-card-soft`, `--shadow-toggle`
