import { createSlice } from '@reduxjs/toolkit'

interface FormState {
  status: string
  uncontrolledForm: {
    name: string
    email: string
    message: string
  }
}

const initialState: FormState = {
  status: 'idle',
  uncontrolledForm: {
    name: '',
    email: '',
    message: '',
  },
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setUncontrolledFormData: (state, action) => {
      state.uncontrolledForm = { ...state.uncontrolledForm, ...action.payload }
    },
    resetUncontrolledForm: (state) => {
      state.uncontrolledForm = {
        name: '',
        email: '',
        message: '',
      }
    },
    resetStatus: (state) => {
      state.status = 'idle'
    },
  },
})

export const { 
  setStatus, 
  setUncontrolledFormData, 
  resetUncontrolledForm, 
  resetStatus 
} = formSlice.actions

export default formSlice.reducer