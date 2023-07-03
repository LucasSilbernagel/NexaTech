import { groq } from 'next-sanity'
import Link from 'next/link'
import { clientFetch } from '../../clientFetch'
import { FaArrowRight } from 'react-icons/fa'
import { headers } from 'next/headers'

export default async function Banner() {
  const bannerData = await clientFetch(
    groq`*[_type == 'banner']{
      "bannerText": bannerText,
      "bannerLink": bannerLink,
    }`
  )

  const headersList = headers()
  const fullUrl = headersList.get('referer') || ''

  if (bannerData[0].bannerText && !fullUrl.includes('blog')) {
    return (
      <div className="bg-themeGreen-1 text-white text-lg text-center py-6 px-3 flex justify-center">
        <div>
          <p className="flex justify-center text-left">
            {bannerData[0].bannerText}{' '}
          </p>
        </div>
        <div>
          <Link
            href={bannerData[0].bannerLink.url}
            className="ArrowLink text-themeRed-1 uppercase"
          >
            <FaArrowRight />{' '}
            <span className="mx-2">{bannerData[0].bannerLink.text}</span>{' '}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    )
  } else return null
}
