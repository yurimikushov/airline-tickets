import cn from 'classnames'
import { AlertProps } from './Alert.props'
import './Alert.css'

const Alert = ({ className, children, ...props }: AlertProps): JSX.Element => (
  <div className={cn(className, 'alert')} {...props}>
    {children}
  </div>
)

export { Alert }
