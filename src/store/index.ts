//slice

export { appSlice } from './slice/appSlice'

export { forgotSlice } from './slice/forgotSlice'
export { loginSlice } from './slice/loginSlice'
export { registrationSlice } from './slice/registrationSlice'

//thunk

export { sendLetterOnEmail } from './thunk/forgotThunk'
export { RegistrationThunk } from './thunk/registrationThunk'

//selector

export {
  selectorsIsInitialized,
  selectorIsLoading,
  selectorError,
  selectorEmail,
  selectorIsPasswordSend,
  selectorIsLoginIn,
  selectorIsAuth,
} from './selectors/selectors'

//other

export type { AppDispatchType, RootStoreType } from './store'

//action

export { setInitialized, setErrorMessage, isSpinAppLoading } from './slice/appSlice'

export { removeEmail, sendLetter, isPasswordSend } from './slice/forgotSlice'
