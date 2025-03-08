import React, { useContext } from "react"
import CardPizza from "../components/CardPizza"
import Header from "../components/Header"
import { PizzaContext } from "../context/PizzaContext"

const Home = () => {
  const { pizzas, loading, error } = useContext(PizzaContext)

  if (loading) return <p>Cargando pizzas...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <Header />
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
    </div>
  )
}

export default Home