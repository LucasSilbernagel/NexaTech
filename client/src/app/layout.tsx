import { Figtree } from 'next/font/google'
const figtree = Figtree({ subsets: ['latin'] })
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
