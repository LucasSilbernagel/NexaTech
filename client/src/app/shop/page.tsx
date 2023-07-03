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
          <div className="mb-24">
            <div className="flex flex-col xl:flex-row mx-auto max-w-[700px] xl:max-w-none">
              <ShopCarousel slides={pageData[0].slides} />
              <div className="bg-themeYellow-2 xl:max-w-[600px] p-6 sm:p-12">
                <div>
                  <div className="flex flex-col sm:flex-row gap-4 items-end mb-4">
                    <div>
                      <h1 className="text-5xl sm:text-6xl font-semibold tracking-wide">
                        {pageData[0].productName}
                      </h1>
                    </div>
                    <div className="text-lg font-bold">
                      <p>
                        <span
                          className={`${
                            pageData[0].salePrice ? 'mr-3 line-through' : 'mr-0'
                          }`}
                        >
                          ${pageData[0].price}
                        </span>
                        {pageData[0].salePrice && (
                          <span className="text-themeRed-1">
                            ${pageData[0].salePrice}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed mb-6 text-lg text-themeGrey-1">
                    {pageData[0].description}
                  </p>
                  <div className="flex text-lg font-bold w-full">
                    <div className="bg-white py-4 px-6">
                      <p>
                        $
                        {pageData[0].salePrice
                          ? pageData[0].salePrice
                          : pageData[0].price}
                      </p>
                    </div>
                    <div className="bg-themeRed-1 text-white flex items-center w-full">
                      <button className="w-full h-full">Add to Cart</button>
                    </div>
                  </div>
                  {pageData[0].salePrice && (
                    <div className="text-center mt-4 bg-white text-themeRed-1 py-2">
                      <p>
                        You save ${pageData[0].price - pageData[0].salePrice}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CommonWrapper>
  )
}
