import { useState } from 'react'
import { Button, Card, Checkbox, Tabs } from './components'
import './App.css'

const App = () => {
  const [checked, setChecked] = useState<boolean>(false)
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
        <Card>
          <div className='filter' style={{ width: '232px', height: '252px' }}>
            <div>Количество пересадок</div>
            <Checkbox
              title='Все'
              checked={checked}
              onChange={() => {
                setChecked((checked) => !checked)
              }}
            />
            <Checkbox
              title='Без пересадок'
              checked={checked}
              onChange={() => {
                setChecked((checked) => !checked)
              }}
            />
          </div>
        </Card>
      </aside>
      <main>
        <Tabs tabs={tabs} onSwitch={onSwitchHandler} />
        <Card>
          <div
            className='ticket'
            style={{ width: '502px', height: '184px' }}
          ></div>
        </Card>
        <Card>
          <div
            className='ticket'
            style={{ width: '502px', height: '184px' }}
          ></div>
        </Card>
        <Card>
          <div
            className='ticket'
            style={{ width: '502px', height: '184px' }}
          ></div>
        </Card>
        <Card>
          <div
            className='ticket'
            style={{ width: '502px', height: '184px' }}
          ></div>
        </Card>
        <Card>
          <div
            className='ticket'
            style={{ width: '502px', height: '184px' }}
          ></div>
        </Card>
        <Button style={{ width: '100%' }} onClick={() => console.log('Click')}>
          Показать еще 5 билетов!
        </Button>
      </main>
    </div>
  )
}

export default App
