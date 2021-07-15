import { useMemo } from 'react'
import { nanoid } from 'nanoid'
import { TabProps } from './Tab.props'
import './Tab.css'

const Tab = ({ title, checked, onSwitch }: TabProps) => {
  const id = useMemo(nanoid, [])

  return (
    <div className='tab'>
      <input
        id={id}
        type='radio'
        value={title}
        checked={checked}
        onChange={onSwitch}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  )
}

export { Tab }
