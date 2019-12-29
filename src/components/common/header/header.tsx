import { CartItem, cartListSelector } from 'components/cart/cart.selectors'
import { Link } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

export const Header: React.FC = () => {
  const cartList: CartItem[] = useSelector(cartListSelector)

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

  return (
    <header className="pv3">
      <nav className="tc flex items-center justify-center">
        <Link to="/" className="no-underline">
          <span className="fw9 f1 ttu light-blue avenir">
            pi
            <span className="fw9 i hot-pink">
              Z<span className="o-50">Z</span>
            </span>
            a
          </span>
        </Link>
        <div className="absolute right-2 top-1 small-caps sans-serif fw3 f4">
          <Link to="/cart" className="blue no-underline underline-hover">
            cart: <span className="hot-pink">{getCartQty()}</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
