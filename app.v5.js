# Наступний етап — Firebase / Supabase

## Рекомендований шлях

Для першого онлайн-мультиплеєра найпростіше підключити Firebase Realtime Database:

```text
rooms/{roomId}
  meta
  players
  scene
  enemies
  journal
```

Далі `syncAdapter` у `app.v5.js` замінюється з localStorage на онлайн-адаптер:

- `subscribe()` читає зміни кімнати;
- `save()` записує зміни кімнати;
- усі телефони бачать один і той самий стан.

## Після цього

V6 має отримати:
- `firebase-config.js`;
- Firebase SDK;
- realtime listener на `rooms/{room}`;
- запис після кожної дії;
- базові правила доступу.
