// const { User } = require('../models/User');
// const bcrypt = require('bcrypt');

import * as request from './requester.js'

const BASE_URL = `${import.meta.env.VITE_API_URL}/users`


const login = (email, password) => request.post(`${BASE_URL}/login`, {email, password})

const register = (email, password) => request.post(`${BASE_URL}/register`, {email, password})

const logout = () => request.get(`${BASE_URL}/logout`);

const authAPI = {
    login,
    register,
    logout
}

export default authAPI