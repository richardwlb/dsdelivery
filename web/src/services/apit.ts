import axios from 'axios';

const api = axios.create({
  baseURL: 'http://richard-dsdelivery.herokuapp.com',
});

export default api;