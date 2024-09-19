import { Link } from "react-router-dom";

export default function About() {
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
            <div className="flex items-center justify-center min-h-screen my-26">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="">
                            <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Yelp Camp
                            </h1>
                            <p className="mt-8 text-xl font-bold text-gray-600">
                                Share your experince and be part of our nature loving community. 
                                <br /> 
                                Every feedback on a campground makes the community more reliable and welcoming.
                                <br />
                                Enjoy the nature, relax, make yourself comfortable and recharge your batteries!
                            </p>
                            <p className="mt-8 text-xl text-gray-500">
                                <strong>(NEW TO CAMPING:)</strong><br />
                                <em className="underline"> Keep in mind that the amentities here are not to the standards of the convetional houses or hotels.</em>
                            </p>
                            <p className="mt-8 text-xl text-gray-500">
                                Contact Support: support@yelpcamp.com 
                            </p>
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
    );
}