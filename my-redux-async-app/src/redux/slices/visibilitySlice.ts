// src/redux/slices/visibilitySlice.ts
import { createSlice } from '@reduxjs/toolkit'

interface VisibilityState {
  isControlledFormVisible: boolean
  isUsersVisible: boolean
}

const initialState: VisibilityState = {
  isControlledFormVisible: false,
  isUsersVisible: false,
}

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    toggleControlledForm: (state) => {
      state.isControlledFormVisible = !state.isControlledFormVisible
    },
    toggleUsersVisibility: (state) => {
      state.isUsersVisible = !state.isUsersVisible
    },
    setControlledFormVisible: (state, action) => {
      state.isControlledFormVisible = action.payload
    },
    setUsersVisible: (state, action) => {
      state.isUsersVisible = action.payload
    },
  },
})

export const { 
  toggleControlledForm, 
  toggleUsersVisibility, 
  setControlledFormVisible, 
  setUsersVisible 
} = visibilitySlice.actions

export default visibilitySlice.reducer