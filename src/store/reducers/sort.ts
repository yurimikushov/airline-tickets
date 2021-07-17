import { ISort } from '../../interfaces'
import { IUpdateSortAction } from '../actions'
import { SORT } from '../actionTypes'

const initialState: ISort[] = [
  { title: 'Самый дешевый', checked: false },
  { title: 'Самый быстрый', checked: false },
  { title: 'Оптимальный', checked: true },
]

const sortReducer = (
  state: ISort[] = initialState,
  action: IUpdateSortAction
) => {
  switch (action.type) {
    case SORT.UPDATE:
      return action.payload.sort
    default:
      return state
  }
}

export { sortReducer }
