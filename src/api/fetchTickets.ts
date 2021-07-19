import { IFetchTicketsResponse } from '../interfaces'
import { addUniqueId } from '../utils'

const fetchTickets = async (
  searchId: string
): Promise<IFetchTicketsResponse> => {
  const res = await fetch(
    `${process.env.REACT_APP_API}/tickets?searchId=${searchId}`
  )

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const tickets: IFetchTicketsResponse = await res.json()

  return {
    ...tickets,
    tickets: addUniqueId(tickets.tickets),
  }
}

export { fetchTickets }
