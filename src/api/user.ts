import {
  type UserRegisterResponse,
  type UserLoginRequest,
  type UserRegisterRequest,
  type UserLoginResponse,
} from '../shared/model/user'
import { useApi } from './api'

export function UserAPI() {
  const api = useApi()

  async function register(
    userData: UserRegisterRequest
  ): Promise<UserRegisterResponse> {
    const response = await api.post('/users', userData)
    return response.data
  }

  async function login(userData: UserLoginRequest): Promise<UserLoginResponse> {
    const response = await api.post('/users/login', userData)
    return response.data
  }

  return {
    register,
    login,
  }
}
