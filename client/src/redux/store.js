import { configureStore } from '@reduxjs/toolkit'
import useReducer from './user/user.slice.js'

export const store = configureStore({
  reducer: {user: useReducer},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})