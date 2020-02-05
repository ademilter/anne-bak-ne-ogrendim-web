import axios from 'axios'
import Router from 'next/router'

const fetch = axios.create({
  baseURL: process.env.API_URL
})

fetch.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('TOKEN')
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

fetch.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    const { status } = error.response
    // 401 = token'ı geçerli değil
    if (status === 401) {
      localStorage.removeItem('TOKEN')
    }
    return Promise.reject(error)
  }
)

export default fetch
