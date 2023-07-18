'use client'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

interface IBannerProps {
  bannerText: string
  bannerLink: { text: string; url: string }
}

export default function Banner(props: IBannerProps) {
  const { bannerText, bannerLink } = props

  const pathname = usePathname()

  const shouldRenderBanner = bannerText && pathname !== bannerLink.url

  if (shouldRenderBanner) {
    return (
      <div className="bg-themeGreen-1 text-white text-lg text-center py-6 px-3 flex justify-center">
        <div>
          <p className="flex justify-center text-left">{bannerText} </p>
        </div>
        <div>
          <Link
            href={bannerLink.url}
            className="ArrowLink text-themeRed-1 uppercase"
            data-testid="banner-link"
          >
            <FaArrowRight /> <span className="mx-2">{bannerLink.text}</span>{' '}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    )
  } else return null
}
