import { declOfNum, flightDuration, minutesToHM } from '../../../utils'
import { SegmentProps } from './Segment.props'
import './Segment.css'

const Segment = ({
  origin,
  destination,
  date,
  stops,
  duration,
}: SegmentProps): JSX.Element => (
  <div className='ticket-segment'>
    <div className='ticket-segment__route'>
      <div className='ticket-segment__route-name'>
        {`${origin} - ${destination}`}
      </div>
      <div className='ticket-segment__route-time'>
        {flightDuration(date, duration)}
      </div>
    </div>
    <div className='ticket-segment__duration'>
      <div className='ticket-segment__duration-label'>В пути</div>
      <div className='ticket-segment__duration-value'>
        {minutesToHM(duration)}
      </div>
    </div>
    {stops.length > 0 ? (
      <div className='ticket-segment__stops'>
        <div className='ticket-segment__stops-label'>
          {`${stops.length} ${declOfNum(stops.length, [
            'пересадка',
            'пересадки',
            'пересадок',
          ])}`}
        </div>
        <ul className='ticket-segment__stops-cites'>
          {stops.map((stop) => (
            <li key={Math.random()}>{stop}</li>
          ))}
        </ul>
      </div>
    ) : (
      <div className='ticket-segment__stops'>
        <div className='ticket-segment__stops-label'>Без пересадок</div>
        <div className='ticket-segment__stops-cites'>-</div>
      </div>
    )}
  </div>
)

export { Segment }
