import RootLayout from '../layout'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

export default function CommonWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      <header>
        <Banner />
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </RootLayout>
  )
}
