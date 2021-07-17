import { IFilter } from '../../../interfaces'
import { FILTER } from '../../actionTypes'

interface IUpdateFiltersAction {
  type: FILTER.UPDATE
  payload: {
    filters: IFilter[]
  }
}

const updateFilters = (filters: IFilter[]): IUpdateFiltersAction => ({
  type: FILTER.UPDATE,
  payload: {
    filters,
  },
})

export { updateFilters }
export type { IUpdateFiltersAction }
