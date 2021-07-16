import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../store'
import { ticketsSelector } from '../store/selectors'
import { Button } from '../components'

const MoreTickets = (): JSX.Element => {
  const { tickets, isPending } = useSelector(ticketsSelector)

  const dispatch = useDispatch()

  if (tickets.length === 0) {
    return <></>
  }

  const onShowMoreTickets = (): void => {
    dispatch(fetchTickets())
  }

  return (
    <Button onClick={onShowMoreTickets} pending={isPending}>
      Показать еще 5 билетов!
    </Button>
  )
}

export { MoreTickets }
