import { Link } from 'react-router-dom'
import React from 'react'

const Header: React.FC = () => {
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
        <div className="absolute right-1 top-1 small-caps sans-serif f4 fw3">
          <Link to="/cart">
            cart: <span>3 pizzas ($25)</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export { Header }
