import "bootstrap/dist/css/bootstrap.min.css"
//import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// import { PizzaProvider } from "./context/PizzaContext" // Importa PizzaProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <PizzaProvider> Se elimina el uso de Provider por ahora */}
      <App />
    {/* </PizzaProvider> */}
  </React.StrictMode>
)