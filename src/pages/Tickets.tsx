import { TicketsLayout } from '../layouts'
import { SortTickets, Tickets } from '../page-components'
import { Button } from '../components'

const TicketsPage = (): JSX.Element => (
  <TicketsLayout>
    <SortTickets />
    <Tickets />
    <Button onClick={() => console.log('Click')}>
      Показать еще 5 билетов!
    </Button>
  </TicketsLayout>
)

export { TicketsPage }
