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
}

const initialState: ITicketsState = {
  tickets: [],
  isPending: false,
  error: '',
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
        isPending: false,
        error: action.payload.error,
      }
    case TICKETS.ADD:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
      }
    default:
      return state
  }
}

export { ticketsReducer }
export type { ITicketsState }
