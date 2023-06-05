import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './pages/Authentication/Authentication'
import UserDetails from './pages/UserDetails/UserDetails'
import AuthProvider from './core/Auth/AuthProvider'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route
          path="/detalhes-usuario"
          element={<AuthProvider element={<UserDetails />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
