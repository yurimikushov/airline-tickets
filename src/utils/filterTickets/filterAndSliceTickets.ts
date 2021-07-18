import { TICKETS_BATCH_SIZE } from '../../constants'
import { IFilter, ITicket } from '../../interfaces'
import { isSuitableTicket } from './isSuitableTicket'

const filterAndSliceTickets = (
  tickets: ITicket[],
  filters: IFilter[]
): ITicket[] => {
  const filteredTickets: ITicket[] = []

  for (const ticket of tickets) {
    if (filteredTickets.length === TICKETS_BATCH_SIZE) {
      break
    }

    if (isSuitableTicket(ticket, filters)) {
      filteredTickets.push(ticket)
    }
  }

  return filteredTickets
}

export { filterAndSliceTickets }
