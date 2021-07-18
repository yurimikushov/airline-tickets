import { takeEvery, call, put, select } from 'redux-saga/effects'
import { fetchSearchId, fetchTickets } from '../../api'
import { ITicket } from '../../interfaces'
import {
  addTickets,
  endFetchTickets,
  setSearchId,
  startFetchTickets,
} from '../actions'
import { TICKETS } from '../actionTypes'
import { searchIdSelector } from '../selectors'

function* watchFetchTickets() {
  yield takeEvery(TICKETS.FETCH, handleFetchTickets)
}

function* handleFetchTickets() {
  try {
    yield put(startFetchTickets())

    const searchId: string = yield call(getSearchId)
    const tickets: ITicket[] = yield call(fetchTickets, searchId)

    yield put(addTickets(tickets))
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

export { watchFetchTickets }
