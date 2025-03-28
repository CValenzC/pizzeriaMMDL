import { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import { Alert } from 'react-bootstrap'

const Profile = () => {
  const { email, userData, logout, getProfile } = useUser()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await getProfile()
      } catch (err) {
        setError('Error al cargar el perfil')
      } finally {
        setLoading(false);
      }
    }
    fetchProfile()
  }, [])

  if (loading) return <div className="container mt-4">Cargando perfil...</div>
  if (error) return <Alert variant="danger">{error}</Alert>

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ width: '18rem' }}>
        <div className="card-body text-center">
          <h5 className="card-title">Usuario: {email}</h5>
          {userData && (
            <>
              <p className="card-text">ID: {userData.id}</p>
            </>
          )}
          <button 
            className="btn btn-danger mt-3" 
            onClick={logout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile