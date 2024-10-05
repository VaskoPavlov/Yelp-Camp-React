// Edit.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import campsAPI from '../../api/camps-api';
import { useForm, resetForm} from '../../hooks/useForm';

const initialValues = { name: '', imageUrl: '', description: '', price: '', location: '' };

export default function Edit() {
    const navigate = useNavigate();
    const { campId } = useParams();
    const [camp, setCamp] = useState(initialValues);

    useEffect(() => {
        async function fetchCamp() {
            const fetchedCamp = await campsAPI.getById(campId);
            setCamp(fetchedCamp);
            resetForm(fetchedCamp);  // <-- Add this to reset the form with fetched data
        }
        fetchCamp();
    }, [campId]);

    const validate = (values) => {
        const errors = {};
        if (!values.name.trim()) errors.name = 'Title is required';
        if (!values.imageUrl.trim()) errors.imageUrl = 'Image URL is required';
        if (!values.description.trim()) errors.description = 'Description is required';
        if (!values.location.trim()) errors.location = 'Location is required';

        const parsedPrice = parseFloat(values.price);
        if (!values.price) errors.price = 'Price is required';
        else if (isNaN(parsedPrice) || parsedPrice <= 0) errors.price = 'Price must be a valid number greater than 0';

        return errors;
    };

    const updateHandler = async (values) => {
        const parsedPrice = parseFloat(values.price);

        try {
            const updatedCamp = { ...values, price: parsedPrice };
            await campsAPI.updateCamp(campId, updatedCamp);
            navigate(`/camps/${campId}`);
        } catch (error) {
            console.error('Failed to update camp:', error);
        }
    };

    const { values, errors, changeHandler, submitHandler, resetForm } = useForm(camp, updateHandler, validate);

    return (
        <div className="m-20">
            <div className="my-48 mx-auto bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-md w-full p-12">
                <form onSubmit={submitHandler}>
                    <h2 className="text-lg font-bold leading-7 text-center text-gray-900">Edit</h2>
                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        
                        {/* Title Field */}
                        <div className="col-span-full">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    onChange={changeHandler}
                                    placeholder="Campground name"
                                    className="block w-full rounded-md border-gray-300"
                                />
                                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                            </div>
                        </div>

                        {/* Image URL Field */}
                        <div className="col-span-full">
                            <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                                Image
                            </label>
                            <div className="mt-2">
                                <input
                                    id="imageUrl"
                                    name="imageUrl"
                                    type="url"
                                    value={values.imageUrl}
                                    onChange={changeHandler}
                                    placeholder="Image URL"
                                    className="block w-full rounded-md border-gray-300"
                                />
                                {errors.imageUrl && <div className="text-red-500 text-sm mt-1">{errors.imageUrl}</div>}
                            </div>
                        </div>

                        {/* Description Field */}
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
                                    placeholder="Campground description"
                                    rows={3}
                                    className="block w-full rounded-md border-gray-300"
                                />
                                {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                            </div>
                        </div>

                        {/* Price Field */}
                        <div className="col-span-full">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2 flex rounded-md">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">$</span>
                                <input
                                    id="price"
                                    name="price"
                                    type="number"
                                    value={values.price}
                                    onChange={changeHandler}
                                    placeholder="Price"
                                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300"
                                />
                            </div>
                            {errors.price && <div className="text-red-500 text-sm mt-1">{errors.price}</div>}
                        </div>

                        {/* Location Field */}
                        <div className="col-span-full">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                Location
                            </label>
                            <div className="mt-2">
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    value={values.location}
                                    onChange={changeHandler}
                                    placeholder="Location"
                                    className="block w-full rounded-md border-gray-300"
                                />
                                {errors.location && <div className="text-red-500 text-sm mt-1">{errors.location}</div>}
                            </div>
                        </div>

                        {/* Submit Button */}
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
