'use client'
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

const initialValues = { email: '', password: '', rePass: "" };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address';
        }
        return '';
    };

    const validatePassword = (password) => {
        if (password.length < 4) {
            return 'Password should be at least 4 characters long';
        }
        if (/\s/.test(password)) {
            return 'Password should not contain spaces';
        }
        return '';
    };

    const registerHandler = async ({ email, password, rePass }) => {
        const emailErrorMessage = validateEmail(email);
        const passwordErrorMessage = validatePassword(password);

        if (emailErrorMessage || passwordErrorMessage) {
            setEmailError(emailErrorMessage);
            setPasswordError(passwordErrorMessage);
            return;
        }

        if (password !== rePass) {
            return setError('Password don\'t match');
        }
        try {
            await register(email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

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
            <div className="my-auto mx-auto flex items-center justify-center h-screen w-full px-5 sm:px-0">
                <div className="bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-md  w-full">
                    <div className="w-full p-8 lg:w-full">
                        <form onSubmit={submitHandler}>
                            <p className="text-xl text-gray-600 font-bold text-center">Register</p>
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
                                    required
                                />
                                {emailError && <p className="text-red-600 text-sm mt-2">{emailError}</p>}
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
                                    onChange={changeHandler}
                                    value={values.password}
                                />
                                {passwordError && <p className="text-red-600 text-sm mt-2">{passwordError}</p>}
                            </div>
                            <div className="mt-4 flex flex-col justify-between">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Repeat Password
                                    </label>
                                </div>
                                <input
                                    className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                    type="password"
                                    name="rePass"
                                    value={values.rePass}
                                    onChange={changeHandler}
                                />
                            </div>
                            {error && (
                                <span className="font-bold border bg-red-900 rounded px-1 text-white">{error}</span>
                            )}
                            <div className="mt-8">
                                <button type="submit" className="bg-threeBark [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] bg-cover text-white text-lg font-bold py-2 px-4 w-full rounded hover:opacity-90 hover:scale-105">
                                    Register
                                </button>
                            </div>
                            <div className="mt-4 flex items-center w-full text-center">
                                <Link
                                    to="/login"
                                    className="text-xs text-gray-500 capitalize text-center w-full"
                                >
                                    Do you have an account?
                                    <span className="text-blue-700"> Login</span>
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