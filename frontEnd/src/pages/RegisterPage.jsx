// pages/RegisterPage.jsx
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useUser } from '../context/UserContext'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [message, setMessage] = useState({ text: '', type: '' })
  const { register } = useUser()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: 'Las contraseñas no coinciden', type: 'danger' })
      return
    }
    const result = await register(formData.email, formData.password)
    if (!result.success) {
      setMessage({ text: result.message, type: 'danger' })
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">Registro</h2>
      {message.text && <Alert variant={message.type}>{message.text}</Alert>}
      <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmar Contraseña</label>
          <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
      </form>
    </div>
  )
}

export default RegisterPage