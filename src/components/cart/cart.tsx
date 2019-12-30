import React, { ReactElement } from 'react'
import { CURRENCY_ITEMS } from 'components/common/header/header'
import { CartItemCard } from './cart-item-card'
import { Checkout } from './checkout/checkout'
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
        <p className="mv0">
          pizza:{' '}
          <span className="blue f2">
            {symbol}
            {totalItems}
          </span>
        </p>
        <p className="mv0">
          delivery:{' '}
          <span className="blue f2">
            {symbol}
            {DELIVERY.price[currency]}
          </span>
        </p>
        <hr className="b--light-blue b--dashed" />
        <p className="mt0 f2 fw6">
          total:{' '}
          <span className="fw7 hot-pink f1">
            {symbol}
            {totalItems + DELIVERY.price[currency]}
          </span>
        </p>
      </div>
    )
  }

  const renderItems = (): ReactElement[] | ReactElement => {
    return data.map((item) => {
      totalItems += item.qty * item.price[currency]
      return <CartItemCard {...item} key={item.name} />
    })
  }

  if (isEmpty) {
    return (
      <div className="w-100 mb3 mh5">
        <div className="tc mt4 f2 fw4 avenir blue">Your cart is empty :(</div>
      </div>
    )
  }

  return (
    <>
      <div className="w-100 mb3 mh5">
        {renderItems()}
        {renderTotal()}
        <Checkout />
      </div>
    </>
  )
}
