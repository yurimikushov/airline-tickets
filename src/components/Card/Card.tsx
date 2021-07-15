import cn from 'classnames'
import { CardProps } from './Card.props'
import './Card.css'

const Card = ({ className, children, ...props }: CardProps): JSX.Element => (
  <div className={cn(className, 'card')} {...props}>
    {children}
  </div>
)

export { Card }
