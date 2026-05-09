# Польовий Модуль — V5.1 Runtime Fix

Ця версія виправляє ситуацію, коли інтерфейс відкривається, але кнопки не працюють і вкладка «Вороги» порожня через те, що JavaScript-файл не підключився або браузер узяв стару кешовану версію.

## Нові файли

- `index.html`
- `styles.v5-1.css`
- `app.v5-1.js`
- `manifest.webmanifest`
- `sw.v5-1.js`
- `README.md`
- `docs/`

## Як перевірити

Після оновлення GitHub Pages відкрий:

`https://nikakrawivonok-coder.github.io/09.05.26/?role=gm&room=zona01&v=51`

Для гравця:

`https://nikakrawivonok-coder.github.io/09.05.26/?role=player&room=zona01&player=fox&v=51`

Якщо бачиш повідомлення «Модуль завантажується…» і воно не зникає, значить `app.v5-1.js` не завантажився.
