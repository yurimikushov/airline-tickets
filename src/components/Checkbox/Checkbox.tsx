import cn from 'classnames'
import { CheckboxProps } from './Checkbox.props'
import './Checkbox.css'

const Checkbox = ({
  className,
  checked,
  title,
  onChange,
  ...props
}: CheckboxProps) => (
  <label className={cn(className, 'checkbox')} {...props}>
    <input type='checkbox' checked={checked} onChange={onChange} />
    {title}
    <span className='checkbox__box'></span>
  </label>
)

export { Checkbox }
