import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomInput from './shared/components/CustomInput/CustomInput'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

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
              icon={<AccountCircleIcon />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
