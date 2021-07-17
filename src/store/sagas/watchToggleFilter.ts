import { call, put, select, takeEvery } from 'redux-saga/effects'
import { IFilter } from '../../interfaces'
import { isAllBasicFiltersChecked, isAllFilter } from '../../utils'
import { IToggleFilterAction, updateFilters } from '../actions'
import { FILTER } from '../actionTypes'
import { filtersSelector } from '../selectors'

function* watchToggleFilter() {
  yield takeEvery(FILTER.TOGGLE, handleToggleFilter)
}

function* handleToggleFilter({ payload }: IToggleFilterAction) {
  const filters: IFilter[] = yield select(filtersSelector)

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

    if (filter.stops === currentFilter.stops) {
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
    toggledFilters = toggledFilters.map((filter) => ({
      ...filter,
      checked: true,
    }))
  }

  yield put(updateFilters(toggledFilters))
}

export { watchToggleFilter }
