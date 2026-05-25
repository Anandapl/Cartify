
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { useState } from 'react';
import Cart from './pages/Cart';

function App() {
  const [cart,setCart] = useState([])
  const [showToast, setShowToast] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
     const cartFunction = (item) => {

  setCart((prevCart) => {
    const existingItem = prevCart.find((i) => i.id === item.id)

    if (existingItem) {
      return prevCart.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
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
// const removeFunction = (id) => {
//       setCart(cart.filter((item) =>item.id !== id))
//     }
const increaseQty = (id) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  )
}
const removeFunction = (id) =>{
  setCart((prevCart) =>{
    const existingItem = prevCart.find((item) => item.id === id)
       if (existingItem.qty > 1) {
      return prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
    } else {
      return prevCart.filter((item) => item.id !== id)
    }
  }
)
}

    const [page,setPage] = useState('home')
    let content;
    if(page === 'home'){
      content = <Home cartFunction={cartFunction} /> }
    else{
     content = <Cart cart={cart} removeFunction = {removeFunction} increaseQty = {increaseQty} setPage={setPage}
    />
    }

    
    
  
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar cart = {cart} setPage ={setPage}   darkMode={darkMode}
  setDarkMode={setDarkMode}/>
      
      {content}
      {
  showToast && (
    <div className="toast">
      ✔ Added to cart
    </div>
  )
}

    </div>
  );
}

export default App;
