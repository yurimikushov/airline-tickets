import { call, put, select, takeEvery } from 'redux-saga/effects'
import { IFilter } from '../../interfaces'
import { isAllBasicFiltersChecked, isAllFilter } from '../../utils'
import { IToggleAction, updateFilters } from '../actions'
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
  const toggleCurrentFilter = (filter: IFilter) => ({
    ...filter,
    checked: !allFilter.checked,
  })

  yield put(updateFilters(filters.map(toggleCurrentFilter)))
}

function* handleToggleBasicFilter(currentFilter: IFilter, filters: IFilter[]) {
  const calcChecked = (filter: IFilter): boolean => {
    if (isAllFilter(filter) && filter.checked) {
      return false
    }

    if (filter.value === currentFilter.value) {
      return !filter.checked
    }

    return filter.checked
  }

  const toggleCurrentFilter = (filter: IFilter) => ({
    ...filter,
    checked: calcChecked(filter),
  })

  let toggledFilters = filters.map(toggleCurrentFilter)

  if (isAllBasicFiltersChecked(toggledFilters)) {
    toggledFilters = toggledFilters.map((filter) => {
      filter.checked = true
      return filter
    })
  }

  yield put(updateFilters(toggledFilters))
}

export { watchToggleFilter }
