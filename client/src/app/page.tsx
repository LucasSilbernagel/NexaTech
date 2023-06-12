import Image from 'next/image'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { clientFetch } from './clientFetch'
import { Metadata } from 'next'
import CommonWrapper from './components/CommonWrapper'

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
        <section className="flex flex-row-reverse">
          <div>
            <Image
              src={homePageData[0].heroImage}
              alt="NexaHub"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div>
            <h1 className="text-4xl text-center">
              {homePageData[0].heroTitle}
            </h1>
            <Link className="underline" href={homePageData[0].heroLinkUrl}>
              {homePageData[0].heroLinkText}
            </Link>
          </div>
        </section>
      </div>
    </CommonWrapper>
  )
}
