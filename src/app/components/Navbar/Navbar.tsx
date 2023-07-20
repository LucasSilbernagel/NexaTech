'use client'
import { useEffect, useState } from 'react'
import './Navbar.css'
import { useInView } from 'react-intersection-observer'
import NavBarContents from './NavBarContents/NavBarContents'
import ClientOnly from '../ClientOnly'

export default function Navbar({ logo }: { logo: string }) {
  const [currentScrollPos, setCurrentScrollPos] = useState<number>(0)
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
  const [isScrollNavVisible, setIsScrollNavVisible] = useState<boolean>(false)
  const [isMenuOpening, setIsMenuOpening] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const { ref, inView } = useInView()

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY)
    setPrevScrollPos(currentScrollPos)
    setIsScrollNavVisible(prevScrollPos > currentScrollPos && !inView)
  }

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

  if (logo.length > 0) {
    return (
      <>
        <nav
          ref={ref}
          className="w-full bg-themeYellow-1"
          data-testid="static-navbar"
        >
          <ClientOnly>
            <NavBarContents
              isMenuOpen={isMenuOpen}
              setIsMenuOpening={setIsMenuOpening}
              logo={logo}
              isMenuOpening={isMenuOpening}
              currentScrollPos={currentScrollPos}
              isScrollNavVisible={isScrollNavVisible}
            />
          </ClientOnly>
        </nav>
        <nav
          className={`duration-300 w-full fixed bg-themeWhite-2 z-10 ${
            isScrollNavVisible ? `top-0` : '-top-[100px]'
          }`}
          data-testid="sticky-navbar"
        >
          <ClientOnly>
            <NavBarContents
              isMenuOpen={isMenuOpen}
              setIsMenuOpening={setIsMenuOpening}
              logo={logo}
              isMenuOpening={isMenuOpening}
              currentScrollPos={currentScrollPos}
              isScrollNavVisible={isScrollNavVisible}
            />
          </ClientOnly>
        </nav>
      </>
    )
  } else return null
}
