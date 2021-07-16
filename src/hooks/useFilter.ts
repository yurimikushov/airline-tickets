import { useDispatch, useSelector } from 'react-redux'
import { IFilter } from '../interfaces'
import { IState, updateFilters } from '../store'

const useFilter = (): [IFilter[], (title: string) => void] => {
  const filters = useSelector((state: IState) => state.filters)

  const dispatch = useDispatch()

  const update = (filters: IFilter[]): void => {
    dispatch(updateFilters(filters))
  }

  const updateFiltersHandler = (title: string): void => {
    const filterAll = filters[0]

    if (title === filterAll.title) {
      if (!filterAll.checked) {
        return update(
          filters.map((filter) => ({
            ...filter,
            checked: true,
          }))
        )
      }

      return update(
        filters.map((filter) => ({
          ...filter,
          checked:
            filter.title === filterAll.title ? !filter.checked : filter.checked,
        }))
      )
    }

    update(
      filters.map((filter) => ({
        ...filter,
        checked: filter.title === title ? !filter.checked : filter.checked,
      }))
    )
  }

  return [filters, updateFiltersHandler]
}

export { useFilter }
