import { useNavigate } from "react-router-dom";
import { useCreateCamp } from "../../hooks/useCamps";
import { useForm } from "../../hooks/useForm";
import { useState, useEffect } from "react";

const initialValues = { name: '', imageUrl: '', description: '', price: '', location: '' };

export default function Create() {
    const navigate = useNavigate();
    const createCampground = useCreateCamp();

    const validate = (values) => {
        const errors = {};
        if (!values.name.trim()) errors.name = 'Title is required';
        if (!values.imageUrl.trim()) errors.imageUrl = 'Image URL is required';
        if (!values.description.trim()) errors.description = 'Description is required';
        if (!values.location.trim()) errors.location = 'Location is required';

        const parsedPrice = parseFloat(values.price);
        if (!values.price.trim()) errors.price = 'Price is required';
        else if (isNaN(parsedPrice) || parsedPrice <= 0) errors.price = 'Price must be a valid number greater than 0';

        return errors;
    };

    const createHandler = async (values) => {
        const parsedPrice = parseFloat(values.price);
        try {
            const response = await createCampground({ ...values, price: parsedPrice });
            if (response && response._id) {
                navigate(`/camps/${response._id}`);
            } else {
                console.error('Failed to create camp.');
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    const {
        values,
        errors,
        changeHandler,
        submitHandler,
        isSubmitting
    } = useForm(initialValues, createHandler, validate);



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
            <div className="my-48 mx-auto bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-md w-full p-12">
                <form onSubmit={submitHandler}>
                    <h2 className="text-lg font-bold leading-7 text-center text-gray-900">Create</h2>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
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
                                        required
                                        placeholder="Image Url"
                                        autoComplete="imageUrl"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {errors.imageUrl && <div className="text-red-500 text-sm mt-1">{errors.imageUrl}</div>}
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
                                {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
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
                                {errors.price && <div className="text-red-500 text-sm mt-1">{errors.price}</div>}
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
                                        placeholder="Region, Country"
                                        autoComplete="location"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                {errors.location && <div className="text-red-500 text-sm mt-1">{errors.location}</div>}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <button
                                type="submit"
                                className="bg-threeBark [text-shadow:_5px_0_10px_rgb(0_0_0_/_100%)] bg-cover text-white text-lg font-bold py-2 px-4 w-full rounded hover:opacity-90 hover:scale-105"
                                disabled={isSubmitting} // || Object.keys(errors).length > 0
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </form>
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
