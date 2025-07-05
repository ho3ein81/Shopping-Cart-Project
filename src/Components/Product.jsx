import React from 'react'

export const Product = (props) => {
  return (
    <div className='product d-flex'>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <button onClick={props.cart}>Add</button>
    </div>
  )
}
export default Product