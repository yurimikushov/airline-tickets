import { ITicket } from '../../../interfaces'
import { TICKETS } from '../../actionTypes'

interface ITicketsAddAction {
  type: TICKETS.ADD
  payload: {
    tickets: ITicket[]
  }
}

const addTickets = (tickets: ITicket[]): ITicketsAddAction => ({
  type: TICKETS.ADD,
  payload: {
    tickets,
  },
})

export { addTickets }
export type { ITicketsAddAction }
