import { takeEvery, call, put } from 'redux-saga/effects'
import { fetchSearchId, fetchTickets } from '../../api'
import { ITicket } from '../../interfaces'
import { addTickets } from '../actions'
import { TICKETS_FETCH } from '../actionTypes'

function* watchFetchTickets() {
  yield takeEvery(TICKETS_FETCH, fetchTicketsSaga)
}

function* fetchTicketsSaga() {
  try {
    const searchId: string = yield call(fetchSearchId)
    const tickets: ITicket[] = yield call(fetchTickets, searchId)
    yield put(addTickets(tickets))
  } catch (err) {
    console.error(err)
  }
}

export { watchFetchTickets }
