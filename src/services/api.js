import axios from 'axios';

// Базовый URL для API (позже замените на реальный адрес вашего бэкенда)
const API_BASE_URL = 'http://localhost:8000'; // Пример для локального бэкенда

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Функции для работы с API
export const apiService = {
  // Авторизация
  login: (email, password) => 
    api.post('/auth/login', { email, password }),
  
  // Загрузка данных
  uploadData: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  
  // Получение KPI
  getKPIs: () => api.get('/kpi'),
  
  // Получение данных для графиков
  getSalesData: (period = 'month') => 
    api.get(`/sales?period=${period}`),
  
  // Получение прогноза
  getForecast: (productId, period = '30') => 
    api.post('/forecast', { productId, period }),
  
  // Получение списка товаров
  getProducts: () => api.get('/products'),
};

// Интерцептор для добавления токена (если будет аутентификация)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;