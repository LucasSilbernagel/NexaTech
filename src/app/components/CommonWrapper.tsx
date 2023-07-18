import { groq } from 'next-sanity'
import { clientFetch } from '../clientFetch'
import RootLayout from '../layout'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

export default async function CommonWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const bannerData = await clientFetch(
    groq`*[_type == 'banner'][0]{
      "bannerText": bannerText,
      "bannerLink": bannerLink,
    }`
  )

  const navbarData = await clientFetch(
    groq`*[_type == 'navbar'][0]{
      "logo": logo.asset->url
    }`
  )

  return (
    <RootLayout>
      <header>
        <Banner
          bannerText={bannerData.bannerText}
          bannerLink={bannerData.bannerLink}
        />
        <Navbar logo={navbarData.logo} />
      </header>
      <main>{children}</main>
      <Footer />
    </RootLayout>
  )
}
