import { useDispatch, useSelector } from 'react-redux'
import { ISort } from '../interfaces'
import { updateSort } from '../store/actions'
import { sortSelector } from '../store/selectors'

const useSort = (): [ISort[], (title: string) => void] => {
  const sort = useSelector(sortSelector)
  const dispatch = useDispatch()

  const update = (sort: ISort[]) => dispatch(updateSort(sort))

  const sortHandler = (title: string): void => {
    update(
      sort.map((sort) => {
        sort.checked = sort.title === title
        return sort
      })
    )
  }

  return [sort, sortHandler]
}

export { useSort }
