import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser debe usarse dentro de un UserProvider")
  return context
}

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [email, setEmail] = useState(localStorage.getItem('email') || null)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  // Login: consume /api/auth/login desde el backend
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('email', email)
        setToken(data.token)
        setEmail(email)
        navigate('/home')
        return { success: true }
      } else {
        throw new Error(data.message || 'Error en el login');
      }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Register: consume /api/auth/register
  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('email', email)
        setToken(data.token)
        setEmail(email)
        navigate('/profile')
        return { success: true }
      } else {
        throw new Error(data.message || 'Error en el registro')
      }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Logout: elimina token y email
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    setToken(null)
    setEmail(null)
    setUserData(null)
    navigate('/login')
  }

  // Obtener perfil: consume /api/auth/me
  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      if (response.ok) {
        setUserData(data)
        return data
      } else {
        throw new Error(data.message || 'Error al obtener perfil')
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return (
    <UserContext.Provider value={{ token, email, userData, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  )
}