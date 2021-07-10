import toRomanNumeral from './to-roman-numeral'

test('returns null if parameter is NaN', () => {
  expect(toRomanNumeral('string')).toBeNull()
  expect(toRomanNumeral('26')).toBeNull()
  expect(toRomanNumeral('abc')).toBeNull()
})

test('returns null if parameter is 0', () => {
  expect(toRomanNumeral(0)).toBeNull()
})

test('returns null if parameter is a negative number', () => {
  expect(toRomanNumeral(-1)).toBeNull()
})

test('converts input integer to correct roman numeral', () => {
  expect(toRomanNumeral(1)).toBe('I')
  expect(toRomanNumeral(3)).toBe('III')
  expect(toRomanNumeral(4)).toBe('IV')
  expect(toRomanNumeral(5)).toBe('V')
  expect(toRomanNumeral(7)).toBe('VII')
  expect(toRomanNumeral(9)).toBe('IX')
  expect(toRomanNumeral(10)).toBe('X')
  expect(toRomanNumeral(26)).toBe('XXVI')
  expect(toRomanNumeral(69)).toBe('LXIX')
  expect(toRomanNumeral(420)).toBe('CDXX')
  expect(toRomanNumeral(550)).toBe('DL')
  expect(toRomanNumeral(1994)).toBe('MCMXCIV')
})
