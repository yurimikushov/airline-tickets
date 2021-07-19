const TICKETS_BATCH_SIZE = 5

const MAX_NUM_OF_TRY_FETCHING = 3

const FILTER = {
  ALL: 'Все',
  ZERO: 'Без пересадок',
  ONE: '1 пересадка',
  TWO: '2 пересадки',
  THREE: '3 пересадки',
}

const SORT = {
  PRICE: 'Самый дешевый',
  FLIGHT_DURATION: 'Самый быстрый',
  OPTIMAL: 'Оптимальный',
}

export { TICKETS_BATCH_SIZE, MAX_NUM_OF_TRY_FETCHING, FILTER, SORT }
