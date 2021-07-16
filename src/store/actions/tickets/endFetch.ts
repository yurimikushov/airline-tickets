import { TICKETS } from '../../actionTypes'

interface ITicketsEndFetchAction {
  type: TICKETS.FETCH_END
  payload: {
    error?: string
  }
}

const endFetchTickets = (error = ''): ITicketsEndFetchAction => ({
  type: TICKETS.FETCH_END,
  payload: {
    error,
  },
})

export { endFetchTickets }
export type { ITicketsEndFetchAction }
