import {
  apiProviderName,
  apiProviderReducer,
} from 'services/api-provider/api-provider.slice'
import { cartName, cartReducer } from 'components/cart/cart.slice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  [apiProviderName]: apiProviderReducer,
  [cartName]: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>
