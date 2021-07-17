import { ISort } from '../../interfaces'
import { SORT as eSORT } from '../../enums'
import { IUpdateSortAction } from '../actions'
import { SORT as aSORT } from '../actionTypes'

const initialState: ISort[] = [
  { title: eSORT.CHEEP, checked: false },
  { title: eSORT.FAST, checked: false },
  { title: eSORT.OPTIMAL, checked: true },
]

const sortReducer = (
  state: ISort[] = initialState,
  action: IUpdateSortAction
) => {
  switch (action.type) {
    case aSORT.UPDATE:
      return action.payload.sort
    default:
      return state
  }
}

export { sortReducer }
