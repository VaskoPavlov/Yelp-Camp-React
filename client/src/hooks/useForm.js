import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);

    const validateForm = () => {
        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
            return Object.keys(validationErrors).length === 0;
        }
        return true;
    };

    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (validateForm()) {
            try {
                await submitCallback(values);
            } catch (error) {
                console.error('Submission error:', error);
            }
        }
        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        changeHandler,
        submitHandler,
        isSubmitting,
    };
}
