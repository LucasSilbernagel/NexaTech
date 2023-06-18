'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import customClient from '../../customClient'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

interface INavBarData {
  logoLinkUrl: string
  logoLinkAriaLabel: string
  logoLinkImage: string
}

export default function Navbar() {
  const [navBarData, setNavBarData] = useState<INavBarData[]>([])

  useEffect(() => {
    customClient
      .fetch(
        `*[_type == 'navbar']{
      "logoLinkUrl": logoLink.url,
      "logoLinkAriaLabel": logoLink.ariaLabel,
      "logoLinkImage": logoLink.image.asset->url
    }`
      )
      .then((data) => setNavBarData(data))
      .catch(console.error)
  }, [])

  if (navBarData.length > 0) {
    return (
      <nav className="bg-themeYellow-1">
        <div className="flex justify-between py-6 px-4 md:px-12">
          <ul className="flex justify-between gap-10 items-center uppercase font-semibold tracking-wide">
            <li>
              <Link
                href={navBarData[0].logoLinkUrl}
                aria-label={navBarData[0].logoLinkAriaLabel}
              >
                <div className="w-[150px]">
                  <Image
                    src={navBarData[0].logoLinkImage}
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
                  <Link
                    href="/products"
                    className={styles.Navbar__desktop__link}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={styles.Navbar__desktop__link}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={styles.Navbar__desktop__link}>
                    About
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="text-3xl">
            <button
              aria-label="shopping cart"
              onClick={() => alert('Products available for purchase soon!')}
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </nav>
    )
  } else return null
}
