import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Pizza {name}</h5>
          <p className="card-text">Precio: ${price.toLocaleString("es-CL")}</p>
          <p className="card-text">Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <div className="mt-auto">
            <Link to={`/pizza/${id}`} className="btn btn-primary">Ver detalles</Link>
            <button className="btn btn-success mx-2" onClick={() => addToCart({ id, name, price, img })}>
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza