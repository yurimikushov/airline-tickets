import { useState } from 'react'
import { Button, Card, Checkbox } from './components'
import './App.css'

const App = () => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
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
    </div>
  )
}

export default App
