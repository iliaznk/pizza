import {
  ApiProviderMethod,
  ApiProviderResource,
  RequestActionPayload,
  apiProviderActions,
} from './api-provider.slice'
import { Middleware, PayloadAction } from '@reduxjs/toolkit'

const BASE_URL = 'https://example.com'

const pizzaList = [
  {
    id: '1',
    name: 'Pepperoni',
    price: {
      eur: 10,
      usd: 12,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese and pepperoni.',
    image: 'pizza-pepperoni.png',
  },
  {
    id: '2',
    name: 'Alfredo',
    price: {
      eur: 12,
      usd: 14,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with creamy Alfredo sauce and 100% real cheese.',
    image: 'pizza-alfredo.png',
  },
  {
    id: '3',
    name: 'Veggie',
    price: {
      eur: 15,
      usd: 18,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, red onions, green peppers, mushrooms and black olives.',
    image: 'pizza-veggie.png',
  },
  {
    id: '4',
    name: 'Ham & Cheddar',
    price: {
      eur: 13,
      usd: 15,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with Parmesan Ranch sauce, 100% real cheese, 100% real cheddar and ham.',
    image: 'pizza-ham-cheese.png',
  },
  {
    id: '5',
    name: 'Hawaiian',
    price: {
      eur: 13,
      usd: 15,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, ham and pineapple.',
    image: 'pizza-hawaiian.png',
  },
  {
    id: '6',
    name: 'Meat Eater',
    price: {
      eur: 11,
      usd: 13,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, pepperoni, ham, beef and sausage.',
    image: 'pizza-meat-eater.png',
  },
  {
    id: '7',
    name: 'Supreme',
    price: {
      eur: 10,
      usd: 12,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, pepperoni, beef, sausage, red onions, green peppers and mushrooms.',
    image: 'pizza-supreme.png',
  },
  {
    id: '8',
    name: 'Cheese',
    price: {
      eur: 11,
      usd: 13,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce and 100% real cheese.',
    image: 'pizza-cheese.png',
  },
]

const METHOD_MAP = {
  [ApiProviderMethod.FETCH]: 'GET',
}

const RESPONSE_MAP = {
  get [ApiProviderResource.PIZZA_LIST](): string {
    return JSON.stringify(pizzaList)
  },
}

function _fetch(url: string, data: RequestInit): Promise<Response> {
  const urlObj = new URL(url)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Response(RESPONSE_MAP[urlObj.pathname]))
    }, 1500)
  })
}

const apiProviderMiddleware: Middleware = ({ dispatch }) => (next) => async (
  action: PayloadAction<RequestActionPayload>,
): Promise<any> => {
  const result = next(action)

  if (action.type !== apiProviderActions.requestStart.type) {
    return result
  }

  const { resource, method, data } = action.payload
  const body = data ? JSON.stringify(data) : undefined
  const url = BASE_URL + resource

  const response = await _fetch(url, {
    method: METHOD_MAP[method],
    body,
  })
  const jsonBody = await response.json()
  dispatch(
    apiProviderActions.requestSuccess({
      resource,
      method,
      data: jsonBody,
    }),
  )

  return result
}

export { apiProviderMiddleware }
