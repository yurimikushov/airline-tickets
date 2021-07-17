import { combineReducers } from 'redux'
import { IFilter, ISort } from '../../interfaces'
import { ticketsReducer, ITicketsState } from './tickets'
import { filtersReducer } from './filter'
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
