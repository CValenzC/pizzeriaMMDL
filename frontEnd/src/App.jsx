import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Register, Login, Cart, Pizza, Profile, NotFound } from "./pages"
import Navb from "./components/Navb"

const App = () => {
  return (
    <Router>
      <Navb  total={0}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
