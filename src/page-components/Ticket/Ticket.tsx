import { Card } from '../../components'
import { TicketProps } from './Ticket.props'
import { Header } from './Header/Header'
import { Segment } from './Segment/Segment'
import './Ticket.css'

const Ticket = ({
  price,
  carrier,
  segments,
  ...props
}: TicketProps): JSX.Element => (
  <Card>
    <div className='ticket' {...props}>
      <div className='ticket__header'>
        <Header price={price} carrier={carrier} />
      </div>
      <div className='ticket__segments'>
        {segments.map((segment) => (
          <Segment key={Math.random()} {...segment} />
        ))}
      </div>
    </div>
  </Card>
)

export { Ticket }
