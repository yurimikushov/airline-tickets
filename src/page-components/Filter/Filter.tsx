import { useState } from 'react'
import { Card, Checkbox } from '../../components'
import './Filter.css'

interface IFilter {
  title: string
  checked: boolean
}

const Filter = () => {
  const [filter, setFilter] = useState<IFilter[]>([
    { title: 'Все', checked: false },
    { title: 'Без пересадок', checked: true },
    { title: '1 пересадка', checked: true },
    { title: '2 пересадки', checked: false },
    { title: '3 пересадки', checked: false },
  ])

  const onFilterHandler = (title: string): void => {
    setFilter((filters) => {
      return filters.map((filter) => ({
        ...filter,
        checked: filter.title === title ? !filter.checked : filter.checked,
      }))
    })
  }

  return (
    <Card>
      <div className='filter'>
        <div className='filter__title'>Количество пересадок</div>
        {filter.map(({ title, checked }) => (
          <Checkbox
            key={title}
            className='filter__item'
            title={title}
            checked={checked}
            onChange={() => onFilterHandler(title)}
          />
        ))}
      </div>
    </Card>
  )
}

export { Filter }
