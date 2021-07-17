import { IFilter } from '../../interfaces'
import { IUpdateAction } from '../actions'
import { FILTER } from '../actionTypes'

const initialState: IFilter[] = [
  { title: 'Все', value: -1, checked: false },
  { title: 'Без пересадок', value: 0, checked: true },
  { title: '1 пересадка', value: 1, checked: false },
  { title: '2 пересадки', value: 2, checked: false },
  { title: '3 пересадки', value: 3, checked: false },
]

const filtersReducer = (
  state: IFilter[] = initialState,
  action: IUpdateAction
) => {
  switch (action.type) {
    case FILTER.UPDATE:
      return action.payload.filters
    default:
      return state
  }
}

export { filtersReducer }
