import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ImageObj } from '../App'

export interface ImageState {
  images: ImageObj[];
  deletedImage: { password: string, id: string }
}

const initialState: ImageState = {
  images: [],
  deletedImage: { password: '', id: '' }
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImageObj[]>) => {
      state.images = action.payload
    },
    addImage: (state, action: PayloadAction<ImageObj>) => {
      state.images.unshift(action.payload)
    },
    deleteImage: (state) => {
      state.images = state.images.filter((image) => image.id !== state.deletedImage.id)
    },
    setDeletedImageId: (state, action: PayloadAction<{ password: string, id: string }>) => {
      state.deletedImage = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImages, addImage, setDeletedImageId, deleteImage } = imageSlice.actions

export default imageSlice.reducer