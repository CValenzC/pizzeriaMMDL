import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import RegisterPage from "./components/RegisterPage"
import LoginPage from "./components/LoginPage"
// import Home from "./components/Home" aqui irá cuando se haga funcionar el link

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  )
}

export default App
