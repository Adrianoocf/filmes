import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=d2f23ebe30190120e53bd61e5d699595&language=pt-BR
// minha chave da api d2f23ebe30190120e53bd61e5d699595

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api; 