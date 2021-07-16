import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets, IState } from '../store'
import { Button } from '../components'

const MoreTickets = (): JSX.Element => {
  const { tickets, isPending } = useSelector((state: IState) => state.tickets)

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
