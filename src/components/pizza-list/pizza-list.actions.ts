import {
  ApiProviderMethod,
  apiProviderActions,
} from 'services/api-provider/api-provider.slice'
import { Dispatch } from '@reduxjs/toolkit'

export const fetchPizzaList = () => (dispatch: Dispatch): void => {
  dispatch(
    apiProviderActions.requestStart({
      resource: '/pizzas',
      method: ApiProviderMethod.FETCH,
    }),
  )
}
