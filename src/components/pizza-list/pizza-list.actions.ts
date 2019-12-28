import {
  ApiProviderMethod,
  ApiProviderResource,
  apiProviderActions,
} from 'services/api-provider/api-provider.slice'
import { Dispatch } from '@reduxjs/toolkit'

export const fetchPizzaList = () => (dispatch: Dispatch): void => {
  dispatch(
    apiProviderActions.requestStart({
      resource: ApiProviderResource.PIZZA_LIST,
      method: ApiProviderMethod.FETCH,
    }),
  )
}
