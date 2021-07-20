import { takeEvery } from 'redux-saga/effects'
import { FILTER } from '../../actionTypes'
import { watchToggleFilter, handleToggleFilter } from '../watchToggleFilter'

describe('check `watchToggleFilter()`', () => {
  const gen = watchToggleFilter()

  test('should wait for a user toggle filter', () => {
    expect(gen.next().value).toEqual(
      takeEvery(FILTER.TOGGLE, handleToggleFilter)
    )
  })
})
