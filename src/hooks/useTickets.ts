import { useSelector } from 'react-redux'
import { IFilter, ISort, ITicket } from '../interfaces'
import { ITicketsState } from '../store/reducers'
import { filtersSelector, ticketsSelector } from '../store/selectors'
import { checkedSortSelector } from '../store/selectors'
import { filterTickets, sortTickets } from '../utils'

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
