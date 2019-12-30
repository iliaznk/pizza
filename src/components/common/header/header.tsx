import { CartItem, cartListSelector } from 'components/cart/cart.selectors'
import { Currency, currencyActions } from './currency.slice'
import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { currencySelector } from './currency.selectors'

export const CURRENCY_ITEMS = [
  {
    id: Currency.USD,
    symbol: '$',
  },
  {
    id: Currency.EUR,
    symbol: '€',
  },
]

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const cartList: CartItem[] = useSelector(cartListSelector)
  const currency = useSelector(currencySelector)

  const getCartQty = (): number => {
    let qty = 0

    if (!cartList.length) {
      return qty
    }

    cartList.forEach((i) => {
      qty += i.qty
    })

    return qty
  }

  const renderCurrencyButtons = (): ReactElement[] => {
    const clNameActive = 'b--none bg-transparent fw8 f2 avenir blue'
    const clName =
      'b--none bg-transparent fw8 f2 avenir black-20 hover-blue pointer link'
    return CURRENCY_ITEMS.map((b) => {
      return (
        <button
          className={b.id === currency ? clNameActive : clName}
          key={b.id}
          disabled={b.id === currency}
          onClick={(): void => {
            dispatch(currencyActions.switch(b.id))
          }}
        >
          {b.symbol}
        </button>
      )
    })
  }

  return (
    <header className="pv3 fixed top-0 w-100 z-999">
      <nav className="tc flex items-center justify-center">
        <div className="absolute left-1 top-1">{renderCurrencyButtons()}</div>
        <Link to="/" className="no-underline">
          <span className="fw9 f1 ttu light-blue avenir">
            pi
            <span className="fw9 i hot-pink">
              Z<span className="o-50">Z</span>
            </span>
            a
          </span>
        </Link>
        <div className="absolute right-2 top-1 small-caps avenir fw6 f3 o-60 glow">
          <Link to="/cart" className="blue no-underline">
            cart: <span className="hot-pink">{getCartQty()}</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
