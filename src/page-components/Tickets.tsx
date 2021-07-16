import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IState, fetchTickets } from '../store'
import { Ticket } from '../page-components'
import { Loader } from '../components'

const Tickets = (): JSX.Element => {
  const { isPending, tickets } = useSelector((state: IState) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isPending) {
    return <Loader />
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
