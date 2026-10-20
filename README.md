# VB — сайт-портфолио Валерии Белобородовой

Личный сайт веб-дизайнера: услуги и цены, кейсы, этапы работы, бриф на разработку
сайта с отправкой заявки в Telegram.

## Стек

- **Next.js 16** (App Router, Turbopack), **React 19**, TypeScript (strict)
- **motion** — анимации (заменил framer-motion)
- **SCSS-модули** + CSS-переменные; шрифты через `next/font`, картинки через `next/image`
- **Zod** — схемы контента и валидация брифа
- **ESLint 9** (flat config), Prettier, Playwright, Lighthouse CI
- Без UI-библиотек: инпуты, радио, дровер и иконки — собственные компоненты

## Запуск

```bash
npm install
npm run dev          # http://localhost:3000
```

Сборка и проверки:

```bash
npm run build
npm run typecheck
npm run lint
npm run check        # typecheck + lint
npm run test:e2e     # Playwright: маршруты, бриф, меню, SEO
```

Node.js ≥ 22.

## Переменные окружения

Скопируйте `.env.example` в `.env` и заполните:

| Переменная | Назначение |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | токен бота из @BotFather |
| `TELEGRAM_CHAT_ID` | чат/канал, куда приходят заявки |

Переменные читаются только на сервере (Server Action `src/app/actions/send-brief.ts`).
**Никогда не добавляйте префикс `NEXT_PUBLIC_`** — токен попадёт в клиентский бандл.
В Vercel переменные задаются в Project Settings → Environment Variables.

Без токена форма работает, но вместо отправки показывает сообщение о недоступности.

## Структура

```
src/
  app/            маршруты App Router, метаданные, Server Action, sitemap/robots
  components/     секции страниц и layout
  ui/             собственные примитивы (поле, радио, иконки)
  data/           контент: контакты, кейсы, этапы, услуги
  styles/         globals, reset, миксины
  hooks/          небольшие клиентские хуки
public/image/     изображения кейсов и сайта
```

Маршруты: `/`, `/brif`, `/stages-page`, `/project-1`, `/project-2`, `/privacy`, `/404`.

## Контент

Кейсы и этапы лежат в `src/data/*.json` и импортируются через типизированные
модули (`projects.ts`, `stages.ts`, `services.ts`, `site.ts`). Схемы — в
`src/data/schemas.ts`, валидация — на сборке через `validateContent()`.
Новый кейс — JSON-файл + страница в `src/app/` + карточка в `projects.ts`.

## История и ветки

- `v1.0-legacy` / `legacy` — исходная версия 2023 года (Next 13, Pages Router, MUI).
  Собирается и запускается отдельно; полезна как визуальный эталон.
- `modern` — текущая модернизация; влита в `main` (2026-10-21), ветка сохранена.
- Визуальный baseline и скрипт съёмки: `.baseline/`, `.tools/` (локально, не в git).

## Деплой

Vercel, проект `vb-a6em`. Production: `vb-olive.vercel.app` (деплой от 2026-10-21,
Next.js 16, Node 22.x). Preview-сборки — на каждый push в ветки.

Переменные `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` задаются в Vercel
(Environment Variables → Preview и Production). Без них форма брифа показывает
сообщение о недоступности, но сайт работает.

## Лицензия и данные

Контент, фотографии и кейсы принадлежат Валерии Белобородовой. Код — владельцу
репозитория.
