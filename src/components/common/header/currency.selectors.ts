import { RootState } from 'root-reducer'
import { createSelector } from 'reselect'
import { currencyName } from 'components/common/header/currency.slice'

const selectCurrency = (state: RootState): RootState[typeof currencyName] => {
  return state[currencyName]
}

export const currencySelector = createSelector(selectCurrency, (state) => state)
