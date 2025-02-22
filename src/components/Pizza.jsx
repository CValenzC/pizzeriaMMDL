import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' // Para obtener el ID de la pizza desde la URL

const Pizza = () => {
  const { id } = useParams() // Obtiene el ID de la pizza desde la URL
  const [pizza, setPizza] = useState(null) // Estado para almacenar los detalles de la pizza
  const [loading, setLoading] = useState(true) // Estado para manejar el loading
  const [error, setError] = useState(null) // Estado para manejar errores

  // Consumir la API para obtener los detalles de la pizza
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        if (!response.ok) {
          throw new Error('Error al obtener los detalles de la pizza')
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
  }, [id]) // Se ejecuta cada vez que el ID cambia

  if (loading) {
    return <p>Cargando detalles de la pizza...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!pizza) {
    return <p>No se encontró la pizza</p>
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p>Precio: ${pizza.price.toLocaleString('es-CL')}</p>
          <p>Ingredientes:</p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>● {ingredient}</li>
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