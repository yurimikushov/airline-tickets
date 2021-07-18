import { ITicket } from '../interfaces'

const calcTotalFlightDuration = (ticket: ITicket): number => {
  return ticket.segments.reduce((totalDuration, { duration }) => {
    return totalDuration + duration
  }, 0)
}

export { calcTotalFlightDuration }
