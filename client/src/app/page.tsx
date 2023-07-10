import Image from 'next/image'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { clientFetch } from './clientFetch'
import { Metadata } from 'next'
import CommonWrapper from './components/CommonWrapper'
import { FaArrowRight } from 'react-icons/fa'

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'homepage']{
      "seoTitle": seoTitle,
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url
    }`
  )
  return {
    title: `NexaTech | ${seoData[0].seoTitle}`,
    description: seoData[0].seoDescription,
    openGraph: {
      title: `NexaTech | ${seoData[0].seoTitle}`,
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

export default async function page() {
  const homePageData = await clientFetch(
    groq`*[_type == 'homepage']{
      "heroTitle": heroTitle,
      "heroLinkUrl": heroLink.url,
      "heroLinkText": heroLink.text,
      "heroImage": heroImage.asset->url
    }`
  )
  return (
    <CommonWrapper>
      <div>
        <section className="flex flex-col items-center md:flex-row-reverse gap-4 lg:gap-20 justify-center">
          <div className="w-full max-w-[300px] lg:max-w-[500px]">
            <Image
              priority
              src={homePageData[0].heroImage}
              alt="NexaHub"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="mb-24">
            <h1 className="text-3xl lg:text-5xl text-left lg:text-center mt-0 lg:mt-36 mb-8 lg:mb-12 font-semibold">
              {homePageData[0].heroTitle}
            </h1>
            <Link
              href={homePageData[0].heroLinkUrl}
              className="ArrowLink text-xl"
            >
              <FaArrowRight />{' '}
              <span className="mx-2">{homePageData[0].heroLinkText}</span>{' '}
              <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </CommonWrapper>
  )
}
