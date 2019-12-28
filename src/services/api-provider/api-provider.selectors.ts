import {
  ApiProviderMethod,
  ApiProviderMethodState,
  ApiProviderResource,
  ApiProviderResourceState,
  apiProviderName,
} from './api-provider.slice'
import { Selector, createSelector } from 'reselect'
import { RootState } from 'root-reducer'

export const selectApiProvider = (
  state: RootState,
): RootState[typeof apiProviderName] => {
  return state[apiProviderName]
}

export const apiProviderSelector = createSelector(
  selectApiProvider,
  (state) => state,
)

function makeApiResourceMethodSelector(
  resource: ApiProviderResource,
): Selector<RootState, ApiProviderResourceState>

function makeApiResourceMethodSelector(
  resource: ApiProviderResource,
  method: ApiProviderMethod,
): Selector<RootState, ApiProviderMethodState>

function makeApiResourceMethodSelector(
  resource: ApiProviderResource,
  method?: ApiProviderMethod,
): Selector<RootState, ApiProviderResourceState | ApiProviderMethodState> {
  return createSelector(apiProviderSelector, (state) => {
    const resourceData = state[resource]

    if (!method) {
      return resourceData
    }

    if (!resourceData) {
      return resourceData
    }

    return resourceData[method]
  })
}

export { makeApiResourceMethodSelector }
