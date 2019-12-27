import { Middleware, PayloadAction } from '@reduxjs/toolkit'

const apiProviderMiddleware: Middleware = () => (store) => (next) => (
  action: PayloadAction,
): any => {
  return next(action)
}

export { apiProviderMiddleware }
