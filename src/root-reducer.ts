import { apiProviderReducer } from 'services/api-provider/api-provider.slice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  apiProvider: apiProviderReducer,
})
