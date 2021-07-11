import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

let input

beforeEach(() => {
  render(<App />)
  input = screen.getByLabelText('number-input')
})

test('renders the app heading', () => {
  expect(screen.getByText('Roman Numerator')).toBeInTheDocument()
})

test('renders an input', () => {
  const input = screen.getByLabelText('number-input')
  expect(input).toBeInTheDocument()
})

test('user can clear the input', () => {
  userEvent.clear(input)
  expect(input).toHaveValue('')
})

test('only numbers can be typed into the input', () => {
  userEvent.clear(input)
  userEvent.type(input, '2')
  expect(input).toHaveValue('2')

  userEvent.clear(input)
  userEvent.type(input, 'abc')
  expect(input).toHaveValue('')

  userEvent.clear(input)
  userEvent.type(input, '.@$%')
  expect(input).toHaveValue('')
})

test('renders correct roman numerals from number input', () => {
  userEvent.clear(input)
  userEvent.type(input, '5')
  expect(screen.getByText('V')).toBeInTheDocument()

  userEvent.clear(input)
  userEvent.type(input, '10')
  expect(screen.getByText('X')).toBeInTheDocument()

  userEvent.clear(input)
  userEvent.type(input, '26')
  expect(screen.getByText('XXVI')).toBeInTheDocument()
})

test('user cannot input value greater than 10,000', () => {
  userEvent.clear(input)
  userEvent.type(input, '10001')
  expect(input).toHaveValue('1000')
  expect(screen.getByText('M')).toBeInTheDocument()

  userEvent.clear(input)
  userEvent.type(input, '10000')
  expect(input).toHaveValue('10000')
  expect(screen.getByText('MMMMMMMMMM')).toBeInTheDocument()
})
