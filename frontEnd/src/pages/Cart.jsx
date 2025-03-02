import React from "react"
import { pizzaCart } from "../data/pizzas" 

const Cart = () => {
  // Calcular el total del carrito
  const total = pizzaCart.reduce((acc, item) => acc + item.price * item.count, 0)

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {pizzaCart.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        <ul className="list-group">
          {pizzaCart.map((pizza) => (
            <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{pizza.name}</h5>
                <p>Precio: ${pizza.price.toLocaleString("es-CL")}</p>
                <p>Cantidad: {pizza.count}</p>
              </div>
              <img src={pizza.img} alt={pizza.name} style={{ width: "100px", height: "auto" }} /> {/* Muestra la imagen */}
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-3">Total: ${total.toLocaleString("es-CL")}</h3>
    </div>
  )
}

export default Cart