import { IFilter } from '../../../interfaces'
import { FILTER } from '../../actionTypes'

interface IToggleAction {
  type: FILTER.TOGGLE
  payload: {
    filter: IFilter
  }
}

const toggleFilter = (filter: IFilter): IToggleAction => ({
  type: FILTER.TOGGLE,
  payload: {
    filter,
  },
})

export { toggleFilter }
export type { IToggleAction }
