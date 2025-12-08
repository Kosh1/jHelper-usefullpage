# ИИ для адвокатов - Лендинг

Образовательный лендинг, основанный на презентации о применении искусственного интеллекта в юридической практике.

## Технологии

- React 18
- Vite
- CSS3

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

Проект будет доступен по адресу http://localhost:5173

## Сборка

```bash
npm run build
```

## Деплой на Vercel

### Через GitHub

1. **Создайте репозиторий на GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ваш-username/ваш-репозиторий.git
   git push -u origin main
   ```

2. **Подключите проект к Vercel:**
   - Перейдите на [vercel.com](https://vercel.com)
   - Войдите через GitHub
   - Нажмите "Add New Project"
   - Выберите ваш репозиторий
   - Vercel автоматически определит настройки из `vercel.json`
   - Нажмите "Deploy"

3. **Автоматический деплой:**
   - Каждый push в ветку `main` автоматически запустит новый деплой
   - Pull Request'ы получат preview URL для тестирования

### Через Vercel CLI (альтернативный способ)

```bash
npm i -g vercel
vercel
```

## Структура проекта

- `src/components/` - React компоненты
- `src/data/products.js` - Данные о продуктах из презентации
- `public/` - Статические файлы (изображения из презентации)

## Основные разделы

1. **Hero** - Главный экран с призывом к действию
2. **Products** - Обзор инструментов ИИ (Perplexity, NotebookLM, ChatGPT/Gemini, и др.)
3. **ROI** - Экономика и возврат инвестиций
4. **Risks** - Риски и правила работы с ИИ
5. **Contact** - Контактная форма и способы связи

## Примечания

- Проект настроен для SPA (Single Page Application) с правильными rewrite правилами для Vercel
- Все изображения находятся в `public/extracted_images/`
- Конфигурация Vercel находится в `vercel.json`

