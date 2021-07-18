import { TICKETS_BATCH_SIZE } from '../constants'
import { IFilter, ITicket } from '../interfaces'
import { isAllFilter } from './isAllFilter'

const filterAndSliceTickets = (
  tickets: ITicket[],
  filters: IFilter[]
): ITicket[] => {
  const isSuitableTicket = (ticket: ITicket): boolean => {
    for (const filter of filters) {
      if (isAllFilter(filter)) {
        return true
      }

      for (const segment of ticket.segments) {
        if (segment.stops.length === filter.stops) {
          return true
        }
      }
    }

    return false
  }

  const filteredTickets: ITicket[] = []

  for (const ticket of tickets) {
    if (filteredTickets.length === TICKETS_BATCH_SIZE) {
      break
    }

    if (isSuitableTicket(ticket)) {
      filteredTickets.push(ticket)
    }
  }

  return filteredTickets
}

export { filterAndSliceTickets }
