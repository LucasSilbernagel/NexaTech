import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import ShopCarousel from '../components/ShopCarousel/ShopCarousel'
import ShopDescription from '../components/ShopDescription/ShopDescription'

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
      "productName": productName,
      "price": price,
      "salePrice": salePrice,
      "description": description,
    }`
  )

  return (
    <CommonWrapper>
      <div>
        <section>
          <div className="pb-24">
            <div className="flex flex-col xl:flex-row mx-auto max-w-[700px] xl:max-w-none">
              <ShopCarousel slides={pageData[0].slides} />
              <ShopDescription
                productName={pageData[0].productName}
                price={pageData[0].price}
                salePrice={pageData[0].salePrice}
                description={pageData[0].description}
              />
            </div>
          </div>
        </section>
      </div>
    </CommonWrapper>
  )
}
