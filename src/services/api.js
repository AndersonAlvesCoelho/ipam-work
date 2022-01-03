import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://162.214.198.80:8080/v1', //EXTERNA
  baseURL: 'http://localhost:3333/v1', //INTERNA
});
export default api;