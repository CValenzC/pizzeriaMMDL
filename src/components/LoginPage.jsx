import { useState } from "react"
import { Alert } from "react-bootstrap"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email || !formData.password) {
      setMessage({ text: "Todos los campos son obligatorios", type: "danger" })
      return
    }

    if (formData.password.length < 6) {
      setMessage({ text: "La contraseña debe tener al menos 6 caracteres", type: "danger" })
      return;
    }

    setMessage({ text: "Inicio de sesión exitoso ✅", type: "success" })
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">Iniciar Sesión</h2>
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
        <button type="submit" className="btn btn-success w-100">Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default LoginPage