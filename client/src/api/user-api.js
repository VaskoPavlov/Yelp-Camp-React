// const { User } = require('../models/User');
// const bcrypt = require('bcrypt');

import * as request from './requester.js'

const BASE_URL = 'http://localhost:3030/users'


const login = (email, password) => request.post(`${BASE_URL}/login`, {email, password})

const register = (email, password) => request.post(`${BASE_URL}/register`, {email, password})

const authAPI = {
    login,
    register
}

export default authAPI