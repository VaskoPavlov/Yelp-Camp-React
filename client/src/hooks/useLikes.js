import { useEffect, useState } from 'react';
import likesAPI from '../api/camps-like-api';

export function useCreateLikes(campId, userId) {
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        async function fetchLikes() {
            try {
                const likesData = await likesAPI.getAll(campId);
                setLikes(likesData);

                const userHasLiked = likesData.some(like => like._ownerId === userId);
                setHasLiked(userHasLiked);
            } catch (error) {
                console.error('Error fetching likes:', error);
            }
        }

        fetchLikes();
    }, [campId, userId]);

    const toggleLike = async () => {
        try {
            if (!hasLiked) {
                const newLike = await likesAPI.create(campId);
                setLikes([...likes, newLike]);
                setHasLiked(true);
            }
        } catch (error) {
            console.error('Error handling like:', error);
        }
    };

    return {
        likeCount: likes.length,
        hasLiked,
        toggleLike,
    };
}