import { splitToThousands } from '../splitToThousands'

test('should don`t split numbers that less 999 modulo', () => {
  expect(splitToThousands(0)).toBe('0')

  expect(splitToThousands(999)).toBe('999')
  expect(splitToThousands(-999)).toBe('-999')
})

test('should split numbers that more 999 modulo', () => {
  expect(splitToThousands(1234)).toBe('1 234')
  expect(splitToThousands(-1965)).toBe('-1 965')

  expect(splitToThousands(1234567)).toBe('1 234 567')
  expect(splitToThousands(-1234567)).toBe('-1 234 567')
})
