import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/camps'

export const getAll = () => request.get(BASE_URL);

export const getById = (campId) => request.get(`${BASE_URL}/${campId}`);

export const createCamp = (values) => request.post(`${BASE_URL}`, values);

export const getRecentCamps = async () => {
    const result = await request.get(`${BASE_URL}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
    const latestCamps = Object.values(result);
  
    return latestCamps;
};

export const getUserCamps = async (userId) => {
    const result = await request.get(`${BASE_URL}?where=_ownerId%3D%22${userId}%22`)
    const userCamps = Object.values(result);

    return userCamps;
}

export const updateCamp = async (campId, campData) => {
    const result = await request.put(`${BASE_URL}/${campId}`, campData);
    return result;
}

export const deleteCamp = async (campId) => {
    await request.del(`${BASE_URL}/${campId}`);
}

const campsAPI = {
    getAll,
    getById,
    createCamp,
    getRecentCamps,
    getUserCamps,
    updateCamp,
    deleteCamp
}

export default campsAPI