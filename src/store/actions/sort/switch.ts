import { SORT } from '../../actionTypes'

interface ISwitchSortAction {
  type: SORT.SWITCH
  payload: {
    sort: string
  }
}

const switchSort = (sort: string): ISwitchSortAction => ({
  type: SORT.SWITCH,
  payload: {
    sort,
  },
})

export { switchSort }
export type { ISwitchSortAction }
