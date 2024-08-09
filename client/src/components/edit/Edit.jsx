import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import campsAPI, { updateCamp } from '../../api/camps-api';
import { useGetOneCamps } from '../../hooks/useCamps';
import { useForm } from '../../hooks/useForm';

const initialValues = { name: '', imageUrl: '', description: '', price: '', location: '' };

export default function Edit() {
    const navigate = useNavigate();
    const { campId } = useParams();
    const [camp, setCamp] = useGetOneCamps(campId);
    const [errors, setErrors] = useState(null);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, camp), async (values) => {
        await campsAPI.updateCamp(campId, values);
        navigate(`/camps/${campId}`);
    });

    return (
        <div className="m-20">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ae754e] to-[#bcf7d1] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="my-48 mx-auto bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-md w-full p-12">
                <form onSubmit={submitHandler}>
                    <h2 className="text-lg font-bold leading-7 text-center text-gray-900">Edit</h2>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {errors && <div className="col-span-full text-red-500">{errors}</div>}
                        <div className="col-span-full">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={values.name}
                                        onChange={changeHandler}
                                        required
                                        placeholder="Campground name"
                                        autoComplete="name"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                                Image
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="url"
                                        value={values.imageUrl}
                                        onChange={changeHandler}
                                        placeholder="Image Url"
                                        autoComplete="imageUrl"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    value={values.description}
                                    onChange={changeHandler}
                                    required
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="p-2">$</span>
                                    <input
                                        id="price"
                                        name="price"
                                        type="number"
                                        value={values.price}
                                        onChange={changeHandler}
                                        required
                                        placeholder="$$$"
                                        autoComplete="price"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <span><em>Other currency: convert it to USD</em></span>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                Location
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        value={values.location}
                                        onChange={changeHandler}
                                        required
                                        placeholder="Campground location"
                                        autoComplete="location"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <button
                                type="submit"
                                className="bg-threeBark [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] bg-cover text-white text-lg font-bold py-2 px-4 w-full rounded hover:opacity-90 hover:scale-105"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
