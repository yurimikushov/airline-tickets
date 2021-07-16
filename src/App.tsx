import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IState, fetchTickets } from './store'
import { Button, Tabs } from './components'
import { Filter, Ticket } from './page-components'
import './App.css'

const App = (): JSX.Element => {
  const tickets = useSelector((state: IState) => state.tickets.tickets)
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
    <div className='container'>
      <div className='logo'>
        <img src='/logo.png' alt='Логотип сайта.' />
      </div>
      <aside>
        <Filter />
      </aside>
      <main>
        <Tabs tabs={tabs} onSwitch={onSwitchHandler} />
        {tickets &&
          tickets.map((ticket) => <Ticket key={ticket.id} {...ticket} />)}
        <Button onClick={() => console.log('Click')}>
          Показать еще 5 билетов!
        </Button>
      </main>
    </div>
  )
}

export default App
