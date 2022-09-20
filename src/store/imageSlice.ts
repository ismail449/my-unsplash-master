import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ImageObj } from '../App'

export interface ImageState {
  images: ImageObj[]
}

const initialState: ImageState = {
  images: [],
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImageObj[]>) => {
      state.images = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImages } = imageSlice.actions

export default imageSlice.reducer