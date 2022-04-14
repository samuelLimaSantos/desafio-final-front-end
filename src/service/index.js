import axios from 'axios'

const api = axios.create({
  baseURL: 'https://globo-back-end.herokuapp.com',
})

export default api