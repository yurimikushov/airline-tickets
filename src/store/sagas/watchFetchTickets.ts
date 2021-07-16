import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchSearchId, fetchTickets } from '../../api'
import { ITicket } from '../../interfaces'
import { addTickets, endFetchTickets, startFetchTickets } from '../actions'
import { TICKETS } from '../actionTypes'

function* watchFetchTickets() {
  yield takeEvery(TICKETS.FETCH, handleFetchTickets)
}

function* handleFetchTickets() {
  try {
    yield put(startFetchTickets())
    const searchId: string = yield call(fetchSearchId)
    const tickets: ITicket[] = yield call(fetchTickets, searchId)
    yield put(addTickets(tickets))
    yield put(endFetchTickets())
  } catch {
    yield put(
      endFetchTickets('Что-то пошло не так. Попробуйте обновить страницу')
    )
  }
}

export { watchFetchTickets }
