import { FILTER as cFILTER } from '../../constants'
import { IFilter } from '../../interfaces'
import { IUpdateFiltersAction } from '../actions'
import { FILTER as aFILTER } from '../actionTypes'

const initialState: IFilter[] = [
  { title: cFILTER.ALL, stops: -1, checked: false },
  { title: cFILTER.ZERO, stops: 0, checked: true },
  { title: cFILTER.ONE, stops: 1, checked: false },
  { title: cFILTER.TWO, stops: 2, checked: false },
  { title: cFILTER.THREE, stops: 3, checked: false },
]

const filtersReducer = (
  state: IFilter[] = initialState,
  action: IUpdateFiltersAction
) => {
  switch (action.type) {
    case aFILTER.UPDATE:
      return action.payload.filters
    default:
      return state
  }
}

export { filtersReducer }
