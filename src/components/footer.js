import React from 'react'

export default function Footer(props) {
  return (
    <div className="footer">

      <h2>🛍 Cartify</h2>

      <div className="footer-links">
       <p onClick={() => props.setPage('home')}>Home</p>
        <p onClick={() => props.setPage('cart')}>Cart</p>
        <p>Contact</p>
      </div>

      <p className="footer-copy">
        © 2026 Cartify | Built with React ❤️
      </p>

    </div>
  )
}