import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const SLICE_NAME = 'cart'

type ItemId = string

export type CartState = ItemId[]

type ItemActionPayload = ItemId

export const cartSlice = createSlice({
  name: SLICE_NAME,
  initialState: [] as CartState,
  reducers: {
    itemAdd: (state, action: PayloadAction<ItemActionPayload>): void => {
      const { payload } = action
      state.push(payload)
    },
    itemRemove: (state, action: PayloadAction<ItemActionPayload>): void => {
      const { payload } = action
      const index = state.indexOf(payload)
      state.splice(index, 1)
    },
    itemRemoveAll: (
      state,
      action: PayloadAction<ItemActionPayload>,
    ): void | CartState => {
      const { payload } = action
      return state.filter((id) => id !== payload)
    },
  },
})

export const {
  actions: cartActions,
  reducer: cartReducer,
  name: cartName,
} = cartSlice
