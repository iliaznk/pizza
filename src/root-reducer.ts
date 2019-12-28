import {
  apiProviderName,
  apiProviderReducer,
} from 'services/api-provider/api-provider.slice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  [apiProviderName]: apiProviderReducer,
})

export type RootState = ReturnType<typeof rootReducer>
