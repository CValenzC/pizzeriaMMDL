const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <div className="col-md-4">
        <div className="card h-100 mb-4">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body d-flex flex-column">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
            <div className="mt-auto"> 
                <button className="btn btn-primary">Ver más</button>
                <button className="btn btn-success mx-2">Añadir</button>
            </div>
            </div>
        </div>
        </div>
    );
  };
  
  export default CardPizza;
  