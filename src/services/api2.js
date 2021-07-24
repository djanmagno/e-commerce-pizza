import axios from 'axios';

const api2 = axios.create({
    baseURL: 'http://localhost:8080/DadosProdutos2'
});

export  default api2;