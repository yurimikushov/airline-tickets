import { MAX_NUM_OF_TRY_FETCHING } from '../constants'
import { IFetchTicketsResponse } from '../interfaces'
import { addUniqueId } from '../utils'

const fetchTickets = async (
  searchId: string
): Promise<IFetchTicketsResponse> => {
  return await tryFetchTickets(searchId)
}

const tryFetchTickets = async (
  searchId: string,
  tryCounter = 1
): Promise<IFetchTicketsResponse> => {
  try {
    return await handleFetchTickets(searchId)
  } catch (err) {
    if (tryCounter < MAX_NUM_OF_TRY_FETCHING) {
      return await tryFetchTickets(searchId, tryCounter + 1)
    }

    throw err
  }
}

const handleFetchTickets = async (
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
    tickets: addUniqueId(tickets.tickets.slice(0, 6)),
  }
}

export { fetchTickets }
