import { ISort } from '../../../interfaces'
import { SORT } from '../../actionTypes'

interface ISwitchSortAction {
  type: SORT.SWITCH
  payload: {
    sort: ISort
  }
}

const switchSort = (sort: ISort): ISwitchSortAction => ({
  type: SORT.SWITCH,
  payload: {
    sort,
  },
})

export { switchSort }
export type { ISwitchSortAction }
