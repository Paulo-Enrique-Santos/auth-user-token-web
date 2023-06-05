import axios from 'axios'
import { useNavigate } from 'react-router'
import {
  getTokenUserLocalStorage,
  removeTokenUserLocalStorage,
} from '../shared/store/user'

const api = axios.create({
  baseURL: 'https://localhost:7111/',
})

export function useApi() {
  const navigate = useNavigate()

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (
        (error.response && error.response.status === 401) ||
        error.code === 'ERR_NETWORK'
      ) {
        navigate('/')
        removeTokenUserLocalStorage()
      }
      return await Promise.reject(error)
    }
  )

  api.interceptors.request.use((config) => {
    const token = getTokenUserLocalStorage()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  return api
}
