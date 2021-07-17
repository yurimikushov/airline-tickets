import { fork } from '@redux-saga/core/effects'
import { watchFetchTickets } from './watchFetchTickets'
import { watchToggleFilter } from './watchToggleFilter'
import { watchSwitchSort } from './watchSwitchSort'

function* rootSaga() {
  yield fork(watchFetchTickets)
  yield fork(watchToggleFilter)
  yield fork(watchSwitchSort)
}

export default rootSaga
