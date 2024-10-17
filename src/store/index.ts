import { configureStore } from '@reduxjs/toolkit'
import toolsReducer from './toolsSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    tools: toolsReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch