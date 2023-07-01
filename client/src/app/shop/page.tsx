import Image from 'next/image'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import { FaArrowRight } from 'react-icons/fa'

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'shop']{
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
  // const homePageData = await clientFetch(
  //   groq`*[_type == 'shop']{
  //     "heroTitle": heroTitle,
  //     "heroLinkUrl": heroLink.url,
  //     "heroLinkText": heroLink.text,
  //     "heroImage": heroImage.asset->url
  //   }`
  // )
  return (
    <CommonWrapper>
      <div>
        <section className="flex flex-col items-center md:flex-row-reverse gap-4 lg:gap-20 justify-center">
          <div className="mb-24">
            <div className="flex justify-between">
              <div>Carousel</div>
              <div>Description</div>
            </div>
          </div>
        </section>
      </div>
    </CommonWrapper>
  )
}
