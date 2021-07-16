import { useState } from 'react'
import { Card, Checkbox } from '../../components'
import './Filter.css'

interface IFilter {
  title: string
  checked: boolean
}

const Filter = (): JSX.Element => {
  const [filter, setFilter] = useState<IFilter[]>([
    { title: 'Все', checked: false },
    { title: 'Без пересадок', checked: true },
    { title: '1 пересадка', checked: true },
    { title: '2 пересадки', checked: false },
    { title: '3 пересадки', checked: false },
  ])

  const onFilterHandler = (title: string): void => {
    const filterAll = filter[0]

    if (title === filterAll.title) {
      if (!filterAll.checked) {
        return setFilter((filters) =>
          filters.map((filter) => ({
            ...filter,
            checked: true,
          }))
        )
      }

      return setFilter((filters) =>
        filters.map((filter) => ({
          ...filter,
          checked:
            filter.title === filterAll.title ? !filter.checked : filter.checked,
        }))
      )
    }

    setFilter((filters) =>
      filters.map((filter) => ({
        ...filter,
        checked: filter.title === title ? !filter.checked : filter.checked,
      }))
    )
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
