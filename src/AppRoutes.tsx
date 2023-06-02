import { BrowserRouter, Route, Routes } from 'react-router-dom/dist/index'
import Authentication from './pages/Authentication/Authentication'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
