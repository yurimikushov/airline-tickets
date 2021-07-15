import { Card } from '../../components'
import { flightDuration, minutesToHM, splitToThousands } from '../../utils'
import { TicketProps } from './Ticket.props'
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
        <div className='ticket__price'>{splitToThousands(price)} Р</div>
        <img
          className='ticket__airline-logo'
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt='Логотип авиакомпании.'
        />
      </div>
      <div className='ticket__body'>
        {segments.map(({ origin, destination, date, stops, duration }) => (
          <div
            key={performance.now() + Math.random()}
            className='ticket__flight'
          >
            <div className='ticket__route'>
              <div className='ticket__route-name'>
                {`${origin} - ${destination}`}
              </div>
              <div className='ticket__route-time'>
                {flightDuration(date, duration)}
              </div>
            </div>
            <div className='ticket__duration'>
              <div className='ticket__duration-label'>В пути</div>
              <div className='ticket__duration-value'>
                {minutesToHM(duration)}
              </div>
            </div>
            {stops.length > 0 ? (
              <div className='ticket__stops'>
                <div className='ticket__stops-label'>
                  {stops.length} пересадки
                </div>
                <ul className='ticket__stops-cites'>
                  {stops.map((stop) => (
                    <li key={performance.now() + Math.random()}>{stop}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className='ticket__stops'>
                <div className='ticket__stops-label'>Без пересадок</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </Card>
)

export { Ticket }
