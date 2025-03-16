import { useUser } from '../context/UserContext'

const Profile = () => {
  const { logout } = useUser() //Obtenemos el método logout del UserContext

  return (
    <div className="container mt-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title">Juan Pérez</h5>
          <p className="card-text">juan.perez@example.com</p>
          <button className="btn btn-danger" onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Profile