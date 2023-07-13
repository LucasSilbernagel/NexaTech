import { groq } from 'next-sanity'
import { clientFetch } from './clientFetch'
import { Metadata } from 'next'
import CommonWrapper from './components/CommonWrapper'
import Seo from './Seo'
import HomeHero from './components/HomeHero/HomeHero'

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await clientFetch(
    groq`*[_type == 'homepage'][0]{
      "seoTitle": seoTitle,
      "seoDescription": seoDescription,
      "seoImage": seoImage.asset->url
    }`
  )
  return Seo(seoData.seoTitle, seoData.seoDescription, seoData.seoImage)
}

export default async function page() {
  const homePageData = await clientFetch(
    groq`*[_type == 'homepage'][0]{
      "heroTitle": heroTitle,
      "heroLinkUrl": heroLink.url,
      "heroLinkText": heroLink.text,
      "heroImageUrl": heroImage.asset->url,
      "heroImage": heroImage,
    }`
  )
  return (
    <CommonWrapper>
      <HomeHero
        heroImage={homePageData.heroImageUrl}
        heroImageAltText={homePageData.heroImage.altText}
        heroTitle={homePageData.heroTitle}
        heroLinkUrl={homePageData.heroLinkUrl}
        heroLinkText={homePageData.heroLinkText}
      />
    </CommonWrapper>
  )
}
