import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const MySwal = withReactContent(Swal);
    const router = useRouter();

    const submitHandler = (data) => {
        MySwal.fire({
            title: "Reset Link Sent!",
            text: "Please check your email for the password reset link. You will be redirected shortly.",
            icon: "info",
            timer: 3000,
            showConfirmButton: false,
        }).then(() => {
            router.push("/login");
        });
    };


    return (
        <div className="py-40 flex justify-center items-center bg-[url(/home/home.jpg)] bg-cover ">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div id="account_form" className="relative z-10 w-full h-screen lg:w-1/3 bg-white shadow-lg p-20 rounded-full border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Forgot Password</h1>
                <p className="text-gray-600 mb-6 text-center">
                    Enter your email address to receive a password reset link.
                </p>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-green-400 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format",
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-700 font-medium">
                        Remember your password?{" "}
                        <Link href="/login" className="text-green-500 hover:underline font-bold">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
