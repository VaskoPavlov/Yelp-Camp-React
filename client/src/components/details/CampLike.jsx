import { Link } from "react-router-dom";
import { useCreateLike } from "../../hooks/useLikes";

export default function Like({
    campId,
    onLike
}) {
    const like = useCreateLike();
    
    const campLikeHandler = async () => {
        try {
            const newLike = await like(campId);

            onLike(newLike);
        } catch(err) {
            console.log(err.message);
        }
    };

    return (
        <Link onClick={campLikeHandler} className="font-bold"></Link>
    );
}