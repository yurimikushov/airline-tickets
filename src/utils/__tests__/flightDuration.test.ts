import { flightDuration } from '../flightDuration'

test('should return representation of start and end of flight', () => {
  expect(flightDuration('1995-12-17T03:24:00', 0)).toBe('03:24 - 03:24')
  expect(flightDuration('1995-12-17T03:24:00', 10)).toBe('03:24 - 03:34')
  expect(flightDuration('1995-12-17T23:30:00', 65)).toBe('23:30 - 00:35')
  expect(flightDuration('1995-12-17T23:30:00', 1440)).toBe('23:30 - 23:30')
})

test('should throw error when passed invalid date', () => {
  expect(() => flightDuration('Invalid date', 60)).toThrowError(
    new Error('Passed invalid start date')
  )
})