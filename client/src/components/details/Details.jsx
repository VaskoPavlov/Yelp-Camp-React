'use client'
import { useEffect, useReducer, useState } from 'react'

import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/20/solid';

import campsAPI from '../../api/camps-api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetOneCamps } from '../../hooks/useCamps'
import { useAuthContext } from '../../contexts/AuthContext'
import { useCreateLikes } from '../../hooks/useLikes';
import GoogleMapComponent from '../google-map/GoogleMap';
import { APIProvider } from '@vis.gl/react-google-maps';
import commentsAPI from '../../api/comments-api';
import { useForm } from '../../hooks/useForm';

import styles from './comment.module.css'
import { useCreateComment, useGetAllComments } from '../../hooks/useComments';

const mapsApiKey = import.meta.env.VITE_API_KEY;


const initialValues = { comment: '' };

export default function Details() {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuthContext();
	const { userId, email } = useAuthContext();
	const { campId } = useParams();
	const [camp] = useGetOneCamps(campId);
	const [comments, setComments] = useGetAllComments(campId);
	const createComment = useCreateComment();
	const {
		changeHandler,
		submitHandler,
		values
	} = useForm(initialValues, async ({ comment }) => {
		try {
			const newComment = await createComment(campId, comment)
			setComments(oldComments => [...oldComments, newComment]);
		} catch (err) {
			console.log(err.message);
		}
	});

	const isOwner = userId === camp._ownerId;

	const { likeCount, hasLiked, toggleLike } = useCreateLikes(campId, userId);

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
		<APIProvider apiKey={mapsApiKey}>
			<div className="my-48 mx-0">
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
							<div className="border bg-gray-200 aspect-h-3 aspect-w-3 overflow-hidden rounded-lg lg:block">
								<img
									alt={camp.name}
									src={camp.imageUrl}
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div className="mx-auto">
								<div className="mt-4">
									<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{camp.name}</h1>
								</div>

								<div className="mt-4">
									<p className="text-xl font-bold text-gray-900">Price: ${camp.price}/day</p>
								</div>

								<div className="mt-4">
									<p className="text-lg rounded-lg shadow-lg border p-2">{camp.description}</p>

								</div>
								<div className="mt-4">
									<p className="text-lg font-bold text-gray-900">{camp.location}</p>

								</div>
								<div className="mt-4">
									<div className="flex">
										<div className="flex ">
											{isAuthenticated
												? (<button
													onClick={toggleLike}
													disabled={hasLiked}
													className={`heart-btn ${hasLiked ? 'disabled' : ''}`}
												>
													{hasLiked ? (
														<HeartIcon className="w-8 h-8 text-pink-500" />
													) : (
														<OutlineHeartIcon className="w-8 h-8 text-gray-500" />
													)}
												</button>
												) : (
													''
												)}
										</div>
									</div>
								</div>
								<div className="mt-0">
									<span>{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</span>
								</div>
								{isOwner && (
									<div className="mt-10">
										<Link to={`/camps/${campId}/edit`} onClick={campEditHandler} className="border bg-orange-500 text-white text-xl font-bold rounded px-2 py-1 mr-4">
											Edit
										</Link>
										<Link onClick={campDeleteHandler} className="border bg-red-700 text-white text-xl font-bold rounded px-2 py-1">
											Delete
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="my-10 mx-auto w-5/6">
					<GoogleMapComponent
						lat={camp.lat}
						lng={camp.lng}
						name={camp.name}
						location={camp.location}
						description={camp.description}
					/>
				</div>
				<div className="my-10 mx-auto w-3/4">
					<h2 className="font-bold text-lg text-center">Comments:</h2>
					<ul>
						{comments.map((comment, index) => (
							<li key={comment._id || index} className="my-2 ">  {/* Use _id or index as fallback */}
								<p className="text-white bg-cover opacity-70 bg-three-bark rounded-md px-2 py-1 font-semibold hover:opacity-90 hover:scale-105 leading-6 pl-10">
									{comment.author && comment.author.email ? (
										<span className="underline decoration-wavy font-black">
											{comment.author.email}
										</span>
									) : (
										<span className="font-black">{email}</span>
									)}
									<br />
									<span className="pl-32 text-white [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] text-md">
										{comment.text}
									</span>
								</p>
							</li>
						))}
					</ul>

				</div>
				{isAuthenticated && (<article className="mb-10 mx-auto w-3/4 font-bold text-lg">
					<form onSubmit={submitHandler}>
						<div className={styles.commentDiv}>
							<textarea
								className={styles.textarea}
								name="comment"
								placeholder="Comment..."
								onChange={changeHandler}
								value={values.comment}

							></textarea>
							<button className={styles.commentBtn} type="submit">&lsaquo;</button>
						</div>
					</form>
				</article>
				)}
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
		</APIProvider>
	)
}
