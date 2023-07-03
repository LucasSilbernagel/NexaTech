import { FaArrowRight } from 'react-icons/fa'
import './ShopDescription.css'

interface IShopDescriptionProps {
  productName: string
  price: number
  salePrice: number
  description: string
}

const ShopDescription = (props: IShopDescriptionProps) => {
  const { productName, price, salePrice, description } = props

  return (
    <div className="ShopDescription">
      <div>
        <div className="flex flex-col sm:flex-row gap-4 items-end mb-4">
          <div>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-wide">
              {productName}
            </h1>
          </div>
          <div className="text-lg font-bold">
            <p>
              <span className={`${salePrice ? 'mr-3 line-through' : 'mr-0'}`}>
                ${price}
              </span>
              {salePrice && (
                <span className="text-themeRed-1">${salePrice}</span>
              )}
            </p>
          </div>
        </div>
        <p className="leading-relaxed mb-6 text-lg text-themeGrey-1">
          {description}
        </p>
        <div className="flex text-lg font-bold w-full">
          <div className="bg-white py-4 px-6">
            <p>${salePrice ? salePrice : price}</p>
          </div>
          <div className="bg-themeRed-1 text-white flex items-center w-full">
            <button className="CartButton">
              <span>Add to Cart</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
        {salePrice && (
          <div className="text-center mt-4 bg-white text-themeRed-1 py-2">
            <p>You save ${price - salePrice}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShopDescription
