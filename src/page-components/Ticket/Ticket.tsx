import { Card } from '../../components'
import { splitToThousands } from '../../utils'
import { TicketProps } from './Ticket.props'
import './Ticket.css'
import { Segment } from './Segment/Segment'

const Ticket = ({
  price,
  carrier,
  segments,
  ...props
}: TicketProps): JSX.Element => (
  <Card>
    <div className='ticket' {...props}>
      <div className='ticket__header'>
        <div className='ticket__price'>{splitToThousands(price)} Р</div>
        <img
          className='ticket__airline-logo'
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt='Логотип авиакомпании.'
        />
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
