import React, { ReactElement } from 'react'

const pizzaList = [
  {
    id: '1',
    name: 'Pepperoni',
    price: {
      eur: 10,
      usd: 12,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese and pepperoni.',
    image: 'pizza-pepperoni.png',
  },
  {
    id: '2',
    name: 'Alfredo',
    price: {
      eur: 12,
      usd: 14,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with creamy Alfredo sauce and 100% real cheese.',
    image: 'pizza-alfredo.png',
  },
  {
    id: '3',
    name: 'Veggie',
    price: {
      eur: 15,
      usd: 18,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, red onions, green peppers, mushrooms and black olives.',
    image: 'pizza-veggie.png',
  },
  {
    id: '4',
    name: 'Ham & Cheddar',
    price: {
      eur: 13,
      usd: 15,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with Parmesan Ranch sauce, 100% real cheese, 100% real cheddar and ham.',
    image: 'pizza-ham-cheese.png',
  },
  {
    id: '5',
    name: 'Hawaiian',
    price: {
      eur: 13,
      usd: 15,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, ham and pineapple.',
    image: 'pizza-hawaiian.png',
  },
  {
    id: '6',
    name: 'Meat Eater',
    price: {
      eur: 11,
      usd: 13,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, pepperoni, ham, beef and sausage.',
    image: 'pizza-meat-eater.png',
  },
  {
    id: '7',
    name: 'Supreme',
    price: {
      eur: 10,
      usd: 12,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, pepperoni, beef, sausage, red onions, green peppers and mushrooms.',
    image: 'pizza-supreme.png',
  },
  {
    id: '8',
    name: 'Cheese',
    price: {
      eur: 11,
      usd: 13,
    },
    description:
      'Traditional crust brushed with garlic butter and topped with tomato sauce and 100% real cheese.',
    image: 'pizza-cheese.png',
  },
]

type PizzaCard = {
  name: string
  price: {
    eur: number
    usd: number
  }
  description: string
  image: string
}

const App: React.FC = () => {
  const _renderHeader = (): ReactElement => {
    return (
      <header className="tc pv3">
        <nav>
          <span className="fw3 f1 ttu black-60 avenir">
            pi
            <span className="fw9 i hot-pink">
              Z<span className="o-50">Z</span>
            </span>
            a
          </span>
        </nav>
      </header>
    )
  }

  const _renderPizzaCard = (data: PizzaCard): ReactElement => {
    const { name, price, description, image } = data
    return (
      <article className="card br3 w-100 h-100 pb3 flex flex-column sans-serif">
        <header>
          <div
            className="ph2 h4 contain bg-center"
            style={{ backgroundImage: `url(images/${image}` }}
          />
          <h2 className="small-caps ph4 ma0 fw5 black-70 ">{name}</h2>
        </header>
        <p className="ph4 h-100 mt2 f5 fw4 black-50">{description}</p>
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

  const _renderPizzaList = (data: PizzaCard[]): ReactElement[] => {
    return data.map((item) => {
      return (
        <div className="w-third pa2" key={item.name}>
          {_renderPizzaCard(item)}
        </div>
      )
    })
  }

  return (
    <div className="App sans-serif">
      {_renderHeader()}
      <main className="flex flex-wrap center w-75">
        {_renderPizzaList(pizzaList)}
      </main>
    </div>
  )
}

export default App
