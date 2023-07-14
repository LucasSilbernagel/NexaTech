import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import { PortableText } from '@portabletext/react'
import './About.css'
import Link from 'next/link'
import RichImage from '../components/RichImage/RichImage'
import Seo from '../Seo'

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'about'][0]{
      "seoTitle": seoTitle,
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url,
    }`
  )
  return Seo(seoData.seoTitle, seoData.seoDescription, seoData.seoImage)
}

export default async function page() {
  const pageData = await clientFetch(
    groq`*[_type == 'about'][0]{
      "aboutUs": aboutUs,
    }`
  )

  return (
    <CommonWrapper>
      <section className="py-8">
        <div className="AboutUs">
          <PortableText
            value={pageData.aboutUs}
            components={{
              types: {
                image: RichImage,
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
    </CommonWrapper>
  )
}
