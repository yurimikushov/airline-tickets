import cn from 'classnames'
import { dummy } from '../../utils'
import { ButtonProps } from './Button.props'
import './Button.css'

const Button = ({
  className,
  pending = false,
  onClick,
  children,
  ...props
}: ButtonProps): JSX.Element => (
  <button
    className={cn(className, 'btn', pending && 'btn_pending')}
    onClick={!pending ? onClick : dummy}
    {...props}
  >
    {!pending ? children : 'Загрузка...'}
  </button>
)

export { Button }
