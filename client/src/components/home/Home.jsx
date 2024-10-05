'use client'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import campsAPI from '../../api/camps-api';
import CampListItem from '../catalog/CampListItem';
import { useLatestCamps } from '../../hooks/useCamps';
// import { useLatestCamps } from '../../hooks/useCamps';
// import { db } from '../../../../firebase.config';
// import { ref, onValue, limitToLast } from "firebase/database";

export default function Home() {
	const [latestCamps, setLatestCamps] = useState([]);
	useEffect(() => {
		(async () => {
			const result = await campsAPI.getAll();
			// const latestData = result.length % 3 === 0 ? result.reverse().slice(3) : result.reverse().slice(2)
			setLatestCamps(result.reverse().slice(0,3));
		})([]);
	}, [])
	// const latestCamps = useLatestCamps();

	// const [camps, setCamps] = useState(null);

	// useEffect(() => {
	// 	const campsRef = ref(db, '/camps');
	// 	onValue(query(campsRef, limitToLast(3)), (snapshot) => {
	// 		const camps = snapshot.val();
	// 		setCamps(camps); // No need to reverse or slice
	// 	});
	// }, []);

	return (
		<div className="m-20 mx-0">
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
			<div className="mx-auto max-w-6xl py-10 sm:py-10 lg:py-20">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Campgrounds rental site
					</h1>
					<p className="mt-8 text-2xl leading-8 text-gray-600">
						Soon to include every public campground in the world
					</p>
					<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
						<h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Newest campgrounds</h3>

						{latestCamps.length > 0 
                        ? <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                            {latestCamps.map(c => <CampListItem key={c._id} {...c} />)}
                        </div>
                        : <h1 className="my-36 text-2xl font-bold text-center text-gray-900">No campgrounds yet</h1>}
						
							<div className="flex items-center pt-8 justify-center gap-x-6">
								<Link
									className=" rounded-md bg-cover opacity-100 bg-three-bark px-2.5 py-2 font-semibold shadow-sm hover:opacity-90 hover:scale-105"
									to="/camps"
								>
									<span className="text-white [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] text-lg">Catalog</span>
								</Link>
							</div>
						</div>
					</div>
					{/*  */}
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
	)
}