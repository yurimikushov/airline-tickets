import { nanoid } from 'nanoid'
import { ITicket } from '../interfaces'

const fetchTickets = async (searchId: string): Promise<ITicket[]> => {
  const res = await fetch(
    `${process.env.REACT_APP_API}/tickets?searchId=${searchId}`
  )

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const { tickets }: { tickets: ITicket[] } = await res.json()

  return tickets.slice(0, 4).map((ticket) => ({
    ...ticket,
    id: nanoid(),
    segments: ticket.segments.map((segment) => ({
      ...segment,
      id: nanoid(),
    })),
  }))
}

export { fetchTickets }
