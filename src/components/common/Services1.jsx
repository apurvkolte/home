import React from 'react';
import { motion } from "framer-motion";

const ImprovedEcommerceFeatures = () => {
    const features = [
        {
            title: "Preferences",
            description: "AI-powered suggestions tailored to your unique preferences and shopping history.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 01-8 0m-2 4a4 4 0 118 0v7a4 4 0 11-8 0v-7"></path>
                </svg>
            ),
            gradient: "from-blue-500 to-purple-500"
        },
        {
            title: "One-Click Checkout",
            description: "Lightning-fast purchases with saved payment details for ultimate convenience.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h16l4 8v5a2 2 0 01-2 2H5a2 2 0 01-2-2V3z"></path>
                </svg>
            ),
            gradient: "from-green-500 to-teal-500"
        },
        {
            title: "Exclusive Member Benefits",
            description: "VIP discounts, early access to sales, and special perks for loyal customers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M4.22 4.22a5.5 5.5 0 017.76 0m0 0a5.5 5.5 0 017.76 0M6.94 6.94a1.5 1.5 0 00-2.12 2.12m12 12a1.5 1.5 0 102.12-2.12"></path>
                </svg>
            ),
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            title: "Bank-Level Security",
            description: "256-bit encryption and fraud protection for worry-free transactions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
            ),
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "24/7 Customer Support",
            description: "Real human assistance anytime via chat, email, or phone.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            ),
            gradient: "from-red-500 to-pink-500"
        },
        {
            title: "Same-Day Delivery",
            description: "Get your orders delivered in hours with our premium shipping network.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
            ),
            gradient: "from-indigo-500 to-blue-500"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-base font-semibold tracking-wider text-green-500 uppercase">
                        Why choose us
                    </h2>
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        <span className="block">Exceptional Shopping</span>
                        <span className="block text-green-500">Experience</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                        We combine cutting-edge technology with customer-first service.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                                <div className="p-6 sm:p-8">
                                    <div className={`flex justify-center items-center bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-full text-white mb-6 mx-auto`}>
                                        <div className="w-8 h-8">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-center text-gray-700 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 text-center">
                                        {feature.description}
                                    </p>
                                </div>
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 cursor-pointer">
                                    <div className="text-center">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            Learn more →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                    >
                        Join Our Community
                        <svg className="ml-3 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ImprovedEcommerceFeatures;