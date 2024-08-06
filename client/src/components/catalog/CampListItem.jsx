import { Link } from "react-router-dom";

export default function CampListItem({
    _id,
    name,
    imageUrl,
    price,
    location
}) {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link to={`/camps/${_id}`}>
                    <img
                        alt={name}
                        src={imageUrl}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </Link>
            </div>
            <div className="mt-4 flex justify-between w-full">
                <div className="w-3/4">
                    <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="font-bold decoration-solid">{name}</span>
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">{location}</p>
                </div>
                <div className="w-1/4">
                    <p className="text-sm font-medium text-gray-900 mb-3">${price}/day</p>
                    <Link to={`/camps/${_id}`} className="bg-cover opacity-100 bg-three-bark rounded-md px-2 py-1 font-semibold hover:opacity-90 hover:scale-105">
                        <span className="text-white [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] text-sm">Details
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}