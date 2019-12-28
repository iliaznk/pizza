import { apiProviderSelector } from '../../services/api-provider/api-provider.selectors'
import { createSelector } from 'reselect'

export const pizzaListApiSelector = createSelector(
  apiProviderSelector,
  (state) => {
    return {}
  },
)
