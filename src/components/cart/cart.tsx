import React, { ReactElement } from 'react'
import { CURRENCY_ITEMS } from 'components/common/header/header'
import { CartItemCard } from './cart-item-card'
import { cartListSelector } from './cart.selectors'
import { currencySelector } from 'components/common/header/currency.selectors'
import { useSelector } from 'react-redux'

const DELIVERY = {
  price: {
    eur: 5,
    usd: 6,
  },
}

export const Cart: React.FC = (props) => {
  let totalItems = 0
  const currency = useSelector(currencySelector)
  //@ts-ignore
  const { symbol } = CURRENCY_ITEMS.find((i) => i.id === currency)
  const data = useSelector(cartListSelector)
  const isEmpty = !data.length

  const renderTotal = (): ReactElement | null => {
    if (isEmpty) {
      return null
    }

    return (
      <div className="f3 fw3 near-black small-caps avenir tr">
        <p className="mb1">
          Delivery: {symbol}
          {DELIVERY.price[currency]}
        </p>
        <p className="mt0 f2 fw6">
          Total:{' '}
          <span className="fw7 hot-pink">
            {symbol}
            {totalItems + DELIVERY.price[currency]}
          </span>
        </p>
      </div>
    )
  }

  const renderItems = (): ReactElement[] | ReactElement => {
    if (isEmpty) {
      return (
        <div className="tc mt4 f2 fw4 avenir blue">Your cart is empty :(</div>
      )
    }

    return data.map((item) => {
      totalItems += item.qty * item.price[currency]
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
