'use client'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import customClient from '@/app/customClient'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Banner() {
  const [bannerData, setBannerData] = useState({
    bannerText: '',
    bannerLink: { text: '', url: '' },
  })

  const getData = async () => {
    const data = await customClient.fetch(
      `*[_type == 'banner'][0]{
        "bannerText": bannerText,
        "bannerLink": bannerLink,
      }`
    )
    setBannerData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const pathname = usePathname()

  const shouldRenderBanner =
    bannerData.bannerText && pathname !== bannerData.bannerLink.url

  if (shouldRenderBanner) {
    return (
      <div className="bg-themeGreen-1 text-white text-lg text-center py-6 px-3 flex justify-center">
        <div>
          <p className="flex justify-center text-left">
            {bannerData.bannerText}{' '}
          </p>
        </div>
        <div>
          <Link
            href={bannerData.bannerLink.url}
            className="ArrowLink text-themeRed-1 uppercase"
          >
            <FaArrowRight />{' '}
            <span className="mx-2">{bannerData.bannerLink.text}</span>{' '}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    )
  } else return null
}
