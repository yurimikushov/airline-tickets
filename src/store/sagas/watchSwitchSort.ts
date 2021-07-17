import { put, select, takeEvery } from 'redux-saga/effects'
import { ISort } from '../../interfaces'
import { ISwitchSortAction, updateSort } from '../actions'
import { SORT } from '../actionTypes'
import { sortSelector } from '../selectors'

function* watchSwitchSort() {
  yield takeEvery(SORT.SWITCH, handleSwitchSort)
}

function* handleSwitchSort({ payload }: ISwitchSortAction) {
  const sort: ISort[] = yield select(sortSelector)

  const switchCurrentSort = (sort: ISort): ISort => ({
    ...sort,
    checked: sort.title === payload.sort.title,
  })

  yield put(updateSort(sort.map(switchCurrentSort)))
}

export { watchSwitchSort }
