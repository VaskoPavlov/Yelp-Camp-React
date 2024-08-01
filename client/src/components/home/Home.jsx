'use client'

import { Link } from 'react-router-dom'

export default function Home() {
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
			<div className="mx-auto max-w-8xl py-10 sm:py-10 lg:py-20">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Campgrounds rental site
					</h1>
					<p className="mt-8 text-2xl leading-8 text-gray-600">
						Soon to include every public campground in the world <br /> Share your experince and be part of our nature loving community
					</p>
					{/* Campgrounds - 3 most recents*/}
					<div className="rounded-3xl p-px bg-gradient-to-b from-[#dde0ce] to-transparent opacity-90 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]
									mx-auto max-w-2xl px-4 mt-10 py-10 sm:px-6 sm:py-10 lg:max-w-6xl lg:px-20">
						<h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Most recent campgrounds</h3>
						<div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
							{/* {products.map((product) => ( */}
							<div key="campground 1" className="group relative">
								<div className="aspect-h-auto aspect-w-auto w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
									<img
										alt=""
										src="https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"
										className="h-full w-full object-cover object-center lg:h-full lg:w-full"
									/>
								</div>
								<div><h2>Camp 1</h2></div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className=" text-gray-700">
											<a href="">
												<span aria-hidden="true" className="absolute inset-0" />
												Details
											</a>
										</h3>
										<p className="mt-1  text-gray-500">Price</p>
									</div>
									<p className=" font-medium text-gray-900">$10</p>
								</div>
							</div>
							<div key="campground 2" className="group relative">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
									<img
										alt=""
										src="https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"
										className="h-full w-full object-cover object-center lg:h-full lg:w-full"
									/>
								</div>
								<div><h2>Camp 2</h2></div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className=" text-gray-700">
											<a href="">
												<span aria-hidden="true" className="absolute inset-0" />
												Details
											</a>
										</h3>
										<p className="mt-1  text-gray-500">Price</p>
									</div>
									<p className=" font-medium text-gray-900">$20</p>
								</div>
							</div>
							<div key="campground 3" className="group relative">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
									<img
										alt=""
										src="https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"
										className="h-full w-full object-cover object-center lg:h-full lg:w-full"
									/>
								</div>
								<div><h2>Camp 3</h2></div>
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className=" text-gray-700">
											<a href="">
												<span aria-hidden="true" className="absolute inset-0" />
												Details
											</a>
										</h3>
										<p className="mt-1  text-gray-500">Price</p>
									</div>
									<p className=" font-medium text-gray-900">$30</p>
								</div>
							</div>
							{/* ))} */}
						</div>
							<div className="flex items-center pt-8 justify-center gap-x-6">
								<Link
									className=" rounded-md bg-cover opacity-100 bg-three-bark px-2.5 py-2 font-semibold shadow-sm hover:opacity-75 hover:scale-110"
									to="/catalog"
								>
									<span className="text-white [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] text-lg">Catalog</span>
								</Link>
								<Link to="/about" className=" bg-cover opacity-100 bg-three-bark rounded-md px-2.5 py-2 font-semibold hover:opacity-75 hover:scale-110 leading-6">
									<span className="text-white [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] text-lg">About</span>
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