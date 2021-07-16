import { useState } from 'react'

interface ITicketSort {
  title: string
  checked: boolean
}

const useSort = (): [ITicketSort[], (title: string) => void] => {
  const [sort, setSort] = useState([
    { title: 'Самый дешевый', checked: false },
    { title: 'Самый быстрый', checked: false },
    { title: 'Оптимальный', checked: true },
  ])

  const sortHandler = (title: string): void =>
    setSort((sort) =>
      sort.map((sort) => {
        sort.checked = sort.title === title
        return sort
      })
    )

  return [sort, sortHandler]
}

export { useSort }
