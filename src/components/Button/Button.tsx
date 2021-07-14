import cn from 'classnames'
import { ButtonProps } from './Button.props'
import './Button.css'

const Button = ({ className, children, ...props }: ButtonProps) => (
  <button className={cn(className, 'btn')} {...props}>
    {children}
  </button>
)

export { Button }
