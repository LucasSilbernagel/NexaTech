import RootLayout from './layout'

export default function CommonWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      <header>
        <p>This is the header</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>This is the footer</p>
      </footer>
    </RootLayout>
  )
}
