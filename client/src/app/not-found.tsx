import Link from 'next/link'
import CommonWrapper from './components/CommonWrapper'
import { Metadata } from 'next'
import { clientFetch } from './clientFetch'
import { groq } from 'next-sanity'
import { FaArrowRight } from 'react-icons/fa'

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'homepage']{
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url
    }`
  )
  return {
    title: `NexaTech | 404`,
    description: seoData[0].seoDescription,
    openGraph: {
      title: `NexaTech | 404`,
      description: seoData[0].seoDescription,
      url: 'https://nexatech.com/',
      siteName: 'NexaTech',
      images: [
        {
          url: seoData[0].seoImage,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default function NotFound() {
  return (
    <CommonWrapper>
      <div>
        <h1 className="text-5xl text-center my-24">
          Sorry, that page couldn&apos;t be found!
        </h1>
        <div className="w-full flex justify-center text-2xl mb-24">
          <Link href="/" className="ArrowLink text-xl">
            <FaArrowRight /> <span className="mx-2">Return home</span>{' '}
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </CommonWrapper>
  )
}
