import { useEffect } from "react";

import likesAPI from "../api/camps-like-api";

export function useCreateLike() {
    const createHandler = (campId) => likesAPI.create(likeId);

    return createHandler;
};

function likeReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();
        case 'LIKE':
            return [...state, action.payload];
        default: return state;
    }
};

export function useGetAllLikes(campId) {
    const [likes, dispatchLikes] = useReducer(likeReducer, []);

    useEffect(() => {
        (async () => {
            const result = await likesAPI.getAll(campId)
        })();
    }, [campId]);

    return [likes, dispatchLikes];
}