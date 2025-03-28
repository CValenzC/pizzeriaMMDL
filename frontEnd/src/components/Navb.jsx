import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const Navb = () => {
  const { total } = useCart();
  const { token, logout, email } = useUser()

  return (
    <Navbar bg='dark' variant='dark' expand='lg' className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to='/' className="d-flex align-items-center">
          <span className="me-2">🍕</span>
          <span>MammaMia</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="ms-auto align-items-center">
            <Button 
              variant='outline-light' 
              as={Link} 
              to='/cart'
              className="d-flex align-items-center me-2"
            >
              <span className="me-2">🛒</span>
              <span>Total: ${total.toLocaleString('es-CL')}</span>
            </Button>
            
            {!token ? (
              <>
                <Button 
                  variant='outline-light' 
                  as={Link} 
                  to='/login' 
                  className="mx-2"
                >
                  🔐 Login
                </Button>
                <Button 
                  variant='outline-light' 
                  as={Link} 
                  to='/register'
                >
                  📝 Register
                </Button>
              </>
            ) : (
              <>
                <span className="text-light mx-2">Hola, {email}</span>
                <Button 
                  variant='outline-light' 
                  as={Link} 
                  to='/profile' 
                  className="mx-2"
                >
                  👤 Perfil
                </Button>
                <Button 
                  variant='danger' 
                  onClick={logout}
                >
                  🔒 Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navb