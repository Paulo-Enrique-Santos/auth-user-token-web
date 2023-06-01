import { BrowserRouter, Route, Routes } from 'react-router-dom/dist/index'
import Register from './pages/Register/Register'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
