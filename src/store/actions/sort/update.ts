import { ISort } from '../../../interfaces'
import { SORT } from '../../actionTypes'

interface IUpdateSortAction {
  type: SORT.UPDATE
  payload: {
    sort: ISort[]
  }
}

const updateSort = (sort: ISort[]): IUpdateSortAction => ({
  type: SORT.UPDATE,
  payload: {
    sort,
  },
})

export { updateSort }
export type { IUpdateSortAction }
