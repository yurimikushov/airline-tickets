import { useEffect, useState } from 'react'
import { fetchSearchId, fetchTickets } from './api'
import { ITicket } from './interfaces'
import { Button, Tabs } from './components'
import { Filter, Ticket } from './page-components'
import './App.css'

const App = (): JSX.Element => {
  const [searchId, setSearchId] = useState<string>('')
  const [tickets, setTickets] = useState<ITicket[]>([])

  useEffect(() => {
    fetchSearchId()
      .then((searchId) => setSearchId(searchId))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    if (searchId.trim() === '') {
      return
    }

    fetchTickets(searchId)
      .then((tickets) => setTickets(tickets))
      .catch((err) => console.error(err))
  }, [searchId])

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
        <img src="/logo.png" alt='Логотип сайта.' />
      </div>
      <aside>
        <Filter />
      </aside>
      <main>
        <Tabs tabs={tabs} onSwitch={onSwitchHandler} />
        {tickets &&
          tickets.map((ticket) => <Ticket key={Math.random()} {...ticket} />)}
        <Button onClick={() => console.log('Click')}>
          Показать еще 5 билетов!
        </Button>
      </main>
    </div>
  )
}

export default App
