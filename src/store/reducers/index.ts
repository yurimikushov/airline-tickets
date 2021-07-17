import { combineReducers } from 'redux'
import { ISort } from '../../interfaces'
import { ticketsReducer, ITicketsState } from './tickets'
import { filtersReducer, IFilter } from './filter'
import { sortReducer } from './sort'

interface IState {
  tickets: ITicketsState
  filters: IFilter[]
  sort: ISort[]
}

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filters: filtersReducer,
  sort: sortReducer,
})

export { rootReducer }
export type { IState, ITicketsState }
