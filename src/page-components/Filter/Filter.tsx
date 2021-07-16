import { useFilter } from '../../hooks'
import { Card, Checkbox } from '../../components'
import './Filter.css'

const Filter = (): JSX.Element => {
  const [filters, updateFilter] = useFilter()

  return (
    <Card>
      <div className='filter'>
        <div className='filter__title'>Количество пересадок</div>
        {filters.map((filter) => (
          <Checkbox
            key={filter.title}
            className='filter__item'
            title={filter.title}
            checked={filter.checked}
            onChange={() => updateFilter(filter)}
          />
        ))}
      </div>
    </Card>
  )
}

export { Filter }
