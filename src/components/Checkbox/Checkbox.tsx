import cn from 'classnames'
import { CheckboxProps } from './Checkbox.props'
import './Checkbox.css'

const Checkbox = ({
  className,
  checked,
  title,
  onChange,
  ...props
}: CheckboxProps): JSX.Element => {
  return (
    <div className={cn(className, 'checkbox')} onClick={onChange} {...props}>
      <div
        className={cn('checkbox__box', checked && 'checkbox__box_checked')}
      ></div>
      <div className='checkbox__label'>{title}</div>
    </div>
  )
}

export { Checkbox }
