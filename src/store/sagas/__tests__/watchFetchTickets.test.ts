import { call, select, takeEvery } from '@redux-saga/core/effects'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { IFetchTicketsResponse, IFilter } from '../../../interfaces'
import { filterAndSliceNeedlessTickets } from '../../../utils'
import { addTickets, endFetchTickets, startFetchTickets } from '../../actions'
import { TICKETS } from '../../actionTypes'
import { checkedFiltersSelector } from '../../selectors'
import {
  watchFetchTickets,
  handleFetchTickets,
  getSearchId,
  fetchTicketsApi,
} from '../watchFetchTickets'

describe('check `watchFetchTickets()`', () => {
  const gen = watchFetchTickets()

  test('should wait for a user fetch a tickets', () => {
    expect(gen.next().value).toEqual(
      takeEvery(TICKETS.FETCH, handleFetchTickets)
    )
  })
})

describe('check `handleFetchTickets()`', () => {
  const mockSearchId = '1234'
  const mockFetchResponse: IFetchTicketsResponse = {
    tickets: [
      {
        id: 'id-3000',
        price: 10500,
        carrier: 'S7',
        segments: [],
      },
    ],
    stop: false,
  }

  test('should fetch and dispatch tickets success (1)', () => {
    return expectSaga(handleFetchTickets)
      .provide([
        [call(getSearchId), mockSearchId],
        [call(fetchTicketsApi, mockSearchId), mockFetchResponse],
        [select(checkedFiltersSelector), []],
        [
          call(filterAndSliceNeedlessTickets, mockFetchResponse.tickets, []),
          [],
        ],
      ])
      .put(startFetchTickets())
      .call(getSearchId)
      .call(fetchTicketsApi, mockSearchId)
      .select(checkedFiltersSelector)
      .put(
        addTickets({
          tickets: [],
          stop: false,
        })
      )
      .put(endFetchTickets())
      .run()
  })

  test('should fetch and dispatch tickets success (2)', () => {
    const mockFilters: IFilter[] = []

    testSaga(handleFetchTickets)
      .next()
      .put(startFetchTickets())
      .next()
      .call(getSearchId)
      .save('before tickets fetching')
      .next(mockSearchId)
      .call(fetchTicketsApi, mockSearchId)
      .next(mockFetchResponse)
      .select(checkedFiltersSelector)
      .next([])
      .call(
        filterAndSliceNeedlessTickets,
        mockFetchResponse.tickets,
        mockFilters
      )
      .next(mockFetchResponse.tickets)
      .put(
        addTickets({
          tickets: mockFetchResponse.tickets,
          stop: false,
        })
      )
      .next()
      .put(endFetchTickets())
      .next()
      .isDone()
      .restore('before tickets fetching')
      .next(mockSearchId)
      .throw(new Error('suppose fetch is failed'))
      .put(endFetchTickets('Что-то пошло не так. Попробуйте обновить страницу'))
      .next()
      .isDone()
  })
})
