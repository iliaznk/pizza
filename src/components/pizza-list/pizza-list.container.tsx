import { ConnectedProps, connect } from 'react-redux'
import React, { ReactElement } from 'react'
import { PizzaList } from './pizza-list'
import { RootState } from 'root-reducer'
import { Spinner } from 'components/common/spinner/spinner'
import { cartActions } from 'components/cart/cart.slice'
import { fetchPizzaList } from './pizza-list.actions'
import { pizzaListSelector } from './pizza-list.selectors'

type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps

export class PizzaListContainer extends React.Component<Props> {
  componentDidMount(): void {
    const { data } = this.props.api

    if (!data) {
      this.props.fetchPizzaList()
    }
  }

  render(): ReactElement | null {
    const { isLoading = false, data } = this.props.api
    const { handleItemAdd } = this.props

    if (isLoading) {
      return <Spinner />
    }

    if (!data) {
      return null
    }

    return <PizzaList data={data} onItemAdd={handleItemAdd} />
  }
}

const mapDispatch = {
  fetchPizzaList,
  handleItemAdd: cartActions.itemAdd,
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => {
  return {
    api: pizzaListSelector(state),
  }
}

const connector = connect(mapState, mapDispatch)
export const PizzaListContainerConnected = connector(PizzaListContainer)
