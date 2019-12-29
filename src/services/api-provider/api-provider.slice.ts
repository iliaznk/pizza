import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const API_PROVIDER_NAME = 'apiProvider'

export enum ApiProviderMethod {
  FETCH = 'FETCH',
  CREATE = 'CREATE',
}

export enum ApiProviderResource {
  PIZZA_LIST = '/pizza',
}

export type ApiProviderActionPayload = {
  resource: string
  method: ApiProviderMethod
  data?: any
  error?: any
}

export type ApiProviderMethodState = {
  isLoading: boolean
  data?: any
  error?: any
}

export type ApiProviderResourceState = {
  [method in ApiProviderMethod]: ApiProviderMethodState
}

export type ApiProviderState = {
  [resource in ApiProviderResource]: ApiProviderResourceState
}

const apiProviderSlice = createSlice({
  name: API_PROVIDER_NAME,
  initialState: {} as ApiProviderState,
  reducers: {
    requestStart: (
      state,
      action: PayloadAction<ApiProviderActionPayload>,
    ): void => {
      const { resource, method } = action.payload

      if (!state[resource]) {
        state[resource] = {
          [method]: {} as ApiProviderMethodState,
        }
      }

      state[resource][method] = {
        isLoading: true,
      }
    },
    requestSuccess: (
      state,
      action: PayloadAction<ApiProviderActionPayload>,
    ): void => {
      const { resource, method, data } = action.payload
      state[resource][method] = {
        isLoading: false,
        data,
      }
    },
    requestFailure: (
      state,
      action: PayloadAction<ApiProviderActionPayload>,
    ): void => {
      const { resource, method, error } = action.payload
      state[resource][method] = {
        isLoading: false,
        error,
      }
    },
  },
})

export const {
  actions: apiProviderActions,
  reducer: apiProviderReducer,
  name: apiProviderName,
} = apiProviderSlice
