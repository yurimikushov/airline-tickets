import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IState, fetchTickets } from '../store'
import { TicketsLayout } from '../layouts'
import { Button, Tabs, Loader } from '../components'
import { Ticket } from '../page-components'
import { useTicketsSort } from '../hooks'

const TicketsPage = (): JSX.Element => {
  const { isPending, tickets } = useSelector((state: IState) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  const [sortTabs, onSortHandler] = useTicketsSort()

  return (
    <TicketsLayout>
      <Tabs tabs={sortTabs} onSwitch={onSortHandler} />
      {isPending ? (
        <Loader />
      ) : (
        tickets.map((ticket) => <Ticket key={ticket.id} {...ticket} />)
      )}
      <Button onClick={() => console.log('Click')}>
        Показать еще 5 билетов!
      </Button>
    </TicketsLayout>
  )
}

export { TicketsPage }
