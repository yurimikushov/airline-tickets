import { TicketsLayout } from '../layouts'
import { MoreTickets, SortTickets, Tickets } from '../page-components'

const TicketsPage = (): JSX.Element => (
  <TicketsLayout>
    <SortTickets />
    <Tickets />
    <MoreTickets />
  </TicketsLayout>
)

export { TicketsPage }
