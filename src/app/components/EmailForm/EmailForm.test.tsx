import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import EmailForm from './EmailForm'

describe('EmailForm', () => {
  test('renders correctly', () => {
    render(<EmailForm />)
    expect(screen.getByTestId('email-form')).toBeInTheDocument()
    expect(
      screen.getByText('Get the inside scoop on all things NexaTech.')
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('Enter your email address')
    ).toBeInTheDocument()
    expect(screen.getByTestId('email-input')).toBeInTheDocument()
    expect(screen.getByTestId('email-input')).toHaveValue('')
    waitFor(() => {
      fireEvent.change(screen.getByTestId('email-input'), {
        target: { value: 'example@email.com' },
      })
    })
    expect(screen.getByTestId('email-input')).toHaveValue('example@email.com')
    expect(screen.getByTestId('email-submit-button')).toBeInTheDocument()
  })
})
