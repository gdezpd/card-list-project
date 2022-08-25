import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { profileAPI } from 'api'
import axios from 'axios'

export const initialState: InitialStateType = {
  userName: '',
  userAvatar: '',
}

export const fetchProlePage = createAsyncThunk(
  'profileSlice/fetchProlePage',
  async (_, { dispatch }) => {
    const res = await profileAPI.getAuthUser()
    console.log(res)
  }
)

// export const changeProfileName = createAsyncThunk(
//   'profileSlice/changeProfileName',
//   async ((userName, userAvatar), {dispatch}) => {
//     const res = await axios.put('http://localhost:7542/2.0/auth/me', {
//       name: userName,
//       avatar: userAvatar,
//     })
//   }
// )

export const changeProfileName = createAsyncThunk(
  'profileSlice/changeProfileName',
  async (userName: string, { rejectWithValue, dispatch }) => {
    const res = await axios.put('http://localhost:7542/2.0/auth/me', { name: userName })
    dispatch(setUserName(res.data.updatedUser.name))
  }
)

// export const changeProfileName2 = createAsyncThunk(
//   'profileSlice/changeProfileName',
//   async ({userName: string, userAvatar: string}, {}) =>{
//     const res = await axios.put('http://localhost:7542/2.0/auth/me', {
//       name: userName,
//       avatar: userAvatar,
//     })
//   }
// )

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setUserAvatar: (state, action) => {
      state.userAvatar = action.payload
    },
  },
  // extraReducers: {
  //   // @ts-ignore
  //   [changeProfileName.pending]: () => console.log('pending'),
  //   // @ts-ignore
  //   [changeProfileName.fulfilled]: () => console.log('fulfilled'),
  //   // @ts-ignore
  //   [changeProfileName.rejected]: () => console.log('rejected'),
  // },
})

export const { setUserName, setUserAvatar } = profileSlice.actions

export default profileSlice.reducer

type InitialStateType = {
  userName: string
  userAvatar: string
}
