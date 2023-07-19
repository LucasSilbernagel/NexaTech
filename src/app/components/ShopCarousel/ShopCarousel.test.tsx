import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ShopCarousel from './ShopCarousel'

const mockSlides = [
  { image: '/image1.png', altText: 'First image' },
  { image: '/image2.png', altText: 'Second image' },
]

describe('ShopCarousel', () => {
  test('renders correctly', () => {
    render(<ShopCarousel slides={mockSlides} />)
    expect(screen.getByTestId('shop-carousel')).toBeInTheDocument()
    expect(screen.getByTestId('prev-button')).toBeInTheDocument()
    expect(screen.getByTestId('next-button')).toBeInTheDocument()
    mockSlides.forEach((slide) => {
      screen.getAllByAltText(slide.altText).forEach((_image, index) => {
        expect(screen.getAllByAltText(slide.altText)[index]).toBeInTheDocument()
        expect(screen.getAllByAltText(slide.altText)[index]).toHaveAttribute(
          'src',
          `/_next/image?url=%2F${slide.image.replace(/^./, '')}&w=3840&q=75`
        )
      })
    })
  })
})
