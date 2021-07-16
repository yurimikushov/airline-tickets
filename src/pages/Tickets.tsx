import { useTicketsSort } from '../hooks'
import { TicketsLayout } from '../layouts'
import { Tickets } from '../page-components'
import { Button, Tabs } from '../components'

const TicketsPage = (): JSX.Element => {
  const [sortTabs, onSortHandler] = useTicketsSort()

  return (
    <TicketsLayout>
      <Tabs tabs={sortTabs} onSwitch={onSortHandler} />
      <Tickets />
      <Button onClick={() => console.log('Click')}>
        Показать еще 5 билетов!
      </Button>
    </TicketsLayout>
  )
}

export { TicketsPage }
