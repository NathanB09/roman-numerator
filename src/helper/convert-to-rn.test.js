import convertToRN from './convert-to-rn'

test('returns null if parameter is NaN', () => {
  expect(convertToRN('string')).toBe(null)
  expect(convertToRN('26')).toBe(null)
  expect(convertToRN('abc')).toBe(null)
})

test('returns null if parameter is 0', () => {
  expect(convertToRN(0)).toBe(null)
})

test('returns null if parameter is a negative number', () => {
  expect(convertToRN(-1)).toBe(null)
})

test('converts input integer to correct roman numeral', () => {
  expect(convertToRN(1)).toBe('I')
  expect(convertToRN(3)).toBe('III')
  expect(convertToRN(4)).toBe('IV')
  expect(convertToRN(5)).toBe('V')
  expect(convertToRN(7)).toBe('VII')
  expect(convertToRN(9)).toBe('IX')
  expect(convertToRN(10)).toBe('X')
  expect(convertToRN(26)).toBe('XXVI')
  expect(convertToRN(69)).toBe('LXIX')
  expect(convertToRN(420)).toBe('CDXX')
  expect(convertToRN(550)).toBe('DL')
  expect(convertToRN(1994)).toBe('MCMXCIV')
})
