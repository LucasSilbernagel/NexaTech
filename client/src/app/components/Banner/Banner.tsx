import { groq } from 'next-sanity'
import Link from 'next/link'
import { clientFetch } from '../../clientFetch'

export default async function Banner() {
  const bannerData = await clientFetch(
    groq`*[_type == 'banner']{
      "bannerText": bannerText,
      "bannerLink": bannerLink,
    }`
  )
  return (
    <div className="bg-themeGreen-1 text-white text-center">
      <p>
        {bannerData[0].bannerText}{' '}
        <Link href={bannerData[0].bannerLink.url}>
          {bannerData[0].bannerLink.text}
        </Link>
      </p>
    </div>
  )
}
