import { select, takeEvery } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import { FILTER as cFILTER } from '../../../constants'
import { IFilter } from '../../../interfaces'
import { FILTER as aFILTER } from '../../actionTypes'
import { toggleFilter } from '../../actions'
import { filtersSelector } from '../../selectors'
import {
  watchToggleFilter,
  handleToggleFilter,
  handleToggleBasicFilter,
  handleToggleAllFilter,
} from '../watchToggleFilter'

describe('check `watchToggleFilter()`', () => {
  const gen = watchToggleFilter()

  test('should wait for a user toggle filter', () => {
    expect(gen.next().value).toEqual(
      takeEvery(aFILTER.TOGGLE, handleToggleFilter)
    )
  })
})

describe('check `handleToggleFilter()`', () => {
  const createFilter = (title: string): IFilter => ({
    title,
    stops: 2,
    checked: false,
  })

  test('should toggle `all` filter', () => {
    const filter: IFilter = createFilter(cFILTER.ALL)

    return expectSaga(handleToggleFilter, toggleFilter(filter))
      .provide([[select(filtersSelector), []]])
      .call(handleToggleAllFilter, filter, [])
      .run()
  })

  test('should toggle `basic` filter', () => {
    const filter: IFilter = createFilter(cFILTER.ZERO)

    return expectSaga(handleToggleFilter, toggleFilter(filter))
      .provide([[select(filtersSelector), []]])
      .call(handleToggleBasicFilter, filter, [])
      .run()
  })
})
