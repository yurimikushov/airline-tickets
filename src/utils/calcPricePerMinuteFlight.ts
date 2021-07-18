import { ITicket } from '../interfaces'
import { calcTotalFlightDuration } from './calcFlightDuration'

const calcPricePerMinuteFlight = (ticket: ITicket): number => {
  const flightDuration = calcTotalFlightDuration(ticket)

  return ticket.price / flightDuration
}

export { calcPricePerMinuteFlight }
