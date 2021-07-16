import { useSelector } from 'react-redux'
import { IState } from '../store'
import { Button } from '../components'

const MoreTickets = (): JSX.Element => {
  const { tickets } = useSelector((state: IState) => state.tickets)

  if (tickets.length === 0) {
    return <></>
  }

  const onShowMoreTickets = (): void => {
    console.log('Show more tickets')
  }

  return <Button onClick={onShowMoreTickets}>Показать еще 5 билетов!</Button>
}

export { MoreTickets }
