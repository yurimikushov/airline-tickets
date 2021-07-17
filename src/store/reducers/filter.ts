import { IFilter } from '../../interfaces'
import { FILTER as eFILTER } from '../../enums'
import { IUpdateFiltersAction } from '../actions'
import { FILTER as aFILTER } from '../actionTypes'

const initialState: IFilter[] = [
  { title: eFILTER.ALL, value: -1, checked: false },
  { title: eFILTER.ZERO, value: 0, checked: true },
  { title: eFILTER.ONE, value: 1, checked: false },
  { title: eFILTER.TWO, value: 2, checked: false },
  { title: eFILTER.THREE, value: 3, checked: false },
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
