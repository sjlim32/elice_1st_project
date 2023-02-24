import axios from 'axios';

const API = axios.create({
  baseURL: 'http://kdt-ai6-team01.elicecoding.com/',
});

API.interceptors.request.use(req => {
  if (localStorage.getItem('userToken')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
  }
  return req;
});

export default API;
