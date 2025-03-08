import { createContext, useState, useEffect } from "react"
export const PizzaContext = createContext()


export const PizzaProvider = ({ children }) => {// Proveedor del contexto Pizzas
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Obtener todas las pizzas desde la API
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas")
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas")
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
  }, [])

  // Obtener una pizza consultando por su ID
  const getPizzaById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`)
      if (!response.ok) {
        throw new Error("Error al obtener los detalles de la pizza")
      }
      const data = await response.json()
      return data
    } catch (error) {
      setError(error.message)
      return null
    }
  }

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error, getPizzaById }}>
      {children}
    </PizzaContext.Provider>
  )
}