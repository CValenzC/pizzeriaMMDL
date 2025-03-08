import { createContext, useState } from "react"
export const CartContext = createContext()


export const CartProvider = ({ children }) => {// Proveedor del contexto
  const [pizzaCart, setPizzaCart] = useState([])

  // Agregar una pizza al carrito
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

  // Aumentar cantidad en el carrito
  const increaseQuantity = (id) => {
    setPizzaCart((prevCart) =>
      prevCart.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    )
  }

  // Disminuir cantidad en el carrito
  const decreaseQuantity = (id) => {
    setPizzaCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0) // Eliminar si la cantidad llega a 0
    )
  }

  // Calcular el total del carrito
  const total = pizzaCart.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <CartContext.Provider
      value={{ pizzaCart, addToCart, increaseQuantity, decreaseQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  )
}