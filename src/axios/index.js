import axios from 'axios'
import getEnv from '@/utils/getEnv'
import cookieUtil from '@/utils/cookie'
const instance = axios.create({
  baseURL: getEnv().env,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})
instance.interceptors.request.use((config) => {
  if(getEnv().useLocalToken) {
    config.headers['Authorization'] = 'Beerer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTE0OTA1NjEsImp0aSI6ImY1M2ZlZGU3LWU2NzEtNDFhMi1hODdiLWNjNTNlOWFiZDE1MiIsIm9wZXJhdGlvblVzZXJTeXNpZCI6IjExMTEifQ.jqPvESTfMar2lE1JqMubD9ta6v_4GuY_zlAngNLuQ2Q' || null
  } else {
    config.headers['Authorization'] = cookieUtil.getCookie('token_str') || null
  }
  return config
}, (err) => {
  return Promise.reject(err)
})
export default instance
