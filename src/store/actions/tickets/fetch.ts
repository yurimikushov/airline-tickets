import { TICKETS } from '../../actionTypes'

interface ITicketsFetchAction {
  type: TICKETS.FETCH
}

const fetchTickets = (): ITicketsFetchAction => ({ type: TICKETS.FETCH })

export { fetchTickets }
