import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum ApiProviderMethod {
  FETCH = 'FETCH',
  CREATE = 'CREATE',
}

type ApiProviderActionPayload = {
  resource: string
  method: ApiProviderMethod
  data?: any
  error?: any
}

type ApiProviderMethodState = {
  isLoading: boolean
  data?: any
  error?: any
}

type ApiProviderState = {
  [resource: string]: {
    [method: string]: ApiProviderMethodState
  }
}

const apiProviderSlice = createSlice({
  name: 'apiProvider',
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
} = apiProviderSlice
