import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Register, Login, Cart, Pizza, Profile, NotFound } from "./pages"
import Navb from "./components/Navb"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navb total={0} />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App