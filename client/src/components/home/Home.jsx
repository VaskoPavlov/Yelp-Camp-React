'use client'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-8 sm:py-6 lg:py-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Yelp Camp - campgrounds rental site.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Soon to include every public campground in the world. <br /> Share with us your experince and be part of <em>OUR</em> the nature loving community!
            </p>
            {/* Campgrounds - 3 most recents*/}
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Most recent campgrounds</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {/* {products.map((product) => ( */}
                    <div key="campground" className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          alt=""
                          src="https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div><h2>Camp 1</h2></div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href="">
                              <span aria-hidden="true" className="absolute inset-0" />
                              Details
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">Price</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">$20</p>
                      </div>
                    </div>
                    <div key="campground" className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          alt=""
                          src="https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div><h2>Camp 1</h2></div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href="">
                              <span aria-hidden="true" className="absolute inset-0" />
                              Details
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">Price</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">$20</p>
                      </div>
                    </div>
                    <div key="campground" className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          alt=""
                          src="https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg"
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div><h2>Camp 1</h2></div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a href="">
                              <span aria-hidden="true" className="absolute inset-0" />
                              Details
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">Price</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">$20</p>
                      </div>
                    </div>
                  {/* ))} */}
                </div>
              </div>
            {/*  */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/catalog"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Campgrounds
              </Link>
              <a to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                About us <span aria-hidden="true">→</span>
              </a>
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
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}