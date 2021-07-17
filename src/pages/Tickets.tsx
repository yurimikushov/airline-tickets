import { TicketsLayout } from '../layouts'
import { MoreTickets, Sort, Tickets } from '../page-components'

const TicketsPage = (): JSX.Element => (
  <TicketsLayout>
    <Sort />
    <Tickets />
    <MoreTickets />
  </TicketsLayout>
)

export { TicketsPage }
