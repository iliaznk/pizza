import React, { ReactElement } from 'react'
import { CartItem } from './CartItem'
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
    <>
      <div className="w-100 mb3">
        {data.map((item) => {
          return <CartItem {...item} />
        })}
      </div>
      {_renderTotal()}
    </>
  )
}

export { Cart }
