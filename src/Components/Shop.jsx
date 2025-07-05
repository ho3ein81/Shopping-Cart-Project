import React from 'react'
import Product from './Product'

function Shop({products , addToCart}) {
  return (
    <div className='product-list'>{
products.map((item,) => (
  <Product 
  key={item.id}
  title={item.title} 
  price={item.price}
  image={item.image}
  cart={()=>addToCart(item)} />
))
}
    </div>
  )
}

export default Shop