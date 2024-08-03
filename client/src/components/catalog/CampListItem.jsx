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
            <img
                alt={name} 
                src={imageUrl}
                to={_id}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <Link to={_id}>
                        <span aria-hidden="true" className="absolute font-bold decoration-solid inset-0" />
                        {name}
                    </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{location}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
    </div>
    );
}