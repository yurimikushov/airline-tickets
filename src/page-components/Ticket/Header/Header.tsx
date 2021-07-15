import { splitToThousands } from '../../../utils'
import { HeaderProps } from './Header.props'
import './Header.css'

const Header = ({ price, carrier }: HeaderProps): JSX.Element => (
  <div className='ticket-header'>
    <div className='ticket-header__price'>{splitToThousands(price)} Р</div>
    <img
      className='ticket-header__airline-logo'
      src={`//pics.avs.io/99/36/${carrier}.png`}
      alt='Логотип авиакомпании.'
    />
  </div>
)

export { Header }
