import React, { useState, useEffect } from "react"
import CardPizza from "./CardPizza"

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas")
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas")
        }
        const data = await response.json()
        console.log("Datos de la API:", data)
        setPizzas(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPizzas()
  }, [])

  if (loading) return <p>Cargando pizzas...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="container">
      <div className="row mt-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
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