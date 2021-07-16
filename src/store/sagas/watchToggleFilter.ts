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

  if (isAllFilter(payload.filter)) {
    yield call(handleToggleAllFilter, payload.filter, filters)
  } else {
    yield call(handleToggleBasicFilter, payload.filter, filters)
  }
}

function* handleToggleAllFilter(allFilter: IFilter, filters: IFilter[]) {
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

  const toggleCurrentFilter = (filter: IFilter) => ({
    ...filter,
    checked: allFilter ? calcFilterChecked(allFilter, filter) : filter.checked,
  })

  yield put(updateFilters(filters.map(toggleCurrentFilter)))
}

function* handleToggleBasicFilter(currentFilter: IFilter, filters: IFilter[]) {
  const calcFilterChecked = (filter: IFilter): boolean => {
    if (filter.value === currentFilter.value) {
      return !filter.checked
    }

    return filter.checked
  }

  const toggleCurrentFilter = (filter: IFilter) => ({
    ...filter,
    checked: calcFilterChecked(filter),
  })

  yield put(updateFilters(filters.map(toggleCurrentFilter)))
}

export { watchToggleFilter }
