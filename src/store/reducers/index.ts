import { combineReducers } from 'redux'
import { ITicket } from '../../interfaces'
import { ticketsReducer } from './tickets'

interface IState {
  tickets: ITicket[]
}

const rootReducer = combineReducers<IState>({
  tickets: ticketsReducer,
})

export { rootReducer }
export type { IState }
