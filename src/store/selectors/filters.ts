import { IState } from '../reducers'

const filtersSelector = (state: IState) => state.filters

const checkedFiltersSelector = (state: IState) => {
  return state.filters.filter((filter) => filter.checked)
}

export { filtersSelector, checkedFiltersSelector }
