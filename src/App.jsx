import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Cart from "./components/Cart"
import { pizzas } from "./data/pizzas.js"

const App = () => {
  const [pizzaCart, setPizzaCart] = useState([])

  const addToCart = (pizza) => {
    setPizzaCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id)
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...pizza, quantity: 1 }]
    })
  }

  const updateQuantity = (id, amount) => {
    setPizzaCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  return (
    <div>
      <Navbar total={pizzaCart.reduce((acc, item) => acc + item.price * item.quantity, 0)} />
      <Home pizzas={pizzas} addToCart={addToCart} />
      <Cart pizzaCart={pizzaCart} updateQuantity={updateQuantity} />
      <Footer />
    </div>
  )
}

export default App