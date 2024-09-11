import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Notebook from "./pages/Notebook"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/notebook"
            element={
              <ProtectedRoute>
                <Notebook />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={ <Home /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/logout" element={ <Logout /> }/>
          <Route path="/register" element={ <Register /> }/>
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
