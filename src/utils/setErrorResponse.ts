import axios, { AxiosError } from 'axios'

export const setErrorResponse = (e: any, rejectWithValue: Function) => {
  const err = e as Error | AxiosError<{ error: string }>
  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message
    if (error !== 'you are not authorized /ᐠ-ꞈ-ᐟ\\') {
      return rejectWithValue(error)
    }
  } else {
    return rejectWithValue(err.message)
  }
}
