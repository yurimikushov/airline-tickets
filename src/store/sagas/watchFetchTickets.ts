import { takeEvery, call, put, select, retry } from 'redux-saga/effects'
import { fetchSearchId, fetchTickets } from '../../api'
import { MAX_NUM_OF_TRY_FETCHING } from '../../constants'
import { IFetchTicketsResponse, IFilter, ITicket } from '../../interfaces'
import { filterAndSliceNeedlessTickets } from '../../utils'
import {
  addTickets,
  endFetchTickets,
  setSearchId,
  startFetchTickets,
} from '../actions'
import { TICKETS } from '../actionTypes'
import { checkedFiltersSelector, searchIdSelector } from '../selectors'

function* watchFetchTickets() {
  yield takeEvery(TICKETS.FETCH, handleFetchTickets)
}

function* handleFetchTickets() {
  try {
    yield put(startFetchTickets())

    const searchId: string = yield call(getSearchId)
    const { tickets, stop }: IFetchTicketsResponse = yield call(
      fetchTicketsApi,
      searchId
    )

    const filters: IFilter[] = yield select(checkedFiltersSelector)
    const filteredTickets: ITicket[] = filterAndSliceNeedlessTickets(
      tickets,
      filters
    )

    yield put(
      addTickets({
        tickets: filteredTickets,
        stop,
      })
    )
    yield put(endFetchTickets())
  } catch {
    yield put(
      endFetchTickets('Что-то пошло не так. Попробуйте обновить страницу')
    )
  }
}

function* getSearchId() {
  let searchId: string = yield select(searchIdSelector)

  if (!searchId) {
    searchId = yield call(fetchSearchId)
    yield put(setSearchId(searchId))
  }

  return searchId
}

function* fetchTicketsApi(searchId: string) {
  try {
    const tickets: IFetchTicketsResponse = yield retry(
      MAX_NUM_OF_TRY_FETCHING,
      100,
      fetchTickets,
      searchId
    )

    return tickets
  } catch {
    throw new Error('Не удалось выполнить запрос')
  }
}

export { watchFetchTickets, handleFetchTickets }
