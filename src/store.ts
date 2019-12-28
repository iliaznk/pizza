import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiProviderMiddleware } from './services/api-provider/api-provider.middleware'
import { rootReducer } from 'root-reducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), apiProviderMiddleware],
})

//@ts-ignore
if (process.env.NODE_ENV === 'development' && module.hot) {
  //@ts-ignore
  module.hot.accept('root-reducer', () => {
    const newRootReducer = require('root-reducer').default
    store.replaceReducer(newRootReducer)
  })
}
