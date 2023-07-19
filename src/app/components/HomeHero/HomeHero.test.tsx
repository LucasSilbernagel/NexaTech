import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomeHero from './HomeHero'

const mockProps = {
  heroImage: '/testImage.png',
  heroImageAltText: 'Test image',
  heroTitle: 'This is the title',
  heroLinkUrl: '/about',
  heroLinkText: 'About',
}

describe('HomeHero', () => {
  test('renders correctly', () => {
    render(<HomeHero {...mockProps} />)
    expect(screen.getByTestId('home-hero')).toBeInTheDocument()
    expect(screen.getByAltText(mockProps.heroImageAltText)).toBeInTheDocument()
    expect(screen.getByAltText(mockProps.heroImageAltText)).toHaveAttribute(
      'src',
      `/_next/image?url=%2F${mockProps.heroImage.replace(/^./, '')}&w=3840&q=75`
    )
    expect(screen.getByText(mockProps.heroTitle)).toBeInTheDocument()
    expect(screen.getByTestId('hero-link')).toBeInTheDocument()
    expect(screen.getByTestId('hero-link')).toHaveAttribute(
      'href',
      mockProps.heroLinkUrl
    )
    expect(screen.getByTestId('hero-link')).toHaveTextContent(
      mockProps.heroLinkText
    )
  })
})
