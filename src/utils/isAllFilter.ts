import { IFilter } from '../interfaces'

const isAllFilter = (title: string, filters: IFilter[]): boolean => {
  const allFilter = filters.find(({ title }) => title === 'Все')
  const isAllFilter = title === allFilter?.title

  return isAllFilter
}

export { isAllFilter }
