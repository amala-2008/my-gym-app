import "./App.css"
import Login from "./pages/login"
import About from "./pages/About"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Eqmt from "./pages/eqmt"
import { useState, useEffect } from "react"

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("islogin") === "true")

  useEffect(() => {
    localStorage.setItem("islogin", isLogin ? "true" : "false")
  }, [isLogin])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLogin
              ? <Navigate to="/home" replace />
              : <Login setIsLogin={setIsLogin} />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eqmt" element={<Eqmt />} />
      </Routes>
    </Router>
  )
}

export default App;