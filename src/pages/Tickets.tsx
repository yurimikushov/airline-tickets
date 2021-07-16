import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IState, fetchTickets } from '../store'
import { TicketsLayout } from '../layouts'
import { Button, Tabs, Loader } from '../components'
import { Ticket } from '../page-components'

const TicketsPage = (): JSX.Element => {
  const { isPending, tickets } = useSelector((state: IState) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  const [tabs, setTabs] = useState([
    { title: 'Самый дешевый', checked: false },
    { title: 'Самый быстрый', checked: false },
    { title: 'Оптимальный', checked: true },
  ])

  const onSwitchHandler = (title: string) =>
    setTabs((tabs) =>
      tabs.map((tab) => {
        tab.checked = tab.title === title
        return tab
      })
    )

  return (
    <TicketsLayout>
      <Tabs tabs={tabs} onSwitch={onSwitchHandler} />
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
