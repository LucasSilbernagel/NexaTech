import RootLayout from '../layout'
import Banner from './Banner/Banner'
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
      <footer>
        <p>This is the footer</p>
      </footer>
    </RootLayout>
  )
}
