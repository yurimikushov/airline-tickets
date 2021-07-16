import { IFilter } from '../interfaces'
import { isAllFilter } from './isAllFilter'

const isAllBasicFiltersChecked = (filters: IFilter[]): boolean => {
  return filters.every((filter) => {
    if (isAllFilter(filter)) {
      return true
    }

    return filter.checked
  })
}

export { isAllBasicFiltersChecked }
