import { PizzaItem } from '../../types'
import React from 'react'

type Props = PizzaItem

export const PizzaCard: React.FC<Props> = (props) => {
  const { name, price, description, image } = props
  return (
    <article className="bg-white card br3 w-100 h-100 pb3 flex flex-column sans-serif">
      <header>
        <div
          className="ph2 h4 contain bg-center"
          style={{ backgroundImage: `url(images/${image}` }}
        />
        <h2 className="blue small-caps ph4 ma0 fw9">{name}</h2>
      </header>
      <p className="ph4 h-100 mt2 f5 fw4 black-70">{description}</p>
      <footer className="ph4 ttu fw6 f5 flex blue justify-between items-center">
        <span>from</span>
        <span className="f1 fw3 hot-pink">
          <span className="f3 fw3 o-70">$</span>
          {price.usd}
        </span>
        <button className="ttu fw6 bg-animate hover-bg-light-pink blue b--blue br-pill ba bw2 w-40 pv2 db pointer">
          Order
        </button>
      </footer>
    </article>
  )
}
