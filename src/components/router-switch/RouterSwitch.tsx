import { Route, Switch } from 'react-router-dom'
import { Cart } from '../cart/Cart'
import { PizzaList } from '../pizza-list/PizzaList'
import React from 'react'

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

const RouterSwitch: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PizzaList data={pizzaList} />
      </Route>
      <Route path="/cart">
        <Cart data={pizzaList} />
      </Route>
    </Switch>
  )
}

export { RouterSwitch }
