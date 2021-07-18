import { ITicket } from '../../interfaces'
import {
  ITicketsStartFetchAction,
  ITicketsEndFetchAction,
  ITicketsAddAction,
} from '../actions'
import { TICKETS } from '../actionTypes'

interface ITicketsState {
  tickets: ITicket[]
  isPending: boolean
  error: string
  stop: boolean
}

const initialState: ITicketsState = {
  tickets: [],
  isPending: false,
  error: '',
  stop: false
}

const ticketsReducer = (
  state: ITicketsState = initialState,
  action: ITicketsStartFetchAction | ITicketsEndFetchAction | ITicketsAddAction
) => {
  switch (action.type) {
    case TICKETS.FETCH_START:
      return {
        ...state,
        isPending: true,
        error: '',
      }
    case TICKETS.FETCH_END:
      return {
        ...state,
        tickets: action.payload.error ? [] : state.tickets,
        isPending: false,
        error: action.payload.error,
      }
    case TICKETS.ADD:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        stop: action.payload.stop
      }
    default:
      return state
  }
}

export { ticketsReducer }
export type { ITicketsState }
