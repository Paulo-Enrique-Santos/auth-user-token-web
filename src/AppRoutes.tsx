import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomInput from './shared/components/CustomInput/CustomInput'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/cadastro"
          element={
            <CustomInput
              label={'teste 123'}
              error={'123'}
              value={'123123'}
              setValue={(e) => {}}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
