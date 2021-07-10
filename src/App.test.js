import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app heading', () => {
  render(<App />)
  const linkElement = screen.getByText('Roman Numerator')
  expect(linkElement).toBeInTheDocument()
})
