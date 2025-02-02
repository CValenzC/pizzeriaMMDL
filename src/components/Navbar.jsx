const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="btn btn-outline-light mx-2">🍕 Home</button>
          <div className="ms-auto">
            {token ? (
              <>
                <button className="btn btn-outline-light mx-2">🔓 Profile</button>
                <button className="btn btn-outline-light mx-2">🔒 Logout</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-light mx-2">🔐 Login</button>
                <button className="btn btn-outline-light mx-2">🔐 Register</button>
              </>
            )}
            <button className="btn btn-success mx-2">🛒 Total: ${total}</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;  