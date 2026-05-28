import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import '../App.css'
import tshirt from '../assets/images/tshirt.png'
import headphones from '../assets/images/Sony ULT Wear Headphones.jpg'
import watch from '../assets/images/watch.png'
import bag from '../assets/images/bag.png'
import shoes from '../assets/images/shoe.png'
import { useEffect } from 'react'

export default function Home(props) {
    const products = [
        { id: 1, image: tshirt, name: "T-Shirt", price: 499 },
        { id: 2, image: shoes, name: "Shoes", price: 1499 },
        { id: 3, image: watch, name: "Watch", price: 999 },
        { id: 4, image: bag, name: "Bag", price: 799 },
        { id: 5, image: headphones, name: "Headphones", price: 1999 },
        { id: 6, image: tshirt, name: "Hoodie", price: 1299 },
        { id: 7, image: shoes, name: "Sports Shoes", price: 1999 },
        { id: 8, image: watch, name: "Smart Watch", price: 2499 },
        { id: 9, image: bag, name: "Laptop Bag", price: 1199 },
        { id: 10, image: headphones, name: "Wireless Earbuds", price: 1599 },

        { id: 11, image: tshirt, name: "Jacket", price: 1799 },
        { id: 12, image: shoes, name: "Sneakers", price: 2299 },
        { id: 13, image: watch, name: "Digital Watch", price: 799 },
        { id: 14, image: bag, name: "Travel Backpack", price: 1499 },
        { id: 15, image: headphones, name: "Gaming Headset", price: 2999 },
        { id: 16, image: tshirt, name: "Hoodie", price: 1299 },


    ];


    const [searchTerm, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])
    const filterProducts = products.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

    


    return (

        <div className='hero'>
            <div className="hero-banner">
                <div className="hero-content">
                    <div className='hero-flex'>
                        <h1>🔥 Summer Sale 2026</h1>

                        <p>Discover the latest fashion & electronics</p>

                        <button>Shop Now</button>
                    </div>
                    <div className='searchbar search-bar'>
                        <span className="search-icon">🔍</span>
                        <input type="search" placeholder='Search Products'
                            onChange={(e) => setSearch(e.target.value)}></input>
                    </div>
                </div>
            </div>
            <h1 className='products-heading'>Products</h1>

            <div className='product-container'>

                {
                    loading ? (

                        <div className="skeleton-wrapper">

                            {
                                [1, 2, 3, 4].map((item) => (

                                    <div className="premium-skeleton-card" key={item}>

                                        <div className="premium-skeleton-image"></div>

                                        <div className="premium-skeleton-title"></div>

                                        <div className="premium-skeleton-price"></div>

                                        <div className="premium-skeleton-button"></div>

                                    </div>

                                ))
                            }

                        </div>

                    ) : (

                        filterProducts.length === 0 ? (

                            <h2 style={{ color: 'white' }}>
                                No Products Found
                            </h2>

                        ) : (

                            filterProducts.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    item={item}

                                    cartFunction={props.cartFunction}

                                    wishlist={props.wishlist}
                                    wishlistFunction={props.wishlistFunction}
                                />
                            ))

                        )

                    )
                }

            </div>
        </div>
    )
}
