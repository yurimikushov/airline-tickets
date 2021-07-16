import { IFilter } from '../interfaces'

const isAllFilter = (filter: IFilter): boolean => {
  return filter.value === -1
}

export { isAllFilter }
