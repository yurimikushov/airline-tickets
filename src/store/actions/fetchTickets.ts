import { TICKETS_FETCH } from '../actionTypes'

interface IFetchTicketsAction {
  type: string
}

const fetchTickets = (): IFetchTicketsAction => ({ type: TICKETS_FETCH })

export { fetchTickets }
