import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { PizzaProvider } from "./context/PizzaContext"
import { CartProvider } from "./context/CartContext"
import { UserProvider } from "./context/UserContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaProvider>
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </PizzaProvider>
  </React.StrictMode>
)