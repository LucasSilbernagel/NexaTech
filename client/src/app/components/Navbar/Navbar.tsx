'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import customClient from '../../customClient'
import { useEffect, useState } from 'react'

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
      <nav>
        <ul>
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
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div>
          <button
            aria-label="shopping cart"
            onClick={() => alert('Products available for purchase soon!')}
          >
            <FaShoppingCart />
          </button>
        </div>
      </nav>
    )
  } else return null
}
