import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../Config/Provider'
import { getBasketTotal } from '../../Config/Reducer'

const Subtotal = () => {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue() 
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => {
                return(
                <>
                    <p>Subtotal ({basket.length} items) : <strong>{`${value}`}</strong></p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' /> this Order Contains a gift
                    </small>
                </>
            )
        }}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal