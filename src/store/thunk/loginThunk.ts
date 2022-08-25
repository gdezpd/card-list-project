import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI } from 'api'
import axios, { AxiosError } from 'axios'
import { isSpinAppLoading } from 'store'
import { loginIn } from 'store/slice/loginSlice'

import { LoginType } from '../../types'

export const signInOnEmail = createAsyncThunk(
  'loginSlice/signInOnEmail',
  async ({ password, rememberMe, email }: LoginType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await loginAPI.loginIn({ password, rememberMe, email })
      dispatch(loginIn(true))
    } catch (e) {
      const err = e as Error | AxiosError<{ error: string }>
      if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        console.log(error)
        rejectWithValue(error)
      } else {
        rejectWithValue(err.message)
      }
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
