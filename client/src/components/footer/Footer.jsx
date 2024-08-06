import { Link } from "react-router-dom";
import YelpCamp from '../../public/images/YelpCampLogo.png'


export default function Footer() {
    return (
        <footer className="text-center mb-24">
            <div className="py-6 mx-auto rounded-3xl bg-gradient-to-b from-[#dde0ce] to-transparent opacity-90 sm:w-full md:w-2/3 lg:w-4/5">
                <div className="flex md:flex-row items-center justify-between mx-8">
                    <Link to="/" className="">
                        <span className="sr-only">Yelp Camp</span>
                        <img alt="Yelp Camp" src={YelpCamp} className="h-8 w-auto lg:h-16 md:h-12" />
                    </Link>
                    <h1 className="font-bold">Copyright &copy; 2024. <br /> All rights reserved.</h1>
                    <Link to="/about" className="bg-cover opacity-100 bg-three-bark rounded-md px-2 py-1 font-semibold hover:opacity-90 hover:scale-105 leading-6">
                        <span className="text-white [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] text-md">About</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}