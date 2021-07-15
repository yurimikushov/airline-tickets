import { ITicket } from '../../interfaces'
import { IAddTicketsAction } from '../actions'
import { TICKETS_ADD } from '../actionTypes'

const ticketsReducer = (
  state: ITicket[] = [],
  { type, payload }: IAddTicketsAction
) => {
  switch (type) {
    case TICKETS_ADD:
      return [...state, ...payload.tickets]
    default:
      return state
  }
}

export { ticketsReducer }
