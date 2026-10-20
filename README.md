# VB — сайт-портфолио Валерии Белобородовой

Личный сайт веб-дизайнера: услуги и цены, кейсы, этапы работы и бриф на разработку
сайта с отправкой заявки в Telegram.

**Production:** [vb-olive.vercel.app](https://vb-olive.vercel.app) · Next.js 16 · React 19 · TypeScript strict · Node 22

---

## О проекте

- Пять публичных страниц: главная, бриф, этапы, два кейса, плюс политика
  конфиденциальности и кастомная 404.
- Контент — типизированный JSON с Zod-валидацией на этапе сборки: битые данные
  не доезжают до продакшена.
- Заявки с брифа уходят в Telegram через Server Action; токен живёт только на
  сервере и никогда не попадает в клиентский бандл.
- Без UI-библиотек: поле ввода с плавающим лейблом, радио, дровер и иконки —
  собственные компоненты, чтобы дизайн не зависел от мажорных апгрейдов MUI.

## Быстрый старт

Нужен **Node.js 22+** и npm.

```bash
npm install
cp .env.example .env     # Windows: copy .env.example .env
npm run dev              # http://localhost:3000
```

Без переменных окружения сайт работает, но бриф вместо отправки покажет
сообщение о недоступности формы.

> Windows / PowerShell: если `npm` падает с ошибкой Execution Policy
> (`npm.ps1`), используйте `npm.cmd`.

## Стек

| Слой             | Технологии                                                              |
| ---------------- | ----------------------------------------------------------------------- |
| Фреймворк        | Next.js 16 (App Router, Turbopack), React 19, TypeScript strict         |
| Анимации         | motion (бывший framer-motion), CSS-анимации для first paint             |
| Стили            | SCSS-модули, CSS-переменные, fluid-типографика на `clamp()`             |
| Шрифты и графика | `next/font` (self-hosted), `next/image` (AVIF/WebP, responsive `sizes`) |
| Контент          | JSON + Zod-схемы, валидация на сборке                                   |
| Форма            | Server Action, Zod, honeypot, rate limit, Telegram Bot API              |
| Качество         | ESLint 9 (flat), Prettier, Playwright, axe-core, Lighthouse CI          |
| Хостинг          | Vercel, Node 22.x, preview на каждый push                               |

## Команды

| Команда             | Что делает                                           |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | dev-сервер на `http://localhost:3000`                |
| `npm run build`     | production-сборка (Turbopack, статический пререндер) |
| `npm run start`     | запуск собранного приложения                         |
| `npm run typecheck` | `tsc --noEmit`                                       |
| `npm run lint`      | ESLint по всему проекту                              |
| `npm run check`     | typecheck + lint                                     |
| `npm run test:e2e`  | Playwright: маршруты, бриф, меню, SEO, доступность   |
| `npm run format`    | Prettier                                             |

## Структура

```
src/
  app/                 маршруты App Router, метаданные, sitemap/robots/manifest,
                       Server Action брифа (actions/send-brief.ts)
  components/          секции страниц, layout, собственные примитивы
  ui/                  Field, RadioGroup, иконки
  data/                контент и его схемы: projects, stages, services, site
  styles/              globals, reset, миксины
  hooks/               клиентские хуки (useMediaQuery)
public/image/          изображения кейсов и сайта
tests/                 Playwright: smoke, form, seo, a11y
docs/                  план модернизации и принятые решения
```

## Маршруты

| URL                                                    | Назначение                                                  |
| ------------------------------------------------------ | ----------------------------------------------------------- |
| `/`                                                    | главная: hero, о работе, портфолио, этапы, услуги, контакты |
| `/brif`                                                | бриф на разработку сайта                                    |
| `/stages-page`                                         | все восемь этапов работы                                    |
| `/project-1`                                           | кейс Intechaus — фахверковые дома и бани                    |
| `/project-2`                                           | кейс Awerhome — кухни на заказ                              |
| `/privacy`                                             | политика конфиденциальности                                 |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | SEO/PWA-служебные                                           |

## Контент

Кейсы, этапы и контакты лежат в `src/data/*.json`; карточки портфолио и услуги —
в типизированных модулях `projects.ts` и `services.ts`. Валидация — `schemas.ts`,
проверка на сборке — `validateContent()` в корневом layout.

**Новый кейс:**

1. добавить `src/data/project-3.json` по образцу существующих;
2. описать схему в `schemas.ts` (или расширить `projectCaseSchema`);
3. добавить страницу `src/app/project-3/page.tsx` и данные в `projects.ts`;
4. `npm run build` — Zod покажет, если что-то не сходится.

Контент правится без захода в компоненты: тексты, цены, этапы и контакты живут
в данных.

## Переменные окружения

| Переменная           | Назначение                                         |
| -------------------- | -------------------------------------------------- |
| `TELEGRAM_BOT_TOKEN` | токен бота из [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID`   | чат или канал, куда приходят заявки                |

Читаются только на сервере в `src/app/actions/send-brief.ts`.

> **Никогда не добавляйте префикс `NEXT_PUBLIC_`** к этим переменным: токен
> окажется в клиентском JS. В Vercel значения задаются в
> Project Settings → Environment Variables (Preview и Production).

Без переменных форма показывает «Форма временно недоступна», сайт при этом
полностью работоспособен.

## Качество

- `next build` — 8 маршрутов, все статические; `tsc` и ESLint — чисто.
- Playwright — **51 тест**, 3 платформенных пропуска: маршруты, 404, бриф,
  маска телефона, радио, мобильное меню, SEO-метаданные, sitemap/robots/manifest,
  JSON-LD.
- **axe-core: 0 нарушений** WCAG 2.0/2.1 A/AA + best-practice на всех страницах
  и в открытом мобильном меню.
- Lighthouse на production-сборке:

  |                | Mobile    | Desktop |
  | -------------- | --------- | ------- |
  | Performance    | 78–82     | 98      |
  | Accessibility  | 100       | 100     |
  | Best practices | 100       | 100     |
  | SEO            | 100       | 100     |
  | LCP            | 4.4–4.9 s | 0.9 s   |

- CI (`.github/workflows/ci.yml`): lint → typecheck → build → e2e на push/PR;
  отдельная job Lighthouse CI с бюджетами (`lighthouserc.cjs`).

Проверка перед деплоем:

```bash
npm run check && npm run build && npm run test:e2e
```

## Деплой

Vercel, проект `vb-a6em`.

| Окружение  | URL                                    |
| ---------- | -------------------------------------- |
| Production | `vb-olive.vercel.app`                  |
| Preview    | создаётся на каждый push в любую ветку |

- Node.js на Vercel — **22.x** (требование Next 16).
- `main` → production, остальные ветки → preview.
- Переменные Telegram добавляются в настройках проекта; после изменения нужен
  redeploy.

**Ограничение:** `*.vercel.app` не открывается из российских сетей. Для реальной
аудитории нужен кастомный домен или другой хостинг — задача вне текущего скоупа.

## История версий

- **v1.0-legacy** (тег) и ветка `legacy` — исходный сайт 2023 года: Next.js 13,
  Pages Router, MUI 5. Собирается отдельно, используется как визуальный эталон.
- **main** — актуальная версия после модернизации (2026-10-21).
- **modern** — ветка, в которой шла миграция; влита в `main` и сохранена.
- Подробный план, цифры «до/после» и список точечных изменений дизайна —
  в [docs/MODERNIZATION.md](docs/MODERNIZATION.md).

Визуальная сверка велась локально: скриншоты и скрипты лежат в `.baseline/` и
`.tools/` (в git не попадают).

## Лицензия и данные

Контент, фотографии и кейсы принадлежат Валерии Белобородовой. Код — владельцу
репозитория.
