import { useDispatch, useSelector } from 'react-redux'
import { ISort } from '../interfaces'
import { switchSort } from '../store/actions'
import { sortSelector } from '../store/selectors'

const useSort = (): [ISort[], (sort: ISort) => void] => {
  const sort = useSelector(sortSelector)
  const dispatch = useDispatch()

  return [sort, (sort: ISort) => dispatch(switchSort(sort))]
}

export { useSort }
