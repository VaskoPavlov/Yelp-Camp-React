'use client'

import { StarIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import campsAPI from '../../api/camps-api'
import { useParams } from 'react-router-dom'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Details() {
	const reviews = { href: '#', average: 4, totalCount: 117 }
	const rating = 3;
	const [camp, setCamp] = useState({});
	const { campId } = useParams();

	useEffect(() => {
		(async () => {
			const result = await campsAPI.getById(campId);
			setCamp(result);
		})();
	});

	return (
		<div className="my-48 mx-48">
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
			<div className="mx-auto w-full">
				<div className="pt-6">
					{/* Image gallery */}
					<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="aspect-h-3 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
							<img
								alt={camp.imageUrl}
								src={camp.imageUrl}
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<div className="mx-auto">
							<div className="">
								<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{camp.name}</h1>
							</div>

							<div className="mt-2">
								<p className="text-lg text-gray-900">Price: ${camp.price}/day</p>
							</div>

							<div className="mt-2">
								<p className="text-lg rounded-lg shadow-lg border p-2">{camp.description}</p>

							</div>
							<div className="mt-2">
								<p className="text-lg font-medium text-gray-900">{camp.location}</p>

								<div className="mt-2">
									<p className="text-sm text-gray-600">Category:<span className="font-bold">Summer</span></p>
								</div>
							</div>
							<div className="mt-2">
								<div className="flex">
									<div className="flex ">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												aria-hidden="true"
												className={classNames(
													reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
													'h-5 w-5 flex-shrink-0',
												)}
											/>
										))}
									</div>
									<p className="sr-only">{reviews.average} out of 5 stars</p>
									<a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
										{reviews.totalCount} reviews
									</a>
								</div>
							</div>
						</div>
					</div>
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
	)
}
