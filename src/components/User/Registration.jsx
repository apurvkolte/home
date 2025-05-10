import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";
import Link from "next/link";

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const [avatarPreview, setAvatarPreview] = useState("/default_avatar.jpg"); // Default user icon
    const MySwal = withReactContent(Swal);
    const router = useRouter();

    const submitHandler = (data) => {
        MySwal.fire({
            title: "Registration Successful!",
            text: "You will be redirected to the home page shortly.",
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
        }).then(() => {
            router.push("/");
        });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="relative py-40 flex justify-center items-center bg-[url(/home/home.jpg)] bg-cover bg-center" >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div id="account_form" className="relative z-10 w-full lg:w-1/2 bg-white shadow-lg p-24  rounded-full border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Signup Form</h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            className={`w-full border rounded-lg px-4 py-2 focus:ring-1 outline-none focus:ring-green-400 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                            {...register("name", { required: "Full Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            className={`w-full border rounded-lg px-4 py-2 focus:ring-1 outline-none focus:ring-green-400 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                    message: "Invalid email format",
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Mobile Number</label>
                        <input
                            type="text"
                            className={`w-full border rounded-lg px-4 py-2 focus:ring-1 outline-none focus:ring-green-400 ${errors.mobile ? "border-red-500" : "border-gray-300"}`}
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Invalid mobile number",
                                },
                            })}
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            className={`w-full border rounded-lg px-4 py-2 focus:ring-1 outline-none focus:ring-green-400 ${errors.password ? "border-red-500" : "border-gray-300"}`}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            className={`w-full border rounded-lg px-4 py-2 focus:ring-1 outline-none focus:ring-green-400 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) => value === getValues("password") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Upload Avatar</label>
                        <div className="flex items-center space-x-4">
                            <img
                                src={avatarPreview}
                                alt="Avatar Preview"
                                className="w-16 h-16 rounded-full border border-gray-300 object-cover"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full border rounded-lg px-4 py-2"
                                onChange={(e) => {
                                    handleAvatarChange(e);
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <button
                            type="submit"
                            className="w-[40%] bg-green-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300"
                        >
                            Signup
                        </button>
                    </div>
                </form>
                <div className="flex justify-center items-center mt-6">
                    <Link
                        href="/login"
                        className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 ease-in-out"
                    >
                        <> Already have an account? <span className="font-bold">Sign In</span></>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Signup;
