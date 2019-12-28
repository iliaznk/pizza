import {
  ApiProviderMethod,
  ApiProviderResource,
} from '../../services/api-provider/api-provider.slice'
import { ConnectedProps, connect } from 'react-redux'
import React, { ReactElement } from 'react'
import { PizzaList } from './pizza-list'
import { RootState } from 'root-reducer'
import { fetchPizzaList } from './pizza-list.actions'
import { makeApiResourceMethodSelector } from '../../services/api-provider/api-provider.selectors'

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

type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps

export class PizzaListContainer extends React.Component<Props> {
  componentDidMount(): void {
    this.props.fetchPizzaList()
  }

  render(): ReactElement {
    console.log('PIZZA LIST CONTAINER')
    console.log(this.props)
    return <PizzaList data={pizzaList} />
  }
}

const mapDispatch = {
  fetchPizzaList,
}

const mapState = (state: RootState): any => {
  return {
    api: makeApiResourceMethodSelector(
      ApiProviderResource.PIZZA_LIST,
      ApiProviderMethod.FETCH,
    )(state),
  }
}

const connector = connect(mapState, mapDispatch)

export const PizzaListContainerConnected = connector(PizzaListContainer)
