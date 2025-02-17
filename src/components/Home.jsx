import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import CardPizza from "./CardPizza"

const Home = () => {
  const { pizzas, addToCart } = useContext(PizzaContext)

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
            addToCart={() => addToCart(pizza)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
