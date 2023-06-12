import RootLayout from '../layout'
import Navbar from './Navbar/Navbar'

export default function CommonWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      <header>
        {/* @ts-expect-error Server Component */}
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <p>This is the footer</p>
      </footer>
    </RootLayout>
  )
}
