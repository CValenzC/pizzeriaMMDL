import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useUser } from "../context/UserContext"
import { Alert } from "react-bootstrap"

const Cart = () => {
  const { 
    pizzaCart, 
    increaseQuantity, 
    decreaseQuantity, 
    total,
    clearCart
  } = useContext(CartContext)
  
  const { token } = useUser()
  const [message, setMessage] = useState({ text: "", type: "" })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCheckout = async () => {
    setIsProcessing(true)
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ cart: pizzaCart })
      })

      if (!response.ok) {
        throw new Error('Error al procesar el pago')
      }

      setMessage({ text: '¡Compra realizada con éxito!', type: 'success' })
      clearCart()
    } catch (error) {
      setMessage({ text: error.message, type: 'danger' })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      
      {/* Mensaje de alerta (nueva adición) */}
      {message.text && (
        <Alert 
          variant={message.type} 
          className="mt-3"
          onClose={() => setMessage({ text: "", type: "" })}
          dismissible
        >
          {message.text}
        </Alert>
      )}
      
      {pizzaCart.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        <ul className="list-group">
          {pizzaCart.map((pizza) => (
            <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>Pizza {pizza.name}</h5>
                <p>Precio: ${pizza.price.toLocaleString("es-CL")}</p>
                <p>Cantidad: {pizza.quantity}</p>
              </div>
              <div>
                <button 
                  className="btn btn-sm btn-success mx-2" 
                  onClick={() => increaseQuantity(pizza.id)}
                >
                  +
                </button>
                <button 
                  className="btn btn-sm btn-danger" 
                  onClick={() => decreaseQuantity(pizza.id)}
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      {pizzaCart.length > 0 && (
        <>
          <h3 className="mt-3">Total: ${total.toLocaleString("es-CL")}</h3>
          <button 
            className="btn btn-primary" 
            onClick={handleCheckout}
            disabled={!token || isProcessing}
          >
            {isProcessing ? "Procesando..." : "Pagar"}
          </button>
        </>
      )}
    </div>
  )
}

export default Cart