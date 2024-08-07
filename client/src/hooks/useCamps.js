import { useState, useEffect } from "react";
import campsAPI from "../api/camps-api";
import { useAuthContext } from "../contexts/AuthContext";

export function useGetAllCamps() {
    const [camps, setCamps] = useState([])

    useEffect(() => {
        (async () => {
            const result = await campsAPI.getAll();

            setCamps(result);
        })();
    },[]);

    return [camps, setCamps];
}

export function useGetOneCamps(campId) {
    const [camp, setCamp] = useState({});

	useEffect(() => {
		(async () => {
			const result = await campsAPI.getById(campId);
			setCamp(result);
		})();
	},[campId]);

    return [camp, setCamp];
}

export function useCreateCamp() {
    const campCreateHandler = async (values) => {

        const response = await campsAPI.createCamp(values);
        return response;
    }

    return campCreateHandler
}

export function useLatestCamps() {
    const [latestCamps, setLatestCamps] = useState([]);

    useEffect(() => {
        const fetchCamps = () => {
            try {
                const camps = campsAPI.getRecentCamps();
                setLatestCamps(camps);
            } catch (error) {
                console.error("Failed to fetch recent camps:", error);
            }
        };

        fetchCamps();
    }, []);

    return latestCamps;
};

export function useUserCamps() {
    const [userCamps, setUserCamps] = useState([]);
    const { userId } = useAuthContext(); // Get userId from AuthContext

    useEffect(() => {
        const fetchUserCamps = async () => {
            if (userId) {
                try {
                    const camps = await campsAPI.getUserCamps(userId);
                    setUserCamps(camps);
                } catch (error) {
                    console.error("Failed to fetch user's camps:", error);
                }
            }
        };

        fetchUserCamps();
    }, [userId]);

    return userCamps;
}