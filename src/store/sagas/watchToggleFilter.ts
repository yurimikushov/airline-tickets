import { call, put, select, takeEvery } from 'redux-saga/effects'
import { IFilter } from '../../interfaces'
import { isAllFilter } from '../../utils'
import { IToggleAction, updateFilters } from '../actions/filters'
import { FILTER } from '../actionTypes'
import { IState } from '../reducers'

function* watchToggleFilter() {
  yield takeEvery(FILTER.TOGGLE, handleToggleFilter)
}

function* handleToggleFilter({ payload }: IToggleAction) {
  const filters: IFilter[] = yield select((state: IState) => state.filters)

  if (isAllFilter(payload.title, filters)) {
    yield call(handleToggleAllFilter, payload.title, filters)
  } else {
    yield call(handleToggleBasicFilter, payload.title, filters)
  }
}

function* handleToggleAllFilter(title: string, filters: IFilter[]) {
  const allFilter = filters.find((filter) => filter.title === title)

  const calcFilterChecked = (
    allFilter: IFilter,
    currentFilter: IFilter
  ): boolean => {
    if (!allFilter.checked) {
      return true
    }

    return currentFilter.title === allFilter.title
      ? !currentFilter.checked
      : currentFilter.checked
  }

  const toggleFilters = (filter: IFilter) => ({
    ...filter,
    checked: allFilter ? calcFilterChecked(allFilter, filter) : filter.checked,
  })

  yield put(updateFilters(filters.map(toggleFilters)))
}

function* handleToggleBasicFilter(title: string, filters: IFilter[]) {
  const toggleCurrentFilter = (filter: IFilter) => ({
    ...filter,
    checked: filter.title === title ? !filter.checked : filter.checked,
  })

  yield put(updateFilters(filters.map(toggleCurrentFilter)))
}

export { watchToggleFilter }
