import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Cart from './pages/Cart'
import Footer from './components/footer'
import Wishlist from './pages/Wishlist'
import Checkout from './pages/checkout'
import About from './pages/About'
import Contact from './pages/contact'

import { Routes, Route } from 'react-router-dom'

function App() {

  // =========================
  // STATES
  // =========================

  const [cart, setCart] = useState([])

  const [wishlist, setWishlist] = useState([])

  const [showToast, setShowToast] = useState(false)

  const [darkMode, setDarkMode] = useState(true)



  // =========================
  // ADD TO CART
  // =========================

  const cartFunction = (item) => {

    setCart((prevCart) => {

      const existingItem = prevCart.find(
        (i) => i.id === item.id
      )

      if (existingItem) {

        return prevCart.map((i) =>

          i.id === item.id

            ? { ...i, qty: i.qty + 1 }

            : i
        )

      } else {

        return [...prevCart, { ...item, qty: 1 }]

      }

    })



    // Toast popup

    setShowToast(true)

    setTimeout(() => {

      setShowToast(false)

    }, 2000)

  }



  // =========================
  // WISHLIST FUNCTION
  // =========================

  const wishlistFunction = (item) => {

    const existingItem = wishlist.find(
      (i) => i.id === item.id
    )

    if (existingItem) {

      setWishlist(

        wishlist.filter(
          (i) => i.id !== item.id
        )

      )

    } else {

      setWishlist([...wishlist, item])

    }

  }

  const removeWishlist = (id) => {

    setWishlist(

      wishlist.filter(
        (item) => item.id !== id
      )

    )

  }

  // =========================
  // INCREASE QTY
  // =========================

  const increaseQty = (id) => {

    setCart((prevCart) =>

      prevCart.map((item) =>

        item.id === id

          ? { ...item, qty: item.qty + 1 }

          : item
      )

    )

  }



  // =========================
  // REMOVE / DECREASE QTY
  // =========================

  const removeFunction = (id) => {

    setCart((prevCart) => {

      const existingItem = prevCart.find(
        (item) => item.id === id
      )

      if (existingItem.qty > 1) {

        return prevCart.map((item) =>

          item.id === id

            ? { ...item, qty: item.qty - 1 }

            : item

        )

      } else {

        return prevCart.filter(
          (item) => item.id !== id
        )

      }

    })

  }



  // =========================
  // RETURN
  // =========================

  return (

    <div className={darkMode ? "dark-theme" : "light-theme"}>

      {/* Navbar */}

      <Navbar
        cart={cart}
        wishlist={wishlist}

        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />



      {/* Routes */}

      <Routes>

        {/* Home Page */}

        <Route
          path="/"
          element={

            <Home

              cartFunction={cartFunction}

              wishlist={wishlist}

              wishlistFunction={wishlistFunction}

              darkMode={darkMode}

            />

          }
        />



        {/* Cart Page */}

        <Route
          path="/cart"
          element={

            <Cart

              cart={cart}

              removeFunction={removeFunction}

              increaseQty={increaseQty}

              darkMode={darkMode}

            />

          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeWishlist={removeWishlist}
            />
          }
        />
   <Route
        path="/checkout"
        element={
          <Checkout cart={cart} />
        }
      />
    
    <Route 
    path="/About"
    element={
      <About />
    }
    />
    <Route 
    path="/Contact"
    element={
      <Contact />
    }
    />
      </Routes>
   




      {/* Toast */}

      {
        showToast && (

          <div className="toast">

            ✔ Added to cart

          </div>

        )
      }



      {/* Footer */}

      <Footer />

    </div>

  )

}

export default App