import React from 'react'

export default function ProductCard(props) {
   

  return (
    <div className='product-card'>
      <img className='product-image' src={props.item.image} alt='product'/>
      <h2>{props.item.name}</h2>
      <h3>{props.item.price}</h3>
      <button onClick={() =>props.cartFunction(props.item)}>🛒</button>
    </div>
  )
}
