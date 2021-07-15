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
    <div style={{ padding: '20px 0', maxWidth: '600px', margin: '0 auto' }}>
      <Card style={{ width: '400px', padding: '20px' }}>
        <div className='greeting'>Hello, see ya soon</div>
      </Card>
      <Button style={{ width: '400px' }} onClick={() => console.log('Click')}>
        Показать еще 5 билетов!
      </Button>
      <Card style={{ width: '400px', padding: '20px' }}>
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
      </Card>
      <Tabs tabs={tabs} onSwitch={onSwitchHandler} />
    </div>
  )
}

export default App
