const Header = () => {
    return (
<header
  className="text-center text-light p-5"
  style={{
    backgroundImage: 'url("../../public/Header.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div style={{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
    display: "inline-block"
  }}>
    <h1>Bienvenido a Pizzería Mamma Mia!</h1>
    <p>Las mejores pizzas de la ciudad, listas para ti.</p>
  </div>
</header>
    );
  };
  
  export default Header;  