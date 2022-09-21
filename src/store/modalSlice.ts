import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  addImageModal: boolean;
  deleteImageModal: boolean;
}
const initialState: ModalState = {
  addImageModal: false,
  deleteImageModal: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeAddImageModal: (state) => {
      state.addImageModal = false
    },
    openAddImageModal: (state) => {
      state.addImageModal = true
    },
    closeDeleteImageModal: (state) => {
      state.deleteImageModal = false
    },
    openDeleteImageModal: (state) => {
      state.deleteImageModal = true
    },
  }
})

export const { closeAddImageModal, openAddImageModal, closeDeleteImageModal, openDeleteImageModal } = modalSlice.actions
export default modalSlice.reducer