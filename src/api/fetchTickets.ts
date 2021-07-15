import { ITicket } from '../interfaces'

const fetchTickets = async (searchId: string): Promise<ITicket[]> => {
  const res = await fetch(
    `${process.env.REACT_APP_API}/tickets?searchId=${searchId}`
  )

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const { tickets }: { tickets: ITicket[] } = await res.json()

  return tickets
}

export { fetchTickets }
