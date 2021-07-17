import { FILTER } from '../constants'
import { IFilter } from '../interfaces'

const isAllFilter = (filter: IFilter): boolean => {
  return filter.title === FILTER.ALL
}

export { isAllFilter }
