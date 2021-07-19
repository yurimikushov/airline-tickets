import { SORT } from '../../constants'
import { ISort, ITicket } from '../../interfaces'
import { calcTotalFlightDuration } from './calcFlightDuration'
import { calcPricePerMinuteFlight } from './calcPricePerMinuteFlight'

const sortByPrice = (a: ITicket, b: ITicket): number => {
  if (a.price < b.price) {
    return -1
  }

  if (a.price === b.price) {
    return 0
  }

  return 1
}

const sortByFlightDuration = (a: ITicket, b: ITicket): number => {
  const aDuration = calcTotalFlightDuration(a)
  const bDuration = calcTotalFlightDuration(b)

  if (aDuration < bDuration) {
    return -1
  }

  if (aDuration === bDuration) {
    return 0
  }

  return 1
}

const sortByOptimal = (a: ITicket, b: ITicket): number => {
  const aPricePerMinute = calcPricePerMinuteFlight(a)
  const bPricePerMinute = calcPricePerMinuteFlight(b)

  if (aPricePerMinute < bPricePerMinute) {
    return -1
  }

  if (aPricePerMinute === bPricePerMinute) {
    return 0
  }

  return 1
}

const sortTickets = (tickets: ITicket[], sort: ISort): ITicket[] => {
  switch (sort.title) {
    case SORT.CHEEP:
      return [...tickets].sort(sortByPrice)
    case SORT.FAST:
      return [...tickets].sort(sortByFlightDuration)
    case SORT.OPTIMAL:
      return [...tickets].sort(sortByOptimal)
    default:
      return tickets
  }
}

export { sortTickets }
