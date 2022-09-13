import { createAsyncThunk } from '@reduxjs/toolkit'
import { packsListAPI } from 'api'
import {
  isSpinAppLoading,
  isCloseModal,
  resetStatePackParams,
  RootStoreType,
  setPackData,
  unmountingComponent,
  getCardData,
  removeCardData,
  removeCardParams,
} from 'store'
import { AddPackType, EditPackType, PackParamsType } from 'types'
import { isComparisonOfTwoObjects, setErrorResponse } from 'utils'

export const getPackData = createAsyncThunk(
  'packSlice/getPackData',
  async (payload: PackParamsType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true))
      const res = await packsListAPI.getPackData(payload)

      dispatch(setPackData(res))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
      dispatch(isCloseModal(true))
    }
  }
)

export const addNewPack = createAsyncThunk(
  'packSlice/addNewPack',
  async (payload: AddPackType, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(isCloseModal(false))
      await packsListAPI.createPack(payload)

      const state = getState() as RootStoreType
      const packParamsNow = state.packParams

      if (isComparisonOfTwoObjects(resetStatePackParams, packParamsNow)) {
        dispatch(getPackData(packParamsNow))
      } else {
        dispatch(unmountingComponent())
      }
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const editPack = createAsyncThunk(
  'packSlice/editPack',
  async (payload: EditPackType, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(isCloseModal(false))
      await packsListAPI.editPuck(payload)

      const state = getState() as RootStoreType
      const packParamsNow = state.packParams
      const cardsParamsNow = state.cardParams
      const isOpenCardsPage = state.card.cards.length !== 0
      if (isOpenCardsPage) {
        dispatch(getCardData(cardsParamsNow))
      } else {
        dispatch(getPackData(packParamsNow))
      }
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)

export const deletePack = createAsyncThunk(
  'packSlice/deletePack',
  async (idPack: string, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(isSpinAppLoading(true))
      dispatch(isCloseModal(false))
      await packsListAPI.deletePack(idPack)

      const state = getState() as RootStoreType
      const packParamsNow = state.packParams
      const isOpenCardsPage = state.card.cards.length !== 0
      if (isOpenCardsPage) {
        dispatch(removeCardData())
        dispatch(removeCardParams())
      }
      dispatch(getPackData(packParamsNow))
    } catch (e) {
      return setErrorResponse(e, rejectWithValue)
    } finally {
      dispatch(isSpinAppLoading(false))
    }
  }
)
