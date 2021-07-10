const numerals = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
}

const convertToRN = (value) => {
  if (!value || typeof value !== 'number') {
    return null
  }

  if (numerals[value]) {
    return numerals[value]
  }

  const descDecimalValues = Object.keys(numerals).reverse()
  let remainder = value
  let romanNumeral = ''

  while (remainder > 0) {
    const decimalValue = descDecimalValues.find((numeral) => numeral <= remainder)
    romanNumeral += numerals[decimalValue]
    remainder -= decimalValue
  }

  return romanNumeral
}

export default convertToRN
