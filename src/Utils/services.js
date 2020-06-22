import axios from 'axios'

const api = axios.create({
  baseURL: 'https://gadablog-rest-api.herokuapp.com'
})

export default api