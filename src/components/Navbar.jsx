const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">🍕 Home</a>
        <a className="btn btn-outline-light" href="#">🛒 Total: ${total.toLocaleString("es-CL")}</a>
        {!token ? (
          <>
            <a className="btn btn-outline-light mx-2" href="#">🔐 Login</a>
            <a className="btn btn-outline-light" href="#">🔐 Register</a>
          </>
        ) : (
          <>
            <a className="btn btn-outline-light mx-2" href="#">🔓 Profile</a>
            <a className="btn btn-danger" href="#">🔒 Logout</a>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
