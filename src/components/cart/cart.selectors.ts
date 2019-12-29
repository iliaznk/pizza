import { CartState, cartName } from 'components/cart/cart.slice'
import { PizzaItem } from '../pizza-list/pizza-list'
import { RootState } from 'root-reducer'
import { createSelector } from 'reselect'
import { pizzaListSelector } from 'components/pizza-list/pizza-list.selectors'

const selectCart = (state: RootState): RootState[typeof cartName] => {
  return state[cartName]
}

const cartSelector = createSelector(selectCart, (state) => state)

export type CartItem = PizzaItem & {
  qty: number
}

export const cartListSelector = createSelector(
  pizzaListSelector,
  cartSelector,
  (pizzaList, cart: CartState) => {
    const result = [] as CartItem[]

    for (const id of cart) {
      let item = result.find((i) => i.id === id)

      if (!item) {
        item = { ...pizzaList.data.find((i: PizzaItem) => i.id === id) }
        //@ts-ignore
        item.qty = 0
        //@ts-ignore
        result.push(item)
      }

      //@ts-ignore
      item.qty++
    }

    return result
  },
)
