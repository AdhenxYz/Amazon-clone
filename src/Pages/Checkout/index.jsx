import React from 'react'
import { useStateValue } from '../../Config/Provider'
import './checkout.css'
import CheckoutProduct from '../../Components/CheckoutProduct'
import Subtotal from '../../Components/Subtotal/Subtotal'
const CheckOut = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='img_ad' src='' alt='image_ads' />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is Empty</h2>
            <p>You have no items in your basket. to Buy one or more items. Click "add to Basket" next to the items.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">your Shopping Basket</h2>
            {basket?.map(item => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              )
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">      
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default CheckOut