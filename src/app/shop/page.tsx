import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import { Metadata } from 'next'
import CommonWrapper from '../components/CommonWrapper'
import ShopCarousel from '../components/ShopCarousel/ShopCarousel'
import ShopDescription from '../components/ShopDescription/ShopDescription'
import Seo from '../Seo'

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'shop'][0]{
      "seoTitle": seoTitle,
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url
    }`
  )
  return Seo(seoData.seoTitle, seoData.seoDescription, seoData.seoImage)
}

export default async function page() {
  const pageData = await clientFetch(
    groq`*[_type == 'shop'][0]{
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
      <section className="pb-24">
        <div className="flex flex-col xl:flex-row mx-auto max-w-[700px] xl:max-w-none">
          <ShopCarousel slides={pageData.slides} />
          <ShopDescription
            productName={pageData.productName}
            price={pageData.price}
            salePrice={pageData.salePrice}
            description={pageData.description}
          />
        </div>
      </section>
    </CommonWrapper>
  )
}
