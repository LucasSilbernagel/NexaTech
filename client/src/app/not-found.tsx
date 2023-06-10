import Link from 'next/link'
import CommonWrapper from './CommonWrapper'
import { Metadata } from 'next'
import { clientFetch } from './clientFetch'
import { groq } from 'next-sanity'

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
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <p>
          <Link href="/">Return home</Link>
        </p>
      </div>
    </CommonWrapper>
  )
}
