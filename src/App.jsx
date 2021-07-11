import { useState, useEffect } from 'react'
import toRomanNumeral from './helper/to-roman-numeral'

function App() {
  const [value, setValue] = useState('753')
  const [romanNumeral, setRomanNumeral] = useState('')

  useEffect(() => {
    const romanNumeralValue = toRomanNumeral(Number(value))
    setRomanNumeral(romanNumeralValue)
  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    const inputtedValue = event.target.value
    if (isNaN(inputtedValue) || Number(inputtedValue) > 10000) return
    const romanNumeralValue = toRomanNumeral(Number(inputtedValue))
    setValue(inputtedValue)
    setRomanNumeral(romanNumeralValue)
  }

  return (
    <div className='App'>
      <h1>Roman Numerator</h1>
      <p>{romanNumeral}</p>
      <input aria-label='number-input' value={value} onChange={handleChange} />
    </div>
  )
}

export default App
