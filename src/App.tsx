import { useState } from 'react'
import { Button, Tabs } from './components'
import { Filter, Ticket } from './page-components'
import './App.css'

const tickets = [
  {
    price: 69666,
    carrier: 'EK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-23T21:25:00.000Z',
        stops: [],
        duration: 1793,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-13T10:33:00.000Z',
        stops: ['HKG', 'KUL', 'IST'],
        duration: 1883,
      },
    ],
  },
  {
    price: 95565,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-24T12:52:00.000Z',
        stops: [],
        duration: 1763,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-13T17:46:00.000Z',
        stops: ['DXB', 'IST', 'KUL'],
        duration: 686,
      },
    ],
  },
  {
    price: 47109,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-23T23:29:00.000Z',
        stops: ['HKG'],
        duration: 1760,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-13T00:05:00.000Z',
        stops: ['KUL'],
        duration: 689,
      },
    ],
  },
  {
    price: 84090,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-24T02:27:00.000Z',
        stops: ['DXB', 'SIN'],
        duration: 1427,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-13T03:59:00.000Z',
        stops: ['KUL'],
        duration: 1245,
      },
    ],
  },
  {
    price: 55578,
    carrier: 'EK',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-24T05:45:00.000Z',
        stops: ['SHA', 'IST'],
        duration: 1599,
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-13T09:51:00.000Z',
        stops: [],
        duration: 1501,
      },
    ],
  },
]

const App = () => {
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
      <div className='logo'>Logo</div>
      <aside>
        <Filter />
      </aside>
      <main>
        <Tabs tabs={tabs} onSwitch={onSwitchHandler} />
        {tickets.map((ticket) => (
          <Ticket key={performance.now() + Math.random()} {...ticket} />
        ))}
        <Button style={{ width: '100%' }} onClick={() => console.log('Click')}>
          Показать еще 5 билетов!
        </Button>
      </main>
    </div>
  )
}

export default App
