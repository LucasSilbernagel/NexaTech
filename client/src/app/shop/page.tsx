import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import ShopCarousel from '../components/ShopCarousel/ShopCarousel'

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
  const pageData = await clientFetch(
    groq`*[_type == 'shop']{
      "slides": slides[]{
        'altText': altText,
        'image': image.asset->url
      },
    }`
  )

  return (
    <CommonWrapper>
      <div>
        <section>
          <div className="mb-24">
            <div className="flex justify-between">
              <ShopCarousel slides={pageData[0].slides} />
              <div>Description</div>
            </div>
          </div>
        </section>
      </div>
    </CommonWrapper>
  )
}
