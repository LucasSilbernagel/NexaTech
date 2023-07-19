import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ShopDescription from './ShopDescription'

const mockProps = {
  productName: 'Test product',
  price: 250,
  salePrice: 200,
  description: 'This is the product description',
}

describe('ShopDescription', () => {
  test('renders correctly', () => {
    render(<ShopDescription {...mockProps} />)
    expect(screen.getByTestId('shop-description')).toBeInTheDocument()
    expect(screen.getByText(mockProps.productName)).toBeInTheDocument()
    expect(screen.getByText(`$${mockProps.price}`)).toBeInTheDocument()
    screen.getAllByText(`$${mockProps.salePrice}`).forEach((_item, index) => {
      expect(
        screen.getAllByText(`$${mockProps.salePrice}`)[index]
      ).toBeInTheDocument()
    })
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
    expect(screen.getByTestId('cart-button')).toBeInTheDocument()
    expect(screen.getByTestId('cart-button')).toHaveTextContent('Add to Cart')
    expect(
      screen.getByText(`You save $${mockProps.price - mockProps.salePrice}`)
    ).toBeInTheDocument()
    screen.getAllByText('Free shipping').forEach((_item, index) => {
      expect(screen.getAllByText('Free shipping')[index]).toBeInTheDocument()
    })
    screen
      .getAllByText('45 day money back guarantee')
      .forEach((_item, index) => {
        expect(
          screen.getAllByText('45 day money back guarantee')[index]
        ).toBeInTheDocument()
      })
    screen.getAllByText('1 year limited warranty').forEach((_item, index) => {
      expect(
        screen.getAllByText('1 year limited warranty')[index]
      ).toBeInTheDocument()
    })
  })
})
