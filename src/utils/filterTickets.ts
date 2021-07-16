import { IFilter, ITicket } from '../interfaces'
import { isAllFilter } from './isAllFilter'

const filterTickets = (tickets: ITicket[], filters: IFilter[]): ITicket[] => {
  const filter = (ticket: ITicket): boolean => {
    for (const filter of filters) {
      if (isAllFilter(filter)) {
        return true
      }

      for (const segment of ticket.segments) {
        if (segment.stops.length === filter.value) {
          return true
        }
      }
    }

    return false
  }

  return tickets.filter(filter)
}

export { filterTickets }
