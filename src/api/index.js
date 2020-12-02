import axios from '../utils/request.js';
const base = {
    baseUrl: '/api',
    login: '/api/login'
}

const api = {
    getLogin(params) {
        return axios.post(base.baseUrl + base.login, params)
    }
}
export default api;