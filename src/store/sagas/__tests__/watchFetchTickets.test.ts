import { takeEvery } from "@redux-saga/core/effects"
import { TICKETS } from "../../actionTypes"
import { handleFetchTickets, watchFetchTickets } from "../watchFetchTickets"

describe('check `watchFetchTickets()`', () => {
  const gen = watchFetchTickets()

  test('should wait for a user fetch a tickets', () => {
    expect(gen.next().value).toEqual(
      takeEvery(TICKETS.FETCH, handleFetchTickets)
    )
  })
})
