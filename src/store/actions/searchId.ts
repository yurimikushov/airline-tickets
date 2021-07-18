import { SEARCH_ID } from '../actionTypes'

interface ISetSearchIdAction {
  type: SEARCH_ID.SET
  payload: {
    searchId: string
  }
}

const setSearchId = (searchId: string): ISetSearchIdAction => ({
  type: SEARCH_ID.SET,
  payload: {
    searchId,
  },
})

export { setSearchId }
export type { ISetSearchIdAction }
