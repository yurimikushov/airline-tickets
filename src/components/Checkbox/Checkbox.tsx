import cn from 'classnames'
import { CheckboxProps } from './Checkbox.props'
import './Checkbox.css'

const Checkbox = ({
  className,
  checked,
  title,
  onChange,
  ...props
}: CheckboxProps): JSX.Element => (
  // FIXME: should remove double handling `on change` event
  <div className={cn(className, 'checkbox')} onClick={onChange} {...props}>
    <label className='checkbox__label'>
      <input type='checkbox' checked={checked} onChange={onChange} />
      {title}
      <span className='checkbox__box'></span>
    </label>
  </div>
)

export { Checkbox }
