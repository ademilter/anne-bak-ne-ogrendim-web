import axios from 'axios'

const service = axios.create({
  baseURL: process.env.API_URL
})

// service.interceptors.request.use(
//   function(config) {
//     return config
//   },
//   function(error) {
//     return Promise.reject(error)
//   }
// )

service.interceptors.response.use(
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

export default service
