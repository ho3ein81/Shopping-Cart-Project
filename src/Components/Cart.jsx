import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart({ cart ,handleDelete , handleQty}) {
  return (
    <div>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div className="container-cart" key={index}>
              <div className="cart-product">
                <img src={item.image} alt={item.title} />
                <div className="title">Title: {item.title}</div>
                <div className="price">Price: {item.price} $</div>
                
                <div className="operator">
                  <button className="inc" onClick={()=> handleQty(item , 1)}>+</button>
                  <div className="qty">{item.qty}</div>
                  <button className="dec" onClick={()=>handleQty(item , -1)} >-</button>
                </div>

                <div className="total">
                  Total: {item.price * item.qty} $
                </div>

                <span onClick={() => handleDelete(index)}>
                  <FontAwesomeIcon icon={faTrash} className="delete" />
                </span>
              </div>
            </div>
          ))}

          <div className="total-cart">
             Total cart: {cart.reduce((sum, item) => sum + item.price * item.qty, 0)} $
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h2>Your cart is empty...</h2>
        </div>
      )}
    </div>
  )
}

export default Cart
