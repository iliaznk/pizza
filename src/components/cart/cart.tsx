import React, { ReactElement } from 'react'
import { CartItem } from './cart-item'
import { PizzaItem } from '../../types'

type Props = {
  data: PizzaItem[]
}

const Cart: React.FC<Props> = (props) => {
  const { data } = props

  const _renderTotal = (): ReactElement => {
    return <div>TOTAL</div>
  }

  return (
    <div className="w-100 mb3 mh5">
      {data.map((item) => {
        return <CartItem {...item} key={item.name} />
      })}
      {_renderTotal()}
    </div>
  )
}

export { Cart }
