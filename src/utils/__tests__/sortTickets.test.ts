import { SORT } from '../../constants'
import { ISort, ITicket } from '../../interfaces'
import { sortTickets } from '../sortTickets'

const SORT_BY_PRICE: ISort = {
  title: SORT.PRICE,
  checked: true,
}

const SORT_BY_FLIGHT_DURATION: ISort = {
  title: SORT.FLIGHT_DURATION,
  checked: true,
}

const SORT_BY_OPTIMAL: ISort = {
  title: SORT.OPTIMAL,
  checked: true,
}

const unsortedTickets: ITicket[] = [
  {
    price: 39244,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T13:45:00.000Z',
        stops: ['IST', 'HKG'],
        duration: 1894,
        id: 'nbyuS7AVg9dj5b-Saanqx',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T10:01:00.000Z',
        stops: [],
        duration: 825,
        id: 'BnVEpLuP-7XTIjy3R0fi2',
      },
    ],
    id: 'jLeG8sH6VIp60nGka439c',
  },
  {
    price: 37827,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T07:56:00.000Z',
        stops: [],
        duration: 835,
        id: 'eVsBgZFrB69-pIRVwjtEN',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T12:41:00.000Z',
        stops: ['SHA', 'SIN', 'BKK'],
        duration: 1146,
        id: '2kXmIN9EKFsmmrJCNlY_G',
      },
    ],
    id: 'JcI3QF6hM4izyEnKDTGzp',
  },
  {
    price: 98858,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T11:51:00.000Z',
        stops: ['SIN', 'KUL', 'SHA'],
        duration: 1386,
        id: 'LA30vaWPGP_j-NuMxKQSO',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T17:21:00.000Z',
        stops: [],
        duration: 1809,
        id: 'ygFotQFta6kLqhoVFDWpl',
      },
    ],
    id: 'xIFUMU8rhe77VglQOxn5L',
  },
  {
    price: 59950,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T14:32:00.000Z',
        stops: ['KUL', 'AUH'],
        duration: 1137,
        id: 'MWzB6z08fd7LPqZ_uVKD4',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T03:25:00.000Z',
        stops: [],
        duration: 890,
        id: '3bzgHZTMpB8Qe3xZE6RbP',
      },
    ],
    id: '3ZLex6fEdqlgw1wkJhtva',
  },
  {
    price: 93273,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T14:24:00.000Z',
        stops: ['KUL', 'SHA', 'AUH'],
        duration: 1543,
        id: 'fxCghdzXVqSKaucqt5msq',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T04:09:00.000Z',
        stops: [],
        duration: 1659,
        id: 'CidQ4wGQ6splCjCc-ZaTB',
      },
    ],
    id: 'qB0V2tKCTBPnFHRCi25Yt',
  },
]

const sortedTicketsByPrice: ITicket[] = [
  {
    price: 37827,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T07:56:00.000Z',
        stops: [],
        duration: 835,
        id: 'eVsBgZFrB69-pIRVwjtEN',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T12:41:00.000Z',
        stops: ['SHA', 'SIN', 'BKK'],
        duration: 1146,
        id: '2kXmIN9EKFsmmrJCNlY_G',
      },
    ],
    id: 'JcI3QF6hM4izyEnKDTGzp',
  },
  {
    price: 39244,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T13:45:00.000Z',
        stops: ['IST', 'HKG'],
        duration: 1894,
        id: 'nbyuS7AVg9dj5b-Saanqx',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T10:01:00.000Z',
        stops: [],
        duration: 825,
        id: 'BnVEpLuP-7XTIjy3R0fi2',
      },
    ],
    id: 'jLeG8sH6VIp60nGka439c',
  },
  {
    price: 59950,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T14:32:00.000Z',
        stops: ['KUL', 'AUH'],
        duration: 1137,
        id: 'MWzB6z08fd7LPqZ_uVKD4',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T03:25:00.000Z',
        stops: [],
        duration: 890,
        id: '3bzgHZTMpB8Qe3xZE6RbP',
      },
    ],
    id: '3ZLex6fEdqlgw1wkJhtva',
  },
  {
    price: 93273,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T14:24:00.000Z',
        stops: ['KUL', 'SHA', 'AUH'],
        duration: 1543,
        id: 'fxCghdzXVqSKaucqt5msq',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T04:09:00.000Z',
        stops: [],
        duration: 1659,
        id: 'CidQ4wGQ6splCjCc-ZaTB',
      },
    ],
    id: 'qB0V2tKCTBPnFHRCi25Yt',
  },
  {
    price: 98858,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T11:51:00.000Z',
        stops: ['SIN', 'KUL', 'SHA'],
        duration: 1386,
        id: 'LA30vaWPGP_j-NuMxKQSO',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T17:21:00.000Z',
        stops: [],
        duration: 1809,
        id: 'ygFotQFta6kLqhoVFDWpl',
      },
    ],
    id: 'xIFUMU8rhe77VglQOxn5L',
  },
]

const sortedTicketsByFlightDuration: ITicket[] = [
  {
    price: 37827,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T07:56:00.000Z',
        stops: [],
        duration: 835,
        id: 'eVsBgZFrB69-pIRVwjtEN',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T12:41:00.000Z',
        stops: ['SHA', 'SIN', 'BKK'],
        duration: 1146,
        id: '2kXmIN9EKFsmmrJCNlY_G',
      },
    ],
    id: 'JcI3QF6hM4izyEnKDTGzp',
  },
  {
    price: 59950,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T14:32:00.000Z',
        stops: ['KUL', 'AUH'],
        duration: 1137,
        id: 'MWzB6z08fd7LPqZ_uVKD4',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T03:25:00.000Z',
        stops: [],
        duration: 890,
        id: '3bzgHZTMpB8Qe3xZE6RbP',
      },
    ],
    id: '3ZLex6fEdqlgw1wkJhtva',
  },
  {
    price: 39244,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T13:45:00.000Z',
        stops: ['IST', 'HKG'],
        duration: 1894,
        id: 'nbyuS7AVg9dj5b-Saanqx',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T10:01:00.000Z',
        stops: [],
        duration: 825,
        id: 'BnVEpLuP-7XTIjy3R0fi2',
      },
    ],
    id: 'jLeG8sH6VIp60nGka439c',
  },
  {
    price: 98858,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T11:51:00.000Z',
        stops: ['SIN', 'KUL', 'SHA'],
        duration: 1386,
        id: 'LA30vaWPGP_j-NuMxKQSO',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T17:21:00.000Z',
        stops: [],
        duration: 1809,
        id: 'ygFotQFta6kLqhoVFDWpl',
      },
    ],
    id: 'xIFUMU8rhe77VglQOxn5L',
  },
  {
    price: 93273,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T14:24:00.000Z',
        stops: ['KUL', 'SHA', 'AUH'],
        duration: 1543,
        id: 'fxCghdzXVqSKaucqt5msq',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T04:09:00.000Z',
        stops: [],
        duration: 1659,
        id: 'CidQ4wGQ6splCjCc-ZaTB',
      },
    ],
    id: 'qB0V2tKCTBPnFHRCi25Yt',
  },
]

const sortedTicketsByOptimal: ITicket[] = [
  {
    price: 39244,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T13:45:00.000Z',
        stops: ['IST', 'HKG'],
        duration: 1894,
        id: 'nbyuS7AVg9dj5b-Saanqx',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T10:01:00.000Z',
        stops: [],
        duration: 825,
        id: 'BnVEpLuP-7XTIjy3R0fi2',
      },
    ],
    id: 'jLeG8sH6VIp60nGka439c',
  },
  {
    price: 37827,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T07:56:00.000Z',
        stops: [],
        duration: 835,
        id: 'eVsBgZFrB69-pIRVwjtEN',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T12:41:00.000Z',
        stops: ['SHA', 'SIN', 'BKK'],
        duration: 1146,
        id: '2kXmIN9EKFsmmrJCNlY_G',
      },
    ],
    id: 'JcI3QF6hM4izyEnKDTGzp',
  },
  {
    price: 93273,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T14:24:00.000Z',
        stops: ['KUL', 'SHA', 'AUH'],
        duration: 1543,
        id: 'fxCghdzXVqSKaucqt5msq',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T04:09:00.000Z',
        stops: [],
        duration: 1659,
        id: 'CidQ4wGQ6splCjCc-ZaTB',
      },
    ],
    id: 'qB0V2tKCTBPnFHRCi25Yt',
  },
  {
    price: 59950,
    carrier: 'TG',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T14:32:00.000Z',
        stops: ['KUL', 'AUH'],
        duration: 1137,
        id: 'MWzB6z08fd7LPqZ_uVKD4',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T03:25:00.000Z',
        stops: [],
        duration: 890,
        id: '3bzgHZTMpB8Qe3xZE6RbP',
      },
    ],
    id: '3ZLex6fEdqlgw1wkJhtva',
  },
  {
    price: 98858,
    carrier: 'EY',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2021-07-28T11:51:00.000Z',
        stops: ['SIN', 'KUL', 'SHA'],
        duration: 1386,
        id: 'LA30vaWPGP_j-NuMxKQSO',
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2021-08-17T17:21:00.000Z',
        stops: [],
        duration: 1809,
        id: 'ygFotQFta6kLqhoVFDWpl',
      },
    ],
    id: 'xIFUMU8rhe77VglQOxn5L',
  },
]

test('should return sorted tickets by price', () => {
  expect(sortTickets(unsortedTickets, SORT_BY_PRICE)).toEqual(sortedTicketsByPrice)
})

test('should return sorted tickets by flight duration', () => {
  expect(sortTickets(unsortedTickets, SORT_BY_FLIGHT_DURATION)).toEqual(
    sortedTicketsByFlightDuration
  )
})

test('should return sorted tickets by optimal', () => {
  expect(sortTickets(unsortedTickets, SORT_BY_OPTIMAL)).toEqual(sortedTicketsByOptimal)
})
