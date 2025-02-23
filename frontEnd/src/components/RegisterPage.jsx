import { useState } from "react"
import { Alert } from "react-bootstrap"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [message, setMessage] = useState({ text: "", type: "" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setMessage({ text: "Todos los campos son obligatorios", type: "danger" })
      return
    }

    if (formData.password.length < 6) {
      setMessage({ text: "La contraseña debe tener al menos 6 caracteres", type: "danger" })
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Las contraseñas no coinciden", type: "danger" })
      return
    }

    setMessage({ text: "Registro exitoso 🎉", type: "success" })
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