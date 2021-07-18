import { nanoid } from 'nanoid'
import { ITicket } from '../interfaces'

const addUniqueId = (tickets: ITicket[]) => {
  return tickets.map((ticket) => ({
    ...ticket,
    id: nanoid(),
    segments: ticket.segments.map((segment) => ({
      ...segment,
      id: nanoid(),
    })),
  }))
}

export { addUniqueId }
