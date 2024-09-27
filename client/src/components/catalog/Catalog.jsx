import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import campsAPI from '../../api/camps-api';

import CampListItem from "./CampListItem";
import { useGetAllCamps } from "../../hooks/useCamps";

export default function Catalog() {
    const [camps] = useGetAllCamps();

    return (
        <div className="m-20">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ae754e] to-[#bcf7d1] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">Campgrounds</h2>

                    {camps.length > 0 
                        ? <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            {camps.map(c => <CampListItem key={c._id} {...c} />)}
                        </div>
                        : <h1 className="mt-48 text-2xl font-bold text-center text-gray-900">No campgrounds yet</h1>}
                </div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#bcf7d1] to-[#ae754e] opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    );
}

// const camps = [
//     {
//         id: 1,
//         name: 'Camp 1',
//         imageUrl: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
//         description: "Front of men's Basic Tee in black.",
//         price: '$10',
//         location: 'Bulgaria',
//     },
//     {
//         id: 2,
//         name: 'Camp 2',
//         imageUrl: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
//         description: "Front of men's Basic Tee in black.",
//         price: '$20',
//         location: 'Norway',
//     },
//     {
//         id: 3,
//         name: 'Camp 3',
//         imageUrl: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
//         description: "Front of men's Basic Tee in black.",
//         price: '$30',
//         location: 'Russia',
//     },
//     {
//         id: 4,
//         name: 'Camp 4',
//         imageUrl: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
//         description: "Front of men's Basic Tee in black.",
//         price: '$40',
//         location: 'Canada',
//     },
//     {
//         id: 5,
//         name: 'Camp 5',
//         imageUrl: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
//         description: "Front of men's Basic Tee in black.",
//         price: '$50',
//         location: 'USA',
//     },
// ]