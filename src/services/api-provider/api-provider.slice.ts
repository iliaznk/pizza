import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const METHOD = {
  FETCH: 'FETCH',
  CREATE: 'CREATE',
}

const STATUS = {
  PENDING: 'PENDING',
  DONE: 'DONE',
}

type ApiProviderMethod = keyof typeof METHOD

type ApiProviderStatus = keyof typeof STATUS

type ApiProviderActionPayload = {
  resource: string
  method: ApiProviderMethod
  error?: string
}

type ApiProviderState = {
  [resource: string]: {
    [key in keyof ApiProviderMethod]: {
      status: ApiProviderStatus
      error?: string
    }
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
      state[resource][method]['status'] = STATUS.PENDING
    },
    requestEnd: (
      state,
      action: PayloadAction<ApiProviderActionPayload>,
    ): void => {
      const { resource, method, error } = action.payload
      state[resource][method] = {
        status: STATUS.DONE,
        error,
      }
    },
  },
})

export { apiProviderSlice }
