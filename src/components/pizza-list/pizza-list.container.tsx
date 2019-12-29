import {
  ApiProviderMethod,
  ApiProviderResource,
} from '../../services/api-provider/api-provider.slice'
import { ConnectedProps, connect } from 'react-redux'
import React, { ReactElement } from 'react'
import { PizzaList } from './pizza-list'
import { RootState } from 'root-reducer'
import { Spinner } from '../common/spinner/spinner'
import { fetchPizzaList } from './pizza-list.actions'
import { makeApiResourceMethodSelector } from '../../services/api-provider/api-provider.selectors'

type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps

export class PizzaListContainer extends React.Component<Props> {
  componentDidMount(): void {
    const { data } = this.props.api

    if (!data) {
      this.props.fetchPizzaList()
    }
  }

  render(): ReactElement {
    const { isLoading = false, data } = this.props.api

    if (!data || isLoading) {
      return <Spinner />
    }

    return <PizzaList data={data} />
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
