import React from 'react'

import { Link } from 'react-router-dom'

export default function Cart(props) {

  // Empty Cart

  if (props.cart.length === 0) {

    return (

      <div className="empty-cart">

        <h2>Your cart is empty 🛒</h2>

        <p>Start adding products!</p>

        <Link to="/">

          <button>
            Back to shopping
          </button>

        </Link>

      </div>

    )

  }

  // Cart Items

  return (

    <div style={{ background: 'black' }}>

      <div className='product-container'>

        {

          props.cart.map((item, index) => (

            <div
              key={index}
              className='product-card'
            >

              <img
                className='product-image'
                src={item.image}
                alt='product'
              />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <div className='qty-controls'>

                <button
                  onClick={() =>
                    props.removeFunction(item.id)
                  }
                >
                  -
                </button>

                <p>{item.qty}</p>

                <button
                  onClick={() =>
                    props.increaseQty(item.id)
                  }
                >
                  +
                </button>

              </div>

            </div>

          ))

        }

      </div>



      {/* Checkout Button */}

      <div className="checkout-btn-container">

        <Link to="/checkout">

          <button className="checkout-btn">

            Proceed to Checkout

          </button>

        </Link>

      </div>

    </div>

  )

}