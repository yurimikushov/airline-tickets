import { useSelector } from 'react-redux'
import { SORT } from '../constants'
import { IFilter, ISort, ITicket } from '../interfaces'
import { ITicketsState } from '../store/reducers'
import { filtersSelector, ticketsSelector } from '../store/selectors'
import { checkedSortSelector } from '../store/selectors'
import { calcTotalFlightDuration, filterTickets } from '../utils'

const sortTickets = (tickets: ITicket[], sort: ISort): ITicket[] => {
  switch (sort.title) {
    case SORT.CHEEP:
      return tickets.sort((a, b): number => {
        if (a.price < b.price) {
          return -1
        }

        if (a.price === b.price) {
          return 0
        }

        return 1
      })
    case SORT.FAST:
      return tickets.sort((a, b): number => {
        const aDuration = calcTotalFlightDuration(a)
        const bDuration = calcTotalFlightDuration(b)

        if (aDuration < bDuration) {
          return -1
        }

        if (aDuration === bDuration) {
          return 0
        }

        return 1
      })
    case SORT.OPTIMAL:
      return tickets
    default:
      return tickets
  }
}

const useTickets = (): ITicketsState => {
  const tickets: ITicketsState = useSelector(ticketsSelector)

  const filters: IFilter[] = useSelector(filtersSelector)
  const checkedFilters: IFilter[] = filters.filter((filter) => filter.checked)

  const filteredTickets: ITicket[] = filterTickets(
    tickets.tickets,
    checkedFilters
  )

  const checkedSort: ISort = useSelector(checkedSortSelector)

  return {
    ...tickets,
    tickets: sortTickets(filteredTickets, checkedSort),
  }
}

export { useTickets }
