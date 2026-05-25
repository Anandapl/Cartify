import React from 'react'

export default function Navbar(props) {
  return (
    <div className="navbar">

      <div className="logo">
        🛍 CartiFy
      </div>
      

      <div className="nav-links">
        <button onClick={() => props.setPage('home')}>
          Home
        </button>

        <button onClick={() => props.setPage('cart')}>
          🛒 Cart ({props.cart.length})
        </button>
      </div>
      <button onClick={() => props.setDarkMode(!props.darkMode)}>
  {props.darkMode ? "☀️ Light" : "🌙 Dark"}
</button>

    </div>
  )
}