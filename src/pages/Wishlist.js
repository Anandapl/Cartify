import React from 'react'

export default function Wishlist(props) {

    if (props.wishlist.length === 0) {

        return (

            <div className="empty-cart">

                <h2>Wishlist is empty ❤️</h2>

                <p>Add your favorite products</p>

            </div>

        )

    }

    return (

        <div className="product-container">

            {
                props.wishlist.map((item) => (

                    <div
                        className="product-card"
                        key={item.id}
                    >

                        <img
                            src={item.image}
                            alt=""
                            className="product-image"
                        />

                        <h2>{item.name}</h2>

                        <h3>₹{item.price}</h3>
                        <button
                            onClick={() =>
                                props.removeWishlist(item.id)
                            }
                        >
                            ❌ Remove
                        </button>

                    </div>

                ))
            }

        </div>

    )
}