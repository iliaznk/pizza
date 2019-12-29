import { Route, Switch } from 'react-router-dom'
import { CartContainerConnected } from '../cart/cart.container'
import { PizzaListContainerConnected } from '../pizza-list/pizza-list.container'
import React from 'react'

export const RouterSwitch: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PizzaListContainerConnected />
      </Route>
      <Route path="/cart">
        <CartContainerConnected />
      </Route>
    </Switch>
  )
}
