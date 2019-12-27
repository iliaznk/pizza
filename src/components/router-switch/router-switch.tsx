import { Route, Switch } from 'react-router-dom'
import CartContainer from '../cart/cart.container'
import PizzaListContainer from '../pizza-list/pizza-list.container'
import React from 'react'

const RouterSwitch: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PizzaListContainer />
      </Route>
      <Route path="/cart">
        <CartContainer />
      </Route>
    </Switch>
  )
}

export { RouterSwitch }
