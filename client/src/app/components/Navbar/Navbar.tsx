'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import customClient from '../../customClient'
import { useEffect, useState } from 'react'
import './Navbar.css'
import { useInView } from 'react-intersection-observer'

export default function Navbar() {
  const [navBarData, setNavBarData] = useState<{ logo: string }>({ logo: '' })
  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isScrollNavVisible, setIsScrollNavVisible] = useState(false)
  const [isMenuOpening, setIsMenuOpening] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { ref, inView } = useInView()

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY)
    setPrevScrollPos(currentScrollPos)
    setIsScrollNavVisible(prevScrollPos > currentScrollPos && !inView)
  }

  useEffect(() => {
    customClient
      .fetch(
        `*[_type == 'navbar'][0]{
      "logo": logo.asset->url
    }`
      )
      .then((data) => setNavBarData(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isScrollNavVisible, handleScroll])

  useEffect(() => {
    if (isMenuOpening) {
      /** Close menu when Escape key is pressed */
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsMenuOpening(false)
        }
      })
      setIsMenuOpen(true)
      /** Prevent scrolling when the menu is open. */
      document.body.style.overflowY = 'hidden'
    } else {
      document.removeEventListener('keydown', (e) => e.key === 'Escape')
      document.body.style.overflowY = 'scroll'
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 500)
    }
  }, [isMenuOpening])

  const NavBarContents = () => {
    return (
      <div className="relative">
        {isMenuOpen && (
          <div
            className="w-full h-screen absolute -top-36"
            onClick={() => setIsMenuOpening(!isMenuOpen)}
          ></div>
        )}
        <div className="flex justify-between items-center py-6 px-4 md:px-12 max-w-screen-2xl mx-auto">
          <ul className="flex justify-between gap-10 items-center uppercase font-semibold tracking-wide">
            <li>
              <Link href="/" aria-label="NexaTech">
                <div className="w-[150px]">
                  <Image
                    src={navBarData.logo}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
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
              className={`flex md:hidden bg-themeWhite-2 fixed z-30 text-2xl py-8 h-screen w-screen ${
                isMenuOpening
                  ? 'animate-slide-in right-0'
                  : 'animate-slide-out -right-[770px]'
              } ${isMenuOpen ? 'visible' : 'invisible'} ${
                currentScrollPos > 0 ? 'top-[92px]' : 'top-[170px]'
              }`}
            >
              <ul className="flex flex-col gap-12">
                <li>
                  <Link href="/shop" className="Navbar__mobile-link">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="Navbar__mobile-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="Navbar__mobile-link">
                    About
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex items-center gap-8">
            <div className="text-3xl">
              <button
                aria-label="shopping cart"
                onClick={() =>
                  alert('Cart functionality is not currently available')
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

  if (navBarData.logo.length > 0) {
    return (
      <>
        <nav ref={ref} className="w-full bg-themeYellow-1">
          <NavBarContents />
        </nav>
        <nav
          className={`duration-300 w-full fixed bg-themeWhite-2 z-10 ${
            isScrollNavVisible ? `top-0` : '-top-[100px]'
          }`}
        >
          <NavBarContents />
        </nav>
      </>
    )
  } else return null
}
