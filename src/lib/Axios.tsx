import axios from 'axios'
import { Cookies } from 'react-cookie'
import { API_ENDPOINT, TOKEN_KEY } from '@config/App'

const instance = axios.create({
  baseURL: `${API_ENDPOINT}/`,
  headers: {
    'Content-Type': 'application/json, multipart/form-data',
  },
})

export const logout = () => {
  const cookies = new Cookies()
  cookies.remove(TOKEN_KEY)
}

instance.interceptors.request.use(
  (config) => {
    const cookies = new Cookies()
    const authToken = cookies.get(TOKEN_KEY)
    if (authToken) {
      config.headers = {
        Authorization: `Bearer ${authToken}`,
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response.status === 401) {
      logout()
    }

    return Promise.reject(err)
  }
)

export default instance
