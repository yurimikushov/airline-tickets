import cn from 'classnames'
import { Filter } from '../../page-components'
import { TicketsLayoutProps } from './TicketsLayout.props'
import './TicketsLayout.css'

const TicketsLayout = ({
  className,
  children,
  ...props
}: TicketsLayoutProps): JSX.Element => (
  <div className={cn(className, 'container')} {...props}>
    <div className='logo'>
      <img src='/logo.png' alt='Логотип сайта.' />
    </div>
    <aside>
      <Filter />
    </aside>
    <main>{children}</main>
  </div>
)

export { TicketsLayout }
