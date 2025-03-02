import { Link } from "react-router-dom"
import sadPizza from "../../public/sadPizza.jpg" // Importa la imagen

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={sadPizza} alt="Pizza triste" className="not-found-image" />
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  )
}

export default NotFound