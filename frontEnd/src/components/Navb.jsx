import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useUser } from '../context/UserContext'

const Navb = () => {
  const { total } = useContext(CartContext)
  const { token, logout } = useUser()

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/'>🍕 MammaMia Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Button variant='outline-light' as={Link} to='/cart'>
              🛒 Total: ${total.toLocaleString('es-CL')}
            </Button>
            {!token ? (
              <>
                <Button variant='outline-light' as={Link} to='/login' className='mx-2'>🔐 Login</Button>
                <Button variant='outline-light' as={Link} to='/register'>🔐 Register</Button>
              </>
            ) : (
              <>
                <Button variant='outline-light' as={Link} to='/profile' className='mx-2'>👤 Profile</Button>
                <Button variant='danger' onClick={logout}>🔒 Logout</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navb