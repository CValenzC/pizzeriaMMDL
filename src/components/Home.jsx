import React, { useState, useEffect } from 'react'
import CardPizza from './CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([]) // Estado para almacenar las pizzas
  const [loading, setLoading] = useState(true) // Estado para manejar el loading
  const [error, setError] = useState(null) // Estado para manejar errores

  // Consumir la API de pizzas
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas')
        if (!response.ok) {
          throw new Error('Error al obtener las pizzas')
        }
        const data = await response.json()
        setPizzas(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPizzas()
  }, []) // El array vacío asegura que solo se ejecute una vez al montar el componente

  if (loading) {
    return <p>Cargando pizzas...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className="container">
      <div className="row mt-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Home