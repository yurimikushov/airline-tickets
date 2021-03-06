import { useSort } from '../hooks'
import { Tabs } from '../components'

const Sort = (): JSX.Element => {
  const [sortTabs, onSortHandler] = useSort()

  return <Tabs tabs={sortTabs} onSwitch={onSortHandler} />
}

export { Sort }
