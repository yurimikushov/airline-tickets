import { Button, Card } from './components'
import './App.css'

const App = () => (
  <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
    <Card style={{ width: '400px', padding: '20px' }}>
      <div className='greeting'>Hello, see ya soon</div>
    </Card>
    <Button style={{ width: '400px' }} onClick={() => console.log('Click')}>
      Показать еще 5 билетов!
    </Button>
  </div>
)

export default App
