import { IFilter } from '../interfaces'
import { FILTER } from '../enums'

const isAllFilter = (filter: IFilter): boolean => {
  return filter.title === FILTER.ALL
}

export { isAllFilter }
