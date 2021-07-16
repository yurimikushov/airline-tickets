import { IFilter } from '../../interfaces'
import { IUpdateAction } from '../actions'
import { FILTER } from '../actionTypes'

const initialState: IFilter[] = [
  { title: 'Все', checked: false },
  { title: 'Без пересадок', checked: true },
  { title: '1 пересадка', checked: true },
  { title: '2 пересадки', checked: false },
  { title: '3 пересадки', checked: false },
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
export type { IFilter }
