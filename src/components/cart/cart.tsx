import React, { ReactElement } from 'react'
import { CartItemCard } from './cart-item-card'
import { cartListSelector } from './cart.selectors'
import { useSelector } from 'react-redux'

export const Cart: React.FC = (props) => {
  const data = useSelector(cartListSelector)
  const isEmpty = !data.length

  const renderTotal = (): ReactElement | null => {
    if (isEmpty) {
      return null
    }

    return <div>TOTAL</div>
  }

  const renderItems = (): ReactElement[] | ReactElement => {
    if (isEmpty) {
      return (
        <div className="tc mt4 f2 fw4 avenir blue">Your cart is empty :(</div>
      )
    }

    return data.map((item) => {
      return <CartItemCard {...item} key={item.name} />
    })
  }

  return (
    <div className="w-100 mb3 mh5">
      {renderItems()}
      {renderTotal()}
    </div>
  )
}
