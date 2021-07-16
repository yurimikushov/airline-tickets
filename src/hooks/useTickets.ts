import { useSelector } from 'react-redux'
import { IFilter } from '../interfaces'
import { ITicketsState } from '../store/reducers'
import { filtersSelector, ticketsSelector } from '../store/selectors'
import { filterTickets } from '../utils'

const useTickets = (): ITicketsState => {
  const tickets: ITicketsState = useSelector(ticketsSelector)
  const filters: IFilter[] = useSelector(filtersSelector)
  const checkedFilters: IFilter[] = filters.filter((filter) => filter.checked)

  return {
    ...tickets,
    tickets: filterTickets(tickets.tickets, checkedFilters),
  }
}

export { useTickets }
