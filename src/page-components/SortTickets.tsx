import { useTicketsSort } from '../hooks'
import { Tabs } from '../components'

const SortTickets = (): JSX.Element => {
  const [sortTabs, onSortHandler] = useTicketsSort()

  return <Tabs tabs={sortTabs} onSwitch={onSortHandler} />
}

export { SortTickets }
