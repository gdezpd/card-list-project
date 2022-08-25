import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from 'types'

export const initialState: InitialStateType = {
  isLoading: false,
  isInitialized: false,
  isAuth: false,
  error: null,
}

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    isSpinAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setErrorMessage: (state, action: PayloadAction<Nullable<string>>) => {
      state.error = action.payload
    },
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/rejected'),
      (state, action: PayloadAction<string>) => {
        state.error = action.payload as string
      }
    )
  },
})

export const { isSpinAppLoading, setErrorMessage, setInitialized } = appSlice.actions

type InitialStateType = {
  isLoading: boolean
  isInitialized: boolean
  isAuth: boolean
  error: Nullable<string>
}
