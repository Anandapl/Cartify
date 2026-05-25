import React from 'react'
// import Home from './Home'
// import ProductCard from '../components/ProductCard'

export default function Cart(props) {
if (props.cart.length === 0) {
  return (
    <div className="empty-cart">
      <h2>Your cart is empty 🛒</h2>
      <p>Start adding products!</p>
      <button onClick={()=> props.setPage('home')}>
        Back to shopping
      </button>
    </div>
  )
}
  return (

    <div style={{ background: 'black' }}>
      <div className='product-container'>
        
        {
          props.cart.map((item, index) => (
            <div key={index} className='product-card'>
      <img className='product-image' src={item.image} alt='product'/>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
             
              <div className='qty-controls'>
                <button onClick={()=> props.removeFunction(item.id)}>-</button>
                 <p>{item.qty}</p>
                <button onClick={()=> props.increaseQty(item.id)}>+</button>
                </div>
                </div>
          )
          )
        }

      </div>
    </div>
  )
}
