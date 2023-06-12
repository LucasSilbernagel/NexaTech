import Image from 'next/image'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { clientFetch } from '../../clientFetch'

export default async function Navbar() {
  const navBarData = await clientFetch(
    groq`*[_type == 'navbar']{
      "logoLinkUrl": logoLink.url,
      "logoLinkAriaLabel": logoLink.ariaLabel,
      "logoLinkImage": logoLink.image.asset->url
    }`
  )
  return (
    <nav>
      <Link
        href={navBarData[0].logoLinkUrl}
        aria-label={navBarData[0].logoLinkAriaLabel}
      >
        <div className="w-[100px]">
          <Image
            src={navBarData[0].logoLinkImage}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Link>
    </nav>
  )
}
