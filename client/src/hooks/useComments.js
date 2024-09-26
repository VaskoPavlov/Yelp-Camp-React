import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";


export function useCreateComment() {
    const createHandler = (campId, comment) => commentsAPI.create(campId, comment);

    return createHandler;
}

export function useGetAllComments(campId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(campId);
            setComments(result);
        })();
    }, [campId]);

    return [comments, setComments];
}