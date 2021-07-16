import { useFilter } from '../../hooks'
import { Card, Checkbox } from '../../components'
import './Filter.css'

const Filter = (): JSX.Element => {
  const [filters, updateFilter] = useFilter()

  return (
    <Card>
      <div className='filter'>
        <div className='filter__title'>Количество пересадок</div>
        {filters.map(({ title, checked }) => (
          <Checkbox
            key={title}
            className='filter__item'
            title={title}
            checked={checked}
            onChange={() => updateFilter(title)}
          />
        ))}
      </div>
    </Card>
  )
}

export { Filter }
