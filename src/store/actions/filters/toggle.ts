import { FILTER } from '../../actionTypes'

interface IToggleAction {
  type: FILTER.TOGGLE
  payload: {
    title: string
  }
}

const toggleFilter = (title: string): IToggleAction => ({
  type: FILTER.TOGGLE,
  payload: {
    title,
  },
})

export { toggleFilter }
export type { IToggleAction }
