import axios from 'axios';

//BASE URL https://sujeitoprogramador.com/r-api/?api=filmes/

// r-api/?api=filmes/ (TODOS OS FILMES)

// r-api/?api=filmes/ + ID DO FILME

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;