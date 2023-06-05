import { Navigate } from 'react-router-dom'
import { getTokenUserLocalStorage } from '../../shared/store/user'

interface Props {
  element: JSX.Element
}

const AuthProvider = ({ element }: Props) => {
  return getTokenUserLocalStorage() ? element : <Navigate to="/" />
}

export default AuthProvider
