import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import '../../../../__mocks__/intersectionObserverMock'

describe('Navbar', () => {
  test('renders correctly', () => {
    render(<Navbar logo="/logo.png" />)
    expect(screen.getByTestId('static-navbar')).toBeInTheDocument()
    expect(screen.getByTestId('sticky-navbar')).toBeInTheDocument()
    screen.getAllByTestId('nav-bar-contents').forEach((_item, index) => {
      expect(
        screen.getAllByTestId('nav-bar-contents')[index]
      ).toBeInTheDocument()
    })
  })
})
