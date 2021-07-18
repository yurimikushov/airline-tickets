import { SORT } from '../constants'
import { ISort, ITicket } from '../interfaces'
import { calcTotalFlightDuration } from './calcFlightDuration'

const sortTickets = (tickets: ITicket[], sort: ISort): ITicket[] => {
  switch (sort.title) {
    case SORT.CHEEP:
      return tickets.sort((a, b): number => {
        if (a.price < b.price) {
          return -1
        }

        if (a.price === b.price) {
          return 0
        }

        return 1
      })
    case SORT.FAST:
      return tickets.sort((a, b): number => {
        const aDuration = calcTotalFlightDuration(a)
        const bDuration = calcTotalFlightDuration(b)

        if (aDuration < bDuration) {
          return -1
        }

        if (aDuration === bDuration) {
          return 0
        }

        return 1
      })
    case SORT.OPTIMAL:
      return tickets
    default:
      return tickets
  }
}

export { sortTickets }
