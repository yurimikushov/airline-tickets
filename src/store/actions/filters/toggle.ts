import { IFilter } from '../../../interfaces'
import { FILTER } from '../../actionTypes'

interface IToggleFilterAction {
  type: FILTER.TOGGLE
  payload: {
    filter: IFilter
  }
}

const toggleFilter = (filter: IFilter): IToggleFilterAction => ({
  type: FILTER.TOGGLE,
  payload: {
    filter,
  },
})

export { toggleFilter }
export type { IToggleFilterAction }
