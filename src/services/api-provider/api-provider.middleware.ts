import { Middleware, PayloadAction } from '@reduxjs/toolkit'
import { apiProviderName } from './api-provider.slice'

const apiProviderMiddleware: Middleware = (store) => (next) => (
  action: PayloadAction,
): any => {
  console.log('MIDDLEWARE', apiProviderName)
  return next(action)
}

export { apiProviderMiddleware }
