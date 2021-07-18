import { IFilter, ITicket } from '../../interfaces'
import { isAllFilter } from '../isAllFilter'

const isSuitableTicket = (ticket: ITicket, filters: IFilter[]): boolean => {
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

export { isSuitableTicket }
