import { createContext, useState, useContext } from "react"
export const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de un CartProvider")
  return context
}

export const CartProvider = ({ children }) => {
  const [pizzaCart, setPizzaCart] = useState([])

  const addToCart = (pizza) => {
    setPizzaCart((prevCart) => {
      const existingPizza = prevCart.find((p) => p.id === pizza.id)
      if (existingPizza) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prevCart, { ...pizza, quantity: 1 }]
    })
  }

  const increaseQuantity = (id) => {
    setPizzaCart((prevCart) =>
      prevCart.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    )
  }

  const decreaseQuantity = (id) => {
    setPizzaCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    )
  }

  const clearCart = () => {
    setPizzaCart([])
  }

  const total = pizzaCart.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <CartContext.Provider
      value={{ 
        pizzaCart, 
        addToCart, 
        increaseQuantity, 
        decreaseQuantity, 
        total,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}