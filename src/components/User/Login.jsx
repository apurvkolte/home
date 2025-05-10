import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const MySwal = withReactContent(Swal);
    const router = useRouter();

    const submitHandler = (data) => {
        MySwal.fire({
            title: "Login Successful!",
            text: "You will be redirected to the home page shortly.",
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
        }).then(() => {
            router.push("/");
        });
    };

    return (
        <div className="py-40 flex justify-center items-center bg-[url(/home/home.jpg)] bg-cover bg-center" >
            <div className="absolute inset-0  bg-black opacity-40"></div>
            <div id="account_form" className="relative z-10 h-screen w-full lg:w-1/3 bg-white shadow-lg p-28 rounded-full border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full border rounded-lg px-4 py-2 focus:ring-1 outline-none focus:ring-green-400 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format"
                                }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={`w-full border rounded-lg px-4 py-2 focus:ring-1 outline-none focus:ring-green-400 ${errors.password ? "border-red-500" : "border-gray-300"}`}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long"
                                }
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 text-center hover:text-yellow-500">
                    <Link href="/forgot-password" className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 ease-in-out">
                        Forgot your password?
                    </Link>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-gray-700 font-medium hover:text-green-500">
                        Don not have an account?{" "}
                        <Link href="/register" className="text-green-500 hover:underline font-bold">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
