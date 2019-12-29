import {
  ApiProviderMethod,
  ApiProviderResource,
} from 'services/api-provider/api-provider.slice'
import { makeApiResourceMethodSelector } from 'services/api-provider/api-provider.selectors'

export const pizzaListSelector = makeApiResourceMethodSelector(
  ApiProviderResource.PIZZA_LIST,
  ApiProviderMethod.FETCH,
)
