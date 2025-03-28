import "./App.css"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home, Register, Login, Cart, Pizza, Profile, NotFound } from "./pages"
import Navb from "./components/Navb"
import Footer from "./components/Footer"
import { useUser } from "./context/UserContext"

const App = () => {
  const { token } = useUser()

  return (
      <div className="d-flex flex-column min-vh-100">
        <Navb total={0} />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={!token ? <Register /> : <Navigate to="/profile" />} />
            <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
        <Footer />
      </div>
  )
}

export default App