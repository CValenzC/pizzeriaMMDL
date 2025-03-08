import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { PizzaContext } from "../context/PizzaContext"

const Pizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)
  const { getPizzaById } = useContext(PizzaContext)

  useEffect(() => {
    const fetchPizza = async () => {
      const data = await getPizzaById(id)
      setPizza(data)
    }

    fetchPizza()
  }, [id, getPizzaById])

  if (!pizza) return <p>Cargando detalles de la pizza...</p>

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