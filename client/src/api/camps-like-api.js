import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/data/likes';

const create = (campId) => requester.post(BASE_URL, {campId});

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