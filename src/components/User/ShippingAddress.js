import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";


const Shipping = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const MySwal = withReactContent(Swal);
    const router = useRouter();

    const submitHandler = (data) => {
        MySwal.fire({
            title: "Checkout Process Complete!",
            text: "Your shipping information has been submitted successfully. You will be redirected to the home page shortly.",
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
        }).then(() => {
            // router.push("/");
        });
    };

    return (
        <div className="container mx-auto py-32">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-700 text-center mb-6">Shipping Address</h1>
            <div className="flex justify-center items-center">
                <div className="w-full lg:w-1/2 bg-white shadow-lg p-6 rounded-2xl border border-gray-200">
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="block text-gray-900 font-semibold py-2">Full Name :</label>
                            <input
                                type="text"
                                id="name"
                                className={`w-full border rounded-lg px-3 py-2 focus:ring-1 outline-none  ${errors.name ? "focus:ring-red-500" : "border-gray-300 focus:ring-green-400"}`}
                                {...register("name", { required: "Full Name is required" })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mobile" className="block text-gray-900 font-semibold py-2">Mobile Number :</label>
                            <input
                                type="text"
                                id="mobile"
                                className={`w-full border rounded-lg px-3 py-2 focus:ring-1 outline-none ${errors.name ? "focus:ring-red-500" : "border-gray-300 focus:ring-green-400"}`}
                                {...register("mobile", {
                                    required: "Mobile number is required",
                                    pattern: {
                                        value: /^\+?(?:[0-9] ?){6,14}[0-9]$/,
                                        message: "Invalid mobile number format"
                                    }
                                })}
                            />
                            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="postalCode" className="block text-gray-900 font-semibold py-2">Postal Code :</label>
                            <input
                                type="text"
                                id="postalCode"
                                className={`w-full border rounded-lg px-3 py-2 focus:ring-1 outline-none ${errors.name ? "focus:ring-red-500" : "border-gray-300 focus:ring-green-400"}`}
                                {...register("postalCode", {
                                    required: "Postal code is required",
                                    pattern: {
                                        value: /^[0-9]{5,6}$/,
                                        message: "Invalid postal code format"
                                    }
                                })}
                            />
                            {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>}
                        </div>

                        {['Flat, House no., Building', 'Area, Street, Sector', 'Landmark', 'Town/City', 'State', 'Country'].map((label, index) => (
                            <div className="mb-3" key={index}>
                                <label htmlFor={label} className="block text-gray-900 font-semibold py-2">{label} :</label>
                                <input
                                    type="text"
                                    id={label}
                                    className={`w-full border rounded-lg px-3 py-2 focus:ring-1 outline-none ${errors[label.replace(/[^a-zA-Z]/g, "").toLowerCase()] ? "focus:ring-red-500" : "border-gray-300 focus:ring-green-400"}`}

                                    {...register(label.replace(/[^a-zA-Z]/g, "").toLowerCase(), { required: `${label} is required` })}
                                />
                                {errors[label.replace(/[^a-zA-Z]/g, "").toLowerCase()] && <p className="text-red-500 text-sm mt-1">{errors[label.replace(/[^a-zA-Z]/g, "").toLowerCase()].message}</p>}
                            </div>
                        ))}

                        <div className="text-center py-5">
                            <button
                                type="submit"
                                className="w-1/2 bg-green-500 text-white py-2 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Shipping;
