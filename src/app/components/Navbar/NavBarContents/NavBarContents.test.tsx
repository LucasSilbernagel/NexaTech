import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavBarContents from './NavBarContents'

describe('NavBarContents', () => {
  test('renders correctly with the menu closed', () => {
    render(
      <NavBarContents
        isScrollNavVisible={false}
        logo="/logo.png"
        currentScrollPos={0}
        isMenuOpening={false}
        setIsMenuOpening={jest.fn()}
        isMenuOpen={false}
      />
    )
    expect(screen.getByTestId('nav-bar-contents')).toBeInTheDocument()
    expect(screen.getByTestId('logo-link')).toBeInTheDocument()
    expect(screen.getByTestId('logo-link')).toHaveAttribute('href', '/')
    expect(screen.getByTestId('logo-image')).toBeInTheDocument()
    expect(screen.getByTestId('logo-image')).toHaveAttribute(
      'src',
      `/_next/image?url=%2F${'/logo.png'.replace(/^./, '')}&w=3840&q=75`
    )
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-out -right-[770px]'
    )
    expect(screen.getByTestId('mobile-menu')).toHaveClass('invisible')
    screen.getAllByText('Shop').forEach((_item, index) => {
      expect(screen.getAllByText('Shop')[index]).toBeInTheDocument()
      expect(screen.getAllByText('Shop')[index]).toHaveAttribute(
        'href',
        '/shop'
      )
    })
    screen.getAllByText('Blog').forEach((_item, index) => {
      expect(screen.getAllByText('Blog')[index]).toBeInTheDocument()
      expect(screen.getAllByText('Blog')[index]).toHaveAttribute(
        'href',
        '/blog'
      )
    })
    screen.getAllByText('About').forEach((_item, index) => {
      expect(screen.getAllByText('About')[index]).toBeInTheDocument()
      expect(screen.getAllByText('About')[index]).toHaveAttribute(
        'href',
        '/about'
      )
    })
    expect(screen.getByTestId('shopping-cart-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).not.toHaveClass(
      'MobileMenu__Button--open'
    )
    expect(screen.queryByTestId('menu-overlay')).toBeNull()
  })

  test('renders correctly with the menu opening', () => {
    render(
      <NavBarContents
        isScrollNavVisible={false}
        logo="/logo.png"
        currentScrollPos={0}
        isMenuOpening={true}
        setIsMenuOpening={jest.fn()}
        isMenuOpen={false}
      />
    )
    expect(screen.getByTestId('nav-bar-contents')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toHaveClass(
      'animate-slide-in right-0'
    )
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-button')).toHaveClass(
      'MobileMenu__Button--open'
    )
  })

  test('renders correctly with the menu open', () => {
    render(
      <NavBarContents
        isScrollNavVisible={false}
        logo="/logo.png"
        currentScrollPos={0}
        isMenuOpening={false}
        setIsMenuOpening={jest.fn()}
        isMenuOpen={true}
      />
    )
    expect(screen.getByTestId('nav-bar-contents')).toBeInTheDocument()
    expect(screen.getByTestId('menu-overlay')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu')).toHaveClass('visible')
  })
})
