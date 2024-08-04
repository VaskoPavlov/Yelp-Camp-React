import { useState, useEffect } from "react";
import campsAPI from "../api/camps-api";

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