import { fork } from '@redux-saga/core/effects'
import { watchFetchTickets } from './watchFetchTickets'
import { watchToggleFilter } from './watchToggleFilter'

function* rootSaga() {
  yield fork(watchFetchTickets)
  yield fork(watchToggleFilter)
}

export default rootSaga
