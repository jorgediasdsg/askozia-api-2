import axios from 'axios';
require('dotenv/config');

const api = axios.create({
    baseURL: 'https://api.github.com'
});

export const askoziaApi = axios.create({ 
    baseURL: process.env.ASKOZIA_PATH 
})

export default api;