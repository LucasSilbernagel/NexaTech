import { groq } from 'next-sanity'
import Link from 'next/link'
import { clientFetch } from '../../clientFetch'
import { FaArrowRight } from 'react-icons/fa'

export default async function Banner() {
  const bannerData = await clientFetch(
    groq`*[_type == 'banner']{
      "bannerText": bannerText,
      "bannerLink": bannerLink,
    }`
  )
  if (bannerData[0].bannerText) {
    return (
      <div className="bg-themeGreen-1 text-white text-lg text-center py-6">
        <p className="flex justify-center">
          {bannerData[0].bannerText}{' '}
          <Link
            href={bannerData[0].bannerLink.url}
            className="ml-2 text-themeRed-1 font-bold flex items-center"
          >
            {bannerData[0].bannerLink.text} <FaArrowRight className="ml-2" />
          </Link>
        </p>
      </div>
    )
  } else return null
}
