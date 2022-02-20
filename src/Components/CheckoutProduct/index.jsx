import React from 'react'
import './checkoutp.css'
import { useStateValue } from '../../Config/Provider'


const CheckoutProduct = ({ id, price, rating, image, title }) => {
    const [dispatch] = useStateValue()    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkout_product'>
            <img className='checkoutproduct_image' src={image} alt="" />
            <div className="checkoutproduct_info">
                <p className='checkoutproduct_title'>{title}</p>
                <p className='checkoutproduct_price'>
                    <small>$$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                  // eslint-disable-next-line
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct