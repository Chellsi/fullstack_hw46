# React Redux App

Цей проект демонструє використання Redux Toolkit для управління глобальним станом у React додатку. Додаток містить різні типи форм та асинхронні операції з даними.

## Технології

- **React 18** з TypeScript
- **Redux Toolkit** для управління станом
- **React Redux** для інтеграції з React
- **Vite** як bundler
- **Tailwind CSS** для стилізації

## Особливості

- ✅ Централізоване управління станом через Redux
- ✅ Типізовані Redux хуки для TypeScript
- ✅ Асинхронні операції з createAsyncThunk
- ✅ Контрольовані та неконтрольовані форми
- ✅ Управління видимістю компонентів
- ✅ Завантаження даних з API

## Структура проекту

```
src/
├── redux/
│   ├── store.ts              # Конфігурація Redux store
│   ├── hooks.ts              # Типізовані Redux хуки
│   └── slices/
│       ├── visibilitySlice.ts # Управління видимістю компонентів
│       ├── usersSlice.ts     # Управління даними користувачів
│       └── formSlice.ts      # Управління станом форм
├── components/
│   ├── ControlledForm.tsx    # Контрольована форма з Redux
│   ├── UncontrolledForm.tsx  # Неконтрольована форма
│   └── UsestateFetch.tsx     # Компонент з асинхронним завантаженням
├── App.tsx                   # Головний компонент
├── main.tsx                  # Точка входу з Redux Provider
└── ...
```

## Установка

1. Клонуйте репозиторій:
```bash
git clone <repository-url>
cd my-redux-app
```

2. Встановіть залежності:
```bash
npm install
```

3. Встановіть Redux залежності:
```bash
npm install @reduxjs/toolkit react-redux
npm install --save-dev @types/react-redux
```

## Запуск

```bash
npm run dev
```

Додаток буде доступний за адресою `http://localhost:5173`

## Redux Slices

### 1. Visibility Slice
Управляє видимістю різних компонентів:
- `isControlledFormVisible` - показ/приховування контрольованої форми
- `isUsersVisible` - показ/приховування списку користувачів

**Дії:**
- `toggleControlledForm()` - перемикає видимість форми
- `toggleUsersVisibility()` - перемикає видимість користувачів
- `setControlledFormVisible(boolean)` - встановлює видимість форми
- `setUsersVisible(boolean)` - встановлює видимість користувачів

### 2. Users Slice
Управляє даними користувачів та їх завантаженням:
- `data` - масив користувачів
- `loading` - статус завантаження
- `error` - повідомлення про помилку

**Дії:**
- `fetchUsers()` - асинхронне завантаження користувачів
- `clearUsers()` - очищення списку користувачів
- `clearError()` - очищення помилки

### 3. Form Slice
Управляє станом форм:
- `status` - поточний статус (idle, submitting, success, error)
- `uncontrolledForm` - дані неконтрольованої форми

**Дії:**
- `setStatus(string)` - встановлення статусу
- `setUncontrolledFormData(object)` - оновлення даних форми
- `resetUncontrolledForm()` - скидання форми
- `resetStatus()` - скидання статусу

## Компоненти

### ControlledForm
Контрольована форма, що використовує Redux для управління станом:
- Підключена до `form.status` через useAppSelector
- Використовує `setStatus` action для оновлення стану

### UncontrolledForm
Традиційна неконтрольована форма з useRef:
- Використовує локальні refs для доступу до значень
- Валідація та відправка через обробник onSubmit

### UsestateFetch
Компонент для демонстрації асинхронних операцій:
- Завантажує користувачів з JSONPlaceholder API
- Управляє станом завантаження через Redux
- Відображає loading, error та success стани

## Типізація

Проект повністю типізований з TypeScript:
- `RootState` - тип для корневого стану Redux
- `AppDispatch` - тип для dispatch функції
- Типізовані хуки `useAppSelector` та `useAppDispatch`
- Інтерфейси для всіх слайсів та їх станів

## API

Додаток використовує [JSONPlaceholder](https://jsonplaceholder.typicode.com/) для демонстрації асинхронних операцій:
- `GET /users` - отримання списку користувачів

## Розробка

Для додавання нових слайсів:

1. Створіть новий слайс у `src/redux/slices/`
2. Додайте reducer до store у `src/redux/store.ts`
3. Використовуйте типізовані хуки у компонентах

Приклад нового слайса:
```typescript
import { createSlice } from '@reduxjs/toolkit'

interface NewSliceState {
  value: string
}

const initialState: NewSliceState = {
  value: ''
}

const newSlice = createSlice({
  name: 'newSlice',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setValue } = newSlice.actions
export default newSlice.reducer
```

## Корисні команди

- `npm run dev` - запуск в режимі розробки
- `npm run build` - збірка для продакшну
- `npm run preview` - перегляд production збірки
- `npm run lint` - перевірка коду

## Додаткові ресурси

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)