import * as request from './requester.js';

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/likes`;

const create = (campId) => request.post(BASE_URL, {campId});

const getAll = (campId) => {
    const params = new URLSearchParams({
        where: `campId="${campId}"`,
        load: `author=_ownerId:users`
    });

    return request.get(`${BASE_URL}?${params.toString()}`);
};

const likesAPI = {
    create,
    getAll
};

export default likesAPI;