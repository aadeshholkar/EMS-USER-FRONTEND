import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Change if needed
  withCredentials: true,
});

// Attach token if stored in localStorage
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
