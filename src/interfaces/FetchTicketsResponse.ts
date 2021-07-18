import { ITicket } from './Ticket'

interface IFetchTicketsResponse {
  tickets: ITicket[]
  stop: boolean
}

export type { IFetchTicketsResponse }
