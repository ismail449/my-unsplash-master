import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ImageObj } from '../App'

export interface ImageState {
  images: ImageObj[];
  filteredImages: ImageObj[];
  deletedImage: { password: string, id: string }
}

const initialState: ImageState = {
  images: [],
  filteredImages: [],
  deletedImage: { password: '', id: '' }
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<ImageObj[]>) => {
      state.images = action.payload
      state.filteredImages = [...state.images]
    },
    addImage: (state, action: PayloadAction<ImageObj>) => {
      state.images.unshift(action.payload)
      state.filteredImages = [...state.images]
    },
    deleteImage: (state) => {
      state.images = state.images.filter((image) => image.id !== state.deletedImage.id)
      state.filteredImages = [...state.images]
    },
    setDeletedImageId: (state, action: PayloadAction<{ password: string, id: string }>) => {
      state.deletedImage = action.payload
    },
    searchImages: (state, action: PayloadAction<string>) => {
      state.filteredImages = state.images.filter((image) => image.desc.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImages, addImage, setDeletedImageId, deleteImage, searchImages } = imageSlice.actions

export default imageSlice.reducer