import { ITicket } from '../../interfaces'
import { TICKETS_ADD } from '../actionTypes'

interface IAddTicketsAction {
  type: string
  payload: {
    tickets: ITicket[]
  }
}

const addTickets = (tickets: ITicket[]): IAddTicketsAction => ({
  type: TICKETS_ADD,
  payload: {
    tickets,
  },
})

export { addTickets }
export type { IAddTicketsAction }
