import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

const socialLinks = ['facebook', 'instagram', 'twitter', 'pinterest', 'youtube']

describe('Footer', () => {
  test('renders correctly', () => {
    render(<Footer />)
    expect(screen.getByTestId('email-form')).toBeInTheDocument()
    expect(screen.getByText('Follow us')).toBeInTheDocument()
    socialLinks.forEach((link) => {
      expect(screen.getByTestId(`${link}-link`)).toBeInTheDocument()
      expect(screen.getByTestId(`${link}-link`)).toHaveAttribute('href', '#')
    })
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toHaveAttribute('href', '/shop')
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toHaveAttribute('href', '/blog')
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('About')).toHaveAttribute('href', '/about')
    expect(screen.getByText('Built by')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toBeInTheDocument()
    expect(screen.getByText('Lucas Silbernagel')).toHaveAttribute(
      'href',
      'https://lucassilbernagel.com/'
    )
  })
})
