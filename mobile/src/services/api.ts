import axios from 'axios';

const api = axios.create({
    baseURL: "https://richard-dsdelivery.herokuapp.com"
});

export default api;