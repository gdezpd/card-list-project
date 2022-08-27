import { RootStoreType } from 'store'
import { ErrorMessageType, Nullable } from 'types'

export const selectorsIsInitialized = (state: RootStoreType): boolean => state.app.isInitialized

export const selectorIsLoading = (state: RootStoreType): boolean => state.app.isLoading

export const selectorError = (state: RootStoreType): ErrorMessageType => state.app.error

export const selectorEmail = (state: RootStoreType): Nullable<string> => state.forgot.email

export const selectorIsPasswordSend = (state: RootStoreType): boolean => state.forgot.isPasswordSend

export const selectorIsAuth = (state: RootStoreType) => state.app.isAuth

export const selectorUserName = (state: RootStoreType) => state.profile.name

export const selectorUserEmail = (state: RootStoreType) => state.profile.email

export const selectorUserId = (state: RootStoreType) => state.profile._id
