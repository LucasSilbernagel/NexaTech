import Link from 'next/link'
import CommonWrapper from './components/CommonWrapper'
import { Metadata } from 'next'
import { clientFetch } from './clientFetch'
import { groq } from 'next-sanity'
import { FaArrowRight } from 'react-icons/fa'
import Seo from './Seo'

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'homepage'][0]{
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url
    }`
  )
  return Seo('404', seoData.seoDescription, seoData.seoImage)
}

export default function NotFound() {
  return (
    <CommonWrapper>
      <div>
        <h1 className="text-5xl text-center py-24">
          Sorry, that page couldn&apos;t be found!
        </h1>
        <div className="w-full flex justify-center text-2xl pb-24">
          <Link href="/" className="ArrowLink text-xl">
            <FaArrowRight /> <span className="mx-2">Return home</span>{' '}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </CommonWrapper>
  )
}
