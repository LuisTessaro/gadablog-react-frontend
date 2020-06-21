import axios from 'axios'

const api = axios.create({
  baseURL: 'http://gadablog-rest-api.herokuapp.com'
})

export default api