import { createSlice } from '@reduxjs/toolkit'

const SLICE_NAME = 'checkout'

type CheckoutState = {
  isHidden: boolean
}

const checkoutSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    isHidden: true,
  } as CheckoutState,
  reducers: {
    modalOpen: (state): void => {
      state.isHidden = false
    },
    modalClose: (state): void => {
      state.isHidden = true
    },
  },
})

export const {
  actions: checkoutActions,
  reducer: checkoutReducer,
  name: checkoutName,
} = checkoutSlice
