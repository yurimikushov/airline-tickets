import { IFetchTicketsResponse } from '../../../interfaces'
import { TICKETS } from '../../actionTypes'

interface ITicketsAddAction {
  type: TICKETS.ADD
  payload: IFetchTicketsResponse
}

const addTickets = (tickets: IFetchTicketsResponse): ITicketsAddAction => ({
  type: TICKETS.ADD,
  payload: tickets,
})

export { addTickets }
export type { ITicketsAddAction }
