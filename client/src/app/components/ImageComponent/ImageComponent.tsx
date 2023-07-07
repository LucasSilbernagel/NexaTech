import urlBuilder from '@sanity/image-url'
import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'
import customClient from '../../customClient'

const ImageComponent = ({ value }: { value: SanityImageSource }) => {
  const builder = urlBuilder(customClient)
  const { width, height } = getImageDimensions(value)
  return (
    <img
      src={builder.image(value).width(800).fit('max').auto('format').url()}
      alt=""
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

export default ImageComponent
