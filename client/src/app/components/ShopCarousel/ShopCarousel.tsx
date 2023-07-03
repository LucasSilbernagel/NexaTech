'use client'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function ShopCarousel({
  slides,
}: {
  slides: { altText: string; image: string }[]
}) {
  const customPrevArrow = (
    clickHandler: () => void,
    hasPrev: boolean,
    label: string
  ) =>
    hasPrev && (
      <button
        onClick={clickHandler}
        title={label}
        className="text-white text-5xl absolute z-10 bottom-8 right-16"
      >
        <FaChevronLeft />
      </button>
    )

  const customNextArrow = (
    clickHandler: () => void,
    hasNext: boolean,
    label: string
  ) =>
    hasNext && (
      <button
        onClick={clickHandler}
        title={label}
        className="text-white text-5xl absolute bottom-8 right-0"
      >
        <FaChevronRight />
      </button>
    )

  const carouselOptions = {
    infiniteLoop: true,
    useKeyboardArrows: true,
    showIndicators: false,
    renderArrowPrev: customPrevArrow,
    renderArrowNext: customNextArrow,
    statusFormatter: (current: number, total: number) =>
      `${current} / ${total}`,
    showThumbs: false,
  }

  return (
    <div className="w-full xl:w-7/12">
      <Carousel {...carouselOptions} className="Carousel">
        {slides.map((slide) => {
          return (
            <div key={slide.image}>
              <Image
                priority
                src={slide.image}
                alt={slide.altText}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
