import { combineReducers } from 'redux'
import { ticketsReducer, ITicketsState } from './tickets'

interface IState {
  tickets: ITicketsState
}

const rootReducer = combineReducers({
  tickets: ticketsReducer,
})

export { rootReducer }
export type { IState }
