import { createContext, useState } from "react"
import { pizzas } from "../data/pizzas"
import { pizzaCart as initialCart } from "../data/pizzas" // Importamos el carrito inicial

export const PizzaContext = createContext()

console.log("PizzaContext cargado correctamente")

export const PizzaProvider = ({ children }) => {
  const [pizzaCart, setPizzaCart] = useState(
    initialCart.map((p) => ({ ...p, quantity: p.count })) // Convertimos count a quantity
  )

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
        .filter((p) => p.quantity > 0) // Eliminar si la cantidad llega a 0
    )
  }

  const total = pizzaCart.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <PizzaContext.Provider value={{ pizzas, pizzaCart, addToCart, increaseQuantity, decreaseQuantity, total }}>
      {children}
    </PizzaContext.Provider>
  )
}
