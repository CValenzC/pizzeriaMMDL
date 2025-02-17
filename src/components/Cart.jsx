import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"

const Cart = () => {
  const { pizzaCart, increaseQuantity, decreaseQuantity, total } = useContext(PizzaContext)

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
                <p>Cantidad: {pizza.quantity}</p>
              </div>
              <div>
                <button className="btn btn-sm btn-success mx-2" onClick={() => increaseQuantity(pizza.id)}>+</button>
                <button className="btn btn-sm btn-danger" onClick={() => decreaseQuantity(pizza.id)}>-</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-3">Total: ${total.toLocaleString("es-CL")}</h3>
    </div>
  )
}

export default Cart
