import { configureStore } from '@reduxjs/toolkit'
import imageSlice from './imageSlice'
import modalSlice from './modalSlice'

export const store = configureStore({
  reducer: {
    image: imageSlice,
    modal: modalSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch