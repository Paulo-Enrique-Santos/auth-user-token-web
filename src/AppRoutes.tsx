import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={
          <Navigate to={'/login'} />
        } />
        {/* <Route
          path="/detalhes-usuario"
          element={<AuthProvider element={<Home />} />}
        /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
