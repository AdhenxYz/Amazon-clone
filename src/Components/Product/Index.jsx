import React from 'react'
import { useStateValue } from '../../Config/Provider'
import './product.css'

const Product = ({id, title, image, price, rating}) => {
  const [dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id, title, image, price, rating,
            }
        })
  }
    return (
    <div className='products'>
        <div className="info_product">
            <p>{title}</p>
            <p className='price_products'>
                <small>$</small><strong>{price}</strong></p>
            <div className="rating_products">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        // eslint-disable-next-line
                        <p>⭐</p>))
                }
            </div>
        </div>
        <img src={image} alt="image_product" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product