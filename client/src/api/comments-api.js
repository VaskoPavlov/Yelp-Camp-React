import * as requester from "./requester";

const BASE_URL = `${import.meta.VITE_API_URL}/data/comments`;

const create = (campId, text) => requester.post(BASE_URL, {campId, text});

const getAll = (campId) => {
    const params = new URLSearchParams({
        where: `campId="${campId}"`,
        load: `author=_ownerId:users`
    })
    
    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const commentsAPI = {
    create, 
    getAll
}

export default commentsAPI;