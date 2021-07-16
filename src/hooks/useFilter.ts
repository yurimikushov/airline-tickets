import { useDispatch, useSelector } from 'react-redux'
import { IFilter } from '../interfaces'
import { IState } from '../store'
import { toggleFilter } from '../store/actions/filters'

const useFilter = (): [IFilter[], (filter: IFilter) => void] => {
  const filters = useSelector((state: IState) => state.filters)
  const dispatch = useDispatch()

  return [filters, (filter: IFilter) => dispatch(toggleFilter(filter))]
}

export { useFilter }
