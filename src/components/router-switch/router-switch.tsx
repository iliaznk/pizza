import { Route, Switch } from 'react-router-dom'
import { Cart } from 'components/cart/cart'
import { PizzaListContainerConnected } from '../pizza-list/pizza-list.container'
import React from 'react'

export const RouterSwitch: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PizzaListContainerConnected />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  )
}
