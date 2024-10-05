import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";
import { useState } from "react";

const initialValues = {email: '', password: ''};


export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({email, password}) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    const { 
        values, 
        changeHandler, 
        submitHandler 
    } = useForm(initialValues, loginHandler);
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
            <div className="my-auto mx-0 flex items-center justify-center h-screen w-full px-5 sm:px-0 ">
                <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden lg:max-w-md max-w-sm w-full">
                    <div className="w-full p-8 lg:w-full">
                        <form onSubmit={submitHandler}>
                            <p className="text-xl text-gray-600 font-bold text-center">Login</p>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email Address
                                </label>
                                <input
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    placeholder="name@email.com"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Password
                                    </label>
                                </div>
                                <input
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler}

                                />
                            </div>
                            {error && (
                                <span className="font-bold border bg-red-900 rounded px-1 text-white">{error}</span>
                            )}
                            <div className="mt-8">
                                <button type="submit" className="bg-three-bark [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] bg-cover text-white text-lg font-bold py-2 px-4 w-full rounded hover:opacity-90 hover:scale-105">
                                    Login
                                </button>
                            </div>
                            <div className="mt-4 flex items-center w-full text-center">
                                <Link
                                    to="/register"
                                    className="text-xs text-gray-500 capitalize text-center w-full"
                                >
                                    Don&apos;t have an account?
                                    <span className="text-blue-700"> Register</span>
                                </Link>
                            </div>
                        </form>
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