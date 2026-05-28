import React from 'react'
import logo from '../assets/images/clogo.png'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className="navbar">

      <div className="logo">
        <img src={logo} alt="logo" className='logo' />
      </div>


      <div className="nav-links">

        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/cart">
          <button>🛒 Cart ({props.cart.length})</button>
        </Link>
        <Link to="/wishlist">

          <button>
            ❤️ Wishlist ({props.wishlist.length})
          </button>

        </Link>

        <Link to="/About">
        <button>
          About
        </button>
        </Link>
        <Link to="/Contact">
        <button>
          Contact
        </button>
          </Link>

      </div>
      <button onClick={() => props.setDarkMode(!props.darkMode)}>
        {props.darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

    </div>
  )
}