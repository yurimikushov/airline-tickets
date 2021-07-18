import { useDispatch, useSelector } from 'react-redux'
import { fetchTickets } from '../store/actions'
import { ticketsSelector } from '../store/selectors'
import { Button } from '../components'

const MoreTickets = (): JSX.Element => {
  const { isPending, stop } = useSelector(ticketsSelector)

  const dispatch = useDispatch()

  if (stop) {
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
