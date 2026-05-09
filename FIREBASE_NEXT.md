# V5 Data Model — підготовка до онлайн-синхронізації

У V5 додаток переходить від локальної структури `player + inventory` до структури кімнати.

```json
{
  "schemaVersion": 5,
  "meta": {
    "app": "Польовий Модуль",
    "roomId": "zona01",
    "syncMode": "local",
    "createdAt": "...",
    "updatedAt": "..."
  },
  "players": {
    "fox": {
      "id": "fox",
      "name": "Лис",
      "hp": 8,
      "hpMax": 12,
      "fatigue": 2,
      "infection": 1,
      "ammo": 15,
      "activeEffects": [],
      "inventory": []
    }
  },
  "scene": {},
  "enemies": [],
  "journal": []
}
```

## Чому так

- `room` стане коренем онлайн-синхронізації.
- `players` дозволяє мати кількох друзів у тій самій кімнаті.
- `infection` замінює стару `radiation`.
- `journal.visibility` готує приховані майстерські записи.
- `enemies[].gm` готує приховані дані ворогів для Майстра.
