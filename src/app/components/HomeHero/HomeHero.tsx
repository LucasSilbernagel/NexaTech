import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import './HomeHero.css'

interface IHomeHeroProps {
  heroImage: string
  heroImageAltText: string
  heroTitle: string
  heroLinkUrl: string
  heroLinkText: string
}

const HomeHero = (props: IHomeHeroProps) => {
  const { heroImage, heroImageAltText, heroTitle, heroLinkUrl, heroLinkText } =
    props
  return (
    <section className="HomeHero" data-testid="home-hero">
      <div className="w-full max-w-[300px] lg:max-w-[500px]">
        <Image
          priority
          src={heroImage}
          alt={heroImageAltText}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="mb-24">
        <h1 className="HomeHero__title">{heroTitle}</h1>
        <Link
          data-testid="hero-link"
          href={heroLinkUrl}
          className="ArrowLink text-xl"
        >
          <FaArrowRight /> <span className="mx-2">{heroLinkText}</span>{' '}
          <FaArrowRight />
        </Link>
      </div>
    </section>
  )
}

export default HomeHero
