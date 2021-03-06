import { SORT as cSORT } from '../../constants'
import { ISort } from '../../interfaces'
import { IUpdateSortAction } from '../actions'
import { SORT as aSORT } from '../actionTypes'

const initialState: ISort[] = [
  { title: cSORT.PRICE, checked: false },
  { title: cSORT.FLIGHT_DURATION, checked: false },
  { title: cSORT.OPTIMAL, checked: true },
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
