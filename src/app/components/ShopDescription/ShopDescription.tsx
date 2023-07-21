'use client'
import {
  FaArrowRight,
  FaDollarSign,
  FaShieldAlt,
  FaTruck,
} from 'react-icons/fa'
import './ShopDescription.css'
import { Carousel } from 'react-responsive-carousel'

interface IShopDescriptionProps {
  productName: string
  price: number
  salePrice: number
  description: string
}

const ShopDescription = (props: IShopDescriptionProps) => {
  const { productName, price, salePrice, description } = props

  const carouselOptions = {
    infiniteLoop: true,
    showIndicators: false,
    showThumbs: false,
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    stopOnHover: true,
  }

  const purchaseCarouselItems = [
    {
      text: 'Free shipping',
      icon: <FaTruck className="PurchaseCarousel__icon" />,
    },
    {
      text: '45 day money back guarantee',
      icon: <FaDollarSign className="PurchaseCarousel__icon" />,
    },
    {
      text: '1 year limited warranty',
      icon: <FaShieldAlt className="PurchaseCarousel__icon" />,
    },
  ]

  return (
    <div className="ShopDescription" data-testid="shop-description">
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
                <span className="text-themeRed-1 bg-black p-1 rounded-sm">
                  ${salePrice}
                </span>
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
          <div className="bg-themeRed-1 text-black flex items-center w-full">
            <button
              data-testid="cart-button"
              className="CartButton"
              onClick={() =>
                alert(
                  `This demo site does not have a working shopping cart, but if it did, this button would add the item to your cart!`
                )
              }
            >
              <span>Add to Cart</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
        {salePrice && (
          <div className="text-center mt-4 bg-white text-black py-2">
            <p>You save ${price - salePrice}</p>
          </div>
        )}
        <div>
          <Carousel {...carouselOptions}>
            {purchaseCarouselItems.map((item, index) => {
              return (
                <div key={index} className="PurchaseCarousel">
                  <div>{item.icon}</div>
                  <div>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default ShopDescription
