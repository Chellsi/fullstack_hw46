# Redux Async App

Простий React додаток для вивчення роботи з Redux Toolkit та асинхронними операціями.

## Опис проекту

Цей проект демонструє основні концепції роботи з Redux Toolkit у React додатку, включаючи:
- Управління станом форм (controlled та uncontrolled)
- Асинхронні операції з API
- Керування видимістю компонентів

## Структура проекту

```
src/
├── components/
│   ├── ControlledForm.tsx      # Керована форма з Redux
│   ├── UncontrolledForm.tsx    # Некерована форма з useRef
│   └── UsestateFetch.tsx       # Компонент з асинхронним завантаженням
├── redux/
│   ├── slices/
│   │   ├── formSlice.ts        # Слайс для управління формами
│   │   ├── usersSlice.ts       # Слайс для користувачів з API
│   │   └── visibilitySlice.ts  # Слайс для керування видимістю
│   ├── hooks.ts                # Типізовані Redux хуки
│   └── store.ts                # Конфігурація Redux store
├── App.tsx                     # Головний компонент
└── main.tsx                    # Точка входу
```

## Основні функції

### 1. Керована форма (Controlled Form)
- Використовує Redux для управління станом
- Dropdown для вибору статусу
- Відображення поточного стану

### 2. Некерована форма (Uncontrolled Form)
- Використовує `useRef` для отримання даних
- Валідація полів
- Очищення форми після відправки

### 3. Асинхронне завантаження даних
- Завантаження користувачів з JSONPlaceholder API
- Відображення станів: loading, error, success
- Можливість показати/приховати список користувачів

## Технології

- **React 18** - основний фреймворк
- **Redux Toolkit** - управління станом
- **TypeScript** - типізація
- **Tailwind CSS** - стилізація
- **Vite** - збірник проекту

## Асинхронні операції

Додаток використовує `createAsyncThunk` для обробки асинхронних операцій:

```typescript
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json()
  }
)
```

Обробляються всі стани асинхронних операцій:
- `pending` - завантаження
- `fulfilled` - успішне завантаження
- `rejected` - помилка

## Redux Slices

### formSlice
- Управління станом форм
- Збереження статусу та даних неконтрольованої форми

### usersSlice
- Асинхронне завантаження користувачів
- Управління станами loading/error
- Очищення даних

### visibilitySlice
- Керування видимістю компонентів
- Toggle функції для показу/приховування елементів

## Запуск проекту

1. Встановіть залежності:
```bash
npm install
```

2. Запустіть проект:
```bash
npm run dev
```

3. Відкрийте браузер за адресою `http://localhost:5173`

## Навчальні цілі

Цей проект допомагає освоїти:
- Основи Redux Toolkit
- Створення та використання слайсів
- Робота з `createAsyncThunk`
- Типізація в TypeScript з Redux
- Різниця між controlled та uncontrolled компонентами
- Обробка асинхронних операцій в React/Redux

## API

Використовується безкоштовне API JSONPlaceholder:
- `https://jsonplaceholder.typicode.com/users` - список користувачів

## Структура стану Redux

```typescript
{
  form: {
    status: string,
    uncontrolledForm: {
      name: string,
      email: string,
      message: string
    }
  },
  users: {
    data: User[],
    loading: boolean,
    error: string | null
  },
  visibility: {
    isControlledFormVisible: boolean,
    isUsersVisible: boolean
  }
}
```