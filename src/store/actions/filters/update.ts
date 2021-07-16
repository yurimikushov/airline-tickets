import { IFilter } from '../../../interfaces'
import { FILTER } from '../../actionTypes'

interface IUpdateAction {
  type: FILTER.UPDATE
  payload: {
    filters: IFilter[]
  }
}

const updateFilters = (filters: IFilter[]): IUpdateAction => ({
  type: FILTER.UPDATE,
  payload: {
    filters,
  },
})

export { updateFilters }
export type { IUpdateAction }
