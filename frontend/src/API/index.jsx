import axios from 'axios';

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const api = {
    auth: {
        register: async (data) => await axios.post('', data),
        login: '',
        logout: '',
    },
};