import React from 'react'

export default function Checkout(props) {

  const totalPrice = props.cart.reduce(

    (total, item) =>

      total + item.price * item.qty,

    0

  )

  return (

    <div className="checkout-page">

      {/* LEFT */}

      <div className="checkout-form">

        <h2>Shipping Address</h2>

        <input type="text" placeholder="Full Name" />

        <input type="text" placeholder="Phone Number" />

        <input type="text" placeholder="Address" />

        <input type="text" placeholder="City" />

        <input type="text" placeholder="Pincode" />

      </div>



      {/* RIGHT */}

      <div className="checkout-summary">

        <h2>Order Summary</h2>

        {
          props.cart.map((item) => (

            <div
              className="summary-item"
              key={item.id}
            >

              <p>{item.name}</p>

              <p>
                ₹{item.price} × {item.qty}
              </p>

            </div>

          ))
        }

        <h3>Total: ₹{totalPrice}</h3>

        <button className="place-order-btn">

          Place Order

        </button>

      </div>

    </div>

  )

}