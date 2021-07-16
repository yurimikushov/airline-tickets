import { TICKETS } from '../../actionTypes'

interface ITicketsStartFetchAction {
  type: TICKETS.FETCH_START
}

const startFetchTickets = (): ITicketsStartFetchAction => ({
  type: TICKETS.FETCH_START,
})

export { startFetchTickets }
export type { ITicketsStartFetchAction }
