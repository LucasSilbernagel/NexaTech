import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Banner from './Banner'

const mockProps = {
  bannerText: 'Mock banner text',
  bannerLink: { text: 'Shop now', url: '/shop' },
}

describe('Banner', () => {
  test('renders correctly', () => {
    render(<Banner {...mockProps} />)
    expect(screen.getByText(mockProps.bannerText)).toBeInTheDocument()
    expect(screen.getByTestId('banner-link')).toBeInTheDocument()
    expect(screen.getByTestId('banner-link')).toHaveAttribute(
      'href',
      mockProps.bannerLink.url
    )
    expect(screen.getByTestId('banner-link')).toHaveTextContent(
      mockProps.bannerLink.text
    )
  })
})
