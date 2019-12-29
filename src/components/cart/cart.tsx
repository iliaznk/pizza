import React, { ReactElement } from 'react'
import { CartItem } from './cart.selectors'
import { CartItemCard } from './cart-item-card'

type Props = {
  data: CartItem[]
}

export const Cart: React.FC<Props> = (props) => {
  const { data } = props

  const _renderTotal = (): ReactElement => {
    return <div>TOTAL</div>
  }

  return (
    <div className="w-100 mb3 mh5">
      {data.map((item) => {
        return <CartItemCard {...item} key={item.name} />
      })}
      {_renderTotal()}
    </div>
  )
}
