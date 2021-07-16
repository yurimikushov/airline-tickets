import { useDispatch, useSelector } from 'react-redux'
import { IFilter } from '../interfaces'
import { toggleFilter } from '../store/actions'
import { filtersSelector } from '../store/selectors'

const useFilter = (): [IFilter[], (filter: IFilter) => void] => {
  const filters = useSelector(filtersSelector)
  const dispatch = useDispatch()

  return [filters, (filter: IFilter) => dispatch(toggleFilter(filter))]
}

export { useFilter }
