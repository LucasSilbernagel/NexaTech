import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import { PortableText } from '@portabletext/react'
import './About.css'
import Link from 'next/link'
import urlBuilder from '@sanity/image-url'
import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'
import customClient from '../customClient'

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'about']{
      "seoTitle": seoTitle,
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url,
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
  const pageData = await clientFetch(
    groq`*[_type == 'about']{
      "aboutUs": aboutUs,
    }`
  )

  const ImageComponent = ({ value }: { value: SanityImageSource }) => {
    const builder = urlBuilder(customClient)
    const { width, height } = getImageDimensions(value)
    return (
      <img
        src={builder.image(value).width(800).fit('max').auto('format').url()}
        alt=""
        loading="lazy"
        style={{
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    )
  }

  return (
    <CommonWrapper>
      <div>
        <section className="py-8">
          <div className="AboutUs">
            <PortableText
              value={pageData[0].aboutUs}
              components={{
                types: {
                  image: ImageComponent,
                },
                marks: {
                  link: ({ value, children }) => {
                    const { href } = value
                    return (
                      <Link
                        target={href.includes('http') ? '_blank' : ''}
                        rel={href.includes('http') ? 'noopener noreferrer' : ''}
                        href={href}
                      >
                        {children}
                      </Link>
                    )
                  },
                },
              }}
            />
          </div>
        </section>
      </div>
    </CommonWrapper>
  )
}