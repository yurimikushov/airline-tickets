import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTickets } from '../store/actions'
import { Ticket } from '../page-components'
import { Loader, Alert } from '../components'
import { useTickets } from '../hooks'

const Tickets = (): JSX.Element => {
  const { isPending, tickets, error } = useTickets()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isPending && tickets.length === 0) {
    return <Loader />
  }

  if (!isPending && error) {
    return <Alert>{error}</Alert>
  }

  if (!isPending && tickets.length === 0) {
    return <Alert>Нет билетов</Alert>
  }

  return (
    <>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </>
  )
}

export { Tickets }
