import { configureStore } from '@reduxjs/toolkit'
import visibilityReducer from './slices/visibilitySlice'
import usersReducer from './slices/usersSlice'
import formReducer from './slices/formSlice'

export const store = configureStore({
  reducer: {
    visibility: visibilityReducer,
    users: usersReducer,
    form: formReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch