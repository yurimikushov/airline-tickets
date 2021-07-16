import { combineReducers } from 'redux'
import { ticketsReducer, ITicketsState } from './tickets'
import { filtersReducer, IFilter } from './filter'

interface IState {
  tickets: ITicketsState
  filters: IFilter[]
}

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filters: filtersReducer,
})

export { rootReducer }
export type { IState, ITicketsState }
