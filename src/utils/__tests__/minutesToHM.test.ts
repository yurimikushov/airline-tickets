import { minutesToHM } from '../minutesToHM'

test('should return minutes representation like `10м`', () => {
  expect(minutesToHM(0)).toBe('0м')
  expect(minutesToHM(10)).toBe('10м')
  expect(minutesToHM(59)).toBe('59м')
})

test('should return hours and minutes representation like `1ч 10m`', () => {
  expect(minutesToHM(60)).toBe('1ч 0м')
  expect(minutesToHM(70)).toBe('1ч 10м')
  expect(minutesToHM(119)).toBe('1ч 59м')
})
