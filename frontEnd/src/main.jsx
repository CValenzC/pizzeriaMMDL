import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { PizzaProvider } from "./context/PizzaContext"
import { CartProvider } from "./context/CartContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PizzaProvider>
  </React.StrictMode>
)