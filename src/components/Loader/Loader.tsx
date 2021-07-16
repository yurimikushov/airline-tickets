import cn from 'classnames'
import { LoaderProps } from './Loader.props'
import './Loader.css'

const Loader = ({ className, ...props }: LoaderProps): JSX.Element => (
  <div className={cn(className, 'loader')} {...props}>
    Загрузка...
  </div>
)

export { Loader }
