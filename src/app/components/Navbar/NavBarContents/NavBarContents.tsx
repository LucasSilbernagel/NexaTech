import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'
import './NavBarContents.css'

interface INavBarContentsProps {
  isMenuOpen: boolean
  setIsMenuOpening: (boolean: boolean) => void
  logo: string
  isMenuOpening: boolean
  currentScrollPos: number
  isScrollNavVisible: boolean
}

const NavBarContents = (props: INavBarContentsProps) => {
  const {
    isMenuOpen,
    setIsMenuOpening,
    logo,
    isMenuOpening,
    currentScrollPos,
    isScrollNavVisible,
  } = props

  const getMobileMenuPositionAtTopOfPage = () => {
    if (
      typeof document !== 'undefined' &&
      typeof document.getElementById('banner')?.offsetHeight !== 'undefined'
    ) {
      return 'top-[170px]'
    } else return 'top-[92px]'
  }

  return (
    <div className="relative" data-testid="nav-bar-contents">
      {isMenuOpen && (
        <div
          data-testid="menu-overlay"
          className="w-full h-screen absolute -top-36"
          onClick={() => setIsMenuOpening(!isMenuOpen)}
        ></div>
      )}
      <div className="flex justify-between items-center py-6 px-4 md:px-12 max-w-screen-2xl mx-auto">
        <ul className="flex justify-between gap-10 items-center uppercase font-semibold tracking-wide">
          <li>
            <Link href="/" aria-label="home" data-testid="logo-link">
              <div className="w-[150px]">
                <Image
                  priority
                  data-testid="logo-image"
                  src={logo}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  placeholder="empty"
                />
              </div>
            </Link>
          </li>
          <li className="hidden md:flex">
            <ul className="flex justify-between gap-10">
              <li>
                <Link href="/shop" className="Navbar__desktop-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="Navbar__desktop-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="Navbar__desktop-link">
                  About
                </Link>
              </li>
            </ul>
          </li>
          <li
            data-testid="mobile-menu"
            className={`flex md:hidden bg-themeWhite-2 fixed z-30 text-2xl py-8 h-screen w-screen ${
              isMenuOpening
                ? 'animate-slide-in right-0'
                : 'animate-slide-out -right-[770px]'
            } ${isMenuOpen ? 'visible' : 'invisible'} ${
              currentScrollPos > 0
                ? 'top-[92px]'
                : getMobileMenuPositionAtTopOfPage()
            }`}
          >
            <ul className="flex flex-col gap-12">
              <li>
                <Link
                  href="/shop"
                  className="Navbar__mobile-link"
                  onClick={() => setIsMenuOpening(!isMenuOpen)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="Navbar__mobile-link"
                  onClick={() => setIsMenuOpening(!isMenuOpen)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="Navbar__mobile-link"
                  onClick={() => setIsMenuOpening(!isMenuOpen)}
                >
                  About
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex items-center gap-8">
          <div className="text-3xl">
            <button
              data-testid="shopping-cart-button"
              aria-label="shopping cart"
              onClick={() =>
                alert('Sorry, this demo site does not include a shopping cart!')
              }
            >
              <FaShoppingCart />
            </button>
          </div>
          <div
            className={`flex md:hidden ${
              isScrollNavVisible ? 'top-0' : 'top-[-100px]'
            }`}
          >
            <button
              aria-expanded={isMenuOpening}
              onClick={() => setIsMenuOpening(!isMenuOpen)}
              className={`MobileMenu__Button ${
                isMenuOpening ? `MobileMenu__Button--open` : ''
              }`}
              data-testid="mobile-menu-button"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarContents
