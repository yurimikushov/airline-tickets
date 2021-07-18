import { combineReducers } from 'redux'
import { IFilter, ISort } from '../../interfaces'
import { ticketsReducer, ITicketsState } from './tickets'
import { filtersReducer } from './filter'
import { sortReducer } from './sort'
import { searchIdReducer } from './searchId'

interface IState {
  tickets: ITicketsState
  filters: IFilter[]
  sort: ISort[]
  searchId: string
}

const rootReducer = combineReducers<IState>({
  tickets: ticketsReducer,
  filters: filtersReducer,
  sort: sortReducer,
  searchId: searchIdReducer,
})

export { rootReducer }
export type { IState, ITicketsState }
