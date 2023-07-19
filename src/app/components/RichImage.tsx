import urlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import customClient from '../customClient'

/** Image component to be used in rich text blocks from the CMS */
const RichImage = ({ value }: { value: { url: string; altText: string } }) => {
  const builder = urlBuilder(customClient)
  const { width, height } = getImageDimensions(value)
  return (
    <img
      src={builder.image(value).width(800).fit('max').auto('format').url()}
      alt={value.altText}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

export default RichImage
