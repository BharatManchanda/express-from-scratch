import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token'); 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const setAccessToken = (token) => {
    axios.defaults.headers.common['Authorization'] = token
}

const api = {
    auth: {
        register: async (data) => await axios.post('/auth/register', data),
        login: async (data) => await axios.post('/auth/login', data),
        logout: async (data) => await axios.post('/auth/logout', data),
        getMe: async (data) => await axios.post('/auth/get-me', data),
        updateMe: async (data) => await axios.put('/auth/update-me', data),
    },
};

export default api;