import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <div className="footer">

      <h2>🛍 Cartify</h2>

      <div className="footer-links">

        <Link to="/" className='footer-link'>
          <p>Home</p>
        </Link>

        <Link to="/cart" className='footer-link'>
          <p>Cart</p>
        </Link>
        <Link to="/Wishlist" className='footer-link'>
          <p>Wishlist</p>
        </Link>
        <Link to="/About" className='footer-link'>
          <p>About</p>
        </Link>

      </div>

      <p className="footer-copy">
        © 2026 Cartify | Built with React ❤️
      </p>

    </div>
  )
}