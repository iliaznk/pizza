import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const CURRENCY_NAME = 'currency'

export enum Currency {
  USD = 'usd',
  EUR = 'eur',
}

const currencySlice = createSlice({
  name: CURRENCY_NAME,
  initialState: Currency.USD,
  reducers: {
    switch: (state, action: PayloadAction<Currency>): Currency => {
      return action.payload
    },
  },
})

export const {
  actions: currencyActions,
  reducer: currencyReducer,
  name: currencyName,
} = currencySlice
