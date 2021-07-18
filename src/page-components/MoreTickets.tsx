import { useDispatch, useSelector } from 'react-redux'
import { TICKETS_BATCH_SIZE } from '../constants'
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
      {`Показать еще ${TICKETS_BATCH_SIZE} билетов!`}
    </Button>
  )
}

export { MoreTickets }
