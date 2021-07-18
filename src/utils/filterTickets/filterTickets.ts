import { IFilter, ITicket } from '../../interfaces'
import { isSuitableTicket } from './isSuitableTicket'

const filterTickets = (tickets: ITicket[], filters: IFilter[]): ITicket[] => {
  return tickets.filter((ticket) => isSuitableTicket(ticket, filters))
}

export { filterTickets }
