import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
