'use client'

import { StarIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import campsAPI from '../../api/camps-api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetOneCamps } from '../../hooks/useCamps'
import Like from './CampLike'
import { useAuthContext } from '../../contexts/AuthContext'
import { useForm } from '../../hooks/useForm'

const likeHandler = (newLike) => {
	dispatchLikes({type: 'LIKE', payload: newLike });
};

// const likedId = likes.find((like) => like._ownerId == userId)?._id;

// const isOwner = userId == reportError._ownerId;
// const hasLiked = !!likes.find((l) => l._ownerid == userId);


export default function Details() {
	const navigate = useNavigate();
	const {userId} = useAuthContext()
	const { campId } = useParams();
	const [camp] = useGetOneCamps(campId);
	const isOwner = userId === camp._ownerId;
	
	const campEditHandler = async (values) => {
		const isConfirmed = confirm('Are you sure you want to update this camp?');
		if (isConfirmed) {
            await campsAPI.updateCamp(campId, values);

            navigate(`/camps/${campId}`);
        }
	}

	const campDeleteHandler = async () => {
		try {
			await campsAPI.deleteCamp(campId);

			navigate('/');
		} catch (error) {
			console.log(err.message);
		}
	}
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
						<div className="border bg-gray-200 aspect-h-3 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
							<img
								alt={camp.name}
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

							</div>
							<div className="mt-2">
								<div className="flex">
									<div className="flex ">
										{/* {hasLiked 
											? <h1>You have already like this Campground!</h1>
											: <Like campId={campId} onLike={likeHandler}/>
										} */}
									</div>
								</div>
							</div>
							{isOwner && (
								<div className="mt-2">
									<Link to={`/camps/${campId}/edit`} onClick={campEditHandler} className="border bg-yellow-200 text-black rounded px-2 py-1 mr-10">
										Edit
									</Link>
									<Link onClick={campDeleteHandler} className="border bg-red-900 text-white rounded px-2 py-1">
										Delete
									</Link>
								</div>
							)}
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
