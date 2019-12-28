import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from 'root-reducer'

export const store = configureStore({
  reducer: rootReducer,
})

//@ts-ignore
if (process.env.NODE_ENV === 'development' && module.hot) {
  //@ts-ignore
  module.hot.accept('root-reducer', () => {
    const newRootReducer = require('root-reducer').default
    store.replaceReducer(newRootReducer)
  })
}
