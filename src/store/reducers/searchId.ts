import { ISetSearchIdAction } from '../actions'
import { SEARCH_ID } from '../actionTypes'

const initialState = ''

const searchIdReducer = (
  state: string = initialState,
  action: ISetSearchIdAction
) => { 
  switch (action.type) {
    case SEARCH_ID.SET:
      return action.payload.searchId
    default:
      return state
  }
}

export { searchIdReducer }
