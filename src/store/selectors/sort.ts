import { ISort } from '../../interfaces'
import { SORT } from '../../constants'
import { IState } from '../reducers'

const sortSelector = (state: IState): ISort[] => state.sort

const checkedSortSelector = (state: IState): ISort => {
  return (
    state.sort.find((sort) => sort.checked) || {
      title: SORT.PRICE,
      checked: true,
    }
  )
}

export { sortSelector, checkedSortSelector }
