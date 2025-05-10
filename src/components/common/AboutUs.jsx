import React from 'react';
import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaUsers, FaHandshake, FaChartLine, FaHeart } from 'react-icons/fa';
import { FiAward, FiTarget, FiGlobe } from 'react-icons/fi';

const AboutUs = () => {
    return (
        <div className="container mx-auto p-8">
            <section className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 items-center">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                            <img
                                alt="Our team working together"
                                className="object-cover object-center h-full w-full"
                                src="/images/abot.jpg"
                                width={1200}
                                height={500}
                                layout="responsive"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-blue-100 text-blue-500 shadow-md">
                                    <FaUsers className="w-10 h-10" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Our Team</h2>
                                    <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-gray-600">
                                        Dedicated professionals committed to delivering exceptional products and services.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4 text-gray-600">
                                    At our core, we believe in creating meaningful solutions that make a difference. Our team combines expertise with passion to deliver outstanding results for our clients. We foster a culture of collaboration and continuous learning.
                                </p>
                                <p className="leading-relaxed text-lg mb-4 text-gray-600">
                                    With years of experience across diverse industries, we bring fresh perspectives and innovative approaches to every challenge. Our commitment to excellence drives us to push boundaries and set new standards in our field.
                                </p>
                                <a className="text-blue-500 inline-flex items-center hover:text-blue-700 transition-colors duration-300">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto text-gray-700 body-font">
                <div className="lg:w-4/6  py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Our Values
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
                            These principles guide everything we do
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4 group">
                            <div className="flex relative h-48 transform transition duration-500 group-hover:-translate-y-2">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                                        <FiAward className="text-blue-500 text-3xl" />
                                    </div>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Excellence
                                    </h1>
                                    <p className="leading-relaxed text-center text-gray-600">
                                        We strive for the highest quality in everything we do.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 group">
                            <div className="flex relative h-48 transform transition duration-500 group-hover:-translate-y-2">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:border-green-500 hover:shadow-xl transition-all duration-300">
                                    <div className="bg-green-100 p-4 rounded-full mb-4">
                                        <FaLightbulb className="text-green-500 text-3xl" />
                                    </div>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Innovation
                                    </h1>
                                    <p className="leading-relaxed text-center text-gray-600">
                                        We embrace creativity to drive meaningful progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 group">
                            <div className="flex relative h-48 transform transition duration-500 group-hover:-translate-y-2">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:border-red-500 hover:shadow-xl transition-all duration-300">
                                    <div className="bg-red-100 p-4 rounded-full mb-4">
                                        <FaShieldAlt className="text-red-500 text-3xl" />
                                    </div>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Integrity
                                    </h1>
                                    <p className="leading-relaxed text-center text-gray-600">
                                        We conduct business with honesty and transparency.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 group">
                            <div className="flex relative h-48 transform transition duration-500 group-hover:-translate-y-2">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:border-purple-500 hover:shadow-xl transition-all duration-300">
                                    <div className="bg-purple-100 p-4 rounded-full mb-4">
                                        <FaHandshake className="text-purple-500 text-3xl" />
                                    </div>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Collaboration
                                    </h1>
                                    <p className="leading-relaxed text-center text-gray-600">
                                        We believe in the power of teamwork and partnership.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 group">
                            <div className="flex relative h-48 transform transition duration-500 group-hover:-translate-y-2">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:border-yellow-500 hover:shadow-xl transition-all duration-300">
                                    <div className="bg-yellow-100 p-4 rounded-full mb-4">
                                        <FiTarget className="text-yellow-500 text-3xl" />
                                    </div>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Accountability
                                    </h1>
                                    <p className="leading-relaxed text-center text-gray-600">
                                        We take ownership of our actions and results.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4 group">
                            <div className="flex relative h-48 transform transition duration-500 group-hover:-translate-y-2">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded-lg shadow-md flex flex-col items-center justify-center hover:border-indigo-500 hover:shadow-xl transition-all duration-300">
                                    <div className="bg-indigo-100 p-4 rounded-full mb-4">
                                        <FiGlobe className="text-indigo-500 text-3xl" />
                                    </div>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        Sustainability
                                    </h1>
                                    <p className="leading-relaxed text-center text-gray-600">
                                        We build solutions that last and benefit society.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto text-gray-700 body-font">
                <div className="lg:w-4/6 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Why Choose Us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
                            What sets us apart from the competition
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg">
                                <FaChartLine className="text-blue-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-xl text-gray-900">Proven Results</h2>
                                <p className="leading-relaxed text-gray-600">Record of Success</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg">
                                <FaUsers className="text-green-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-xl text-gray-900">Expert Team</h2>
                                <p className="leading-relaxed text-gray-600">Develop Expertise</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg">
                                <FaHeart className="text-red-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-xl text-gray-900">Passionate</h2>
                                <p className="leading-relaxed text-gray-600">We love what we do</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg">
                                <FaCheckCircle className="text-purple-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-xl text-gray-900">Reliable</h2>
                                <p className="leading-relaxed text-gray-600">You can count on us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;