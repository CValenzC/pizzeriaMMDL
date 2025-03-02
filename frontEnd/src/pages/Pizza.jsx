import React, { useState, useEffect } from "react"

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001") // Siempre obtiene p001
        if (!response.ok) {
          throw new Error("Error al obtener los detalles de la pizza")
        }
        const data = await response.json()
        setPizza(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPizza()
  }, [])

  if (loading) return <p>Cargando detalles de la pizza...</p>
  if (error) return <p>Error: {error}</p>
  if (!pizza) return <p>No se encontró la pizza</p>

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p>Precio: ${pizza.price.toLocaleString("es-CL")}</p>
          <p>Ingredientes:</p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}> {ingredient}</li>
            ))}
          </ul>
          <p>{pizza.desc}</p>
          <button className="btn btn-success">Añadir al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Pizza