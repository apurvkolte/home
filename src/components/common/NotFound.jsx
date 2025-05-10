import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md mx-auto">
                {/* Illustration */}
                <div className="mb-8 animate-bounce-slow">
                    <img
                        className="mx-auto w-64 h-64 object-contain"
                        src="/resource/error.png"
                        alt="Error Illustration"
                        loading="eager"
                    />
                </div>

                {/* Error Code */}
                <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
                    404
                </h1>

                {/* Error Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus quod laboriosam rerum reiciendis ab mollitia!
                </p>

                {/* Action Button */}
                <div className="relative group">
                    <div className="absolute  rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                    <Link href="/" passHref>
                        <a className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl hover:translate-y-[-2px]">
                            Return to Homepage
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2 w-5 h-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </Link>
                </div>

                {/* Additional Help */}
                <p className="mt-8 text-gray-500 text-sm">
                    Need help? <Link href="/contact"><a className="text-red-600 hover:underline">Contact support</a></Link>
                </p>
            </div>
        </div>
    );
};

export default NotFound;