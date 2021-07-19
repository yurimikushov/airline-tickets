import { takeEvery, call, put, select } from 'redux-saga/effects'
import { fetchSearchId, fetchTickets } from '../../api'
import { MAX_NUM_OF_TRY_FETCHING } from '../../constants'
import { IFetchTicketsResponse, IFilter, ITicket } from '../../interfaces'
import { filterAndSliceTickets } from '../../utils'
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
    const tickets: IFetchTicketsResponse = yield call(fetchTicketsApi, searchId)

    const filteredTickets: ITicket[] = yield call(
      filterTickets,
      tickets.tickets
    )

    yield put(
      addTickets({
        ...tickets,
        tickets: filteredTickets,
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
  for (let tryCounter = 0; tryCounter < MAX_NUM_OF_TRY_FETCHING; tryCounter++) {
    try {
      const tickets: IFetchTicketsResponse = yield call(fetchTickets, searchId)
      return tickets
    } catch {}
  }

  throw new Error('Не удалось выполнить запрос')
}

function* filterTickets(tickets: ITicket[]) {
  const filters: IFilter[] = yield select(checkedFiltersSelector)

  return filterAndSliceTickets(tickets, filters)
}

export { watchFetchTickets }
