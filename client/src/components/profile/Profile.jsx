import { Link } from "react-router-dom";
import { useUserCamps } from "../../hooks/useCamps";
import { useAuthContext } from "../../contexts/AuthContext";
import CampListItem from "../catalog/CampListItem";

export default function Profile() {
    const userCamps = useUserCamps();
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Your campgrounds</h3>
    
        {userCamps.length > 0
            ? <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                {userCamps.map(c => <CampListItem key={c._id} {...c} />)}
            </div>
            : <h1 className="my-36 text-2xl font-bold text-center text-gray-900">This users has no campgrounds yet</h1>}

        <div className="flex items-center pt-8 justify-center gap-x-6">
            <Link
                className=" rounded-md bg-cover opacity-100 bg-three-bark px-2.5 py-2 font-semibold shadow-sm hover:opacity-90 hover:scale-105"
                to="/camps"
            >
                <span className="text-white [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] text-lg">Catalog</span>
            </Link> 
        </div>
    </div>
    );
}