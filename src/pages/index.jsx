import React, { useState, useEffect } from 'react';
import Seo from '@/components/common/seo';
import Header from '@/components/common/Header';
import Banner from '@/components/common/Banner';
import Cards from '@/components/common/Cards1';
import ImageSlider12 from '@/components/common/ImageSlider12';
import Services1 from '@/components/common/Services1';
import Footer from '@/components/common/Footer';
import AnimatedCursor from '@/components/common/AnimatedCursor';
import CategorySlider from '@/components/category/Categories3';
import Loader from '../components/common/Loader';
import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaUsers, FaHandshake, FaChartLine, FaHeart } from 'react-icons/fa';
import { FiAward, FiTarget, FiGlobe } from 'react-icons/fi';
const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full min-h-screen scroll-smooth">
            <Seo pageTitle="Florish - eCommerce Next.js, React Template" />
            <div className="relative bg-white z-50">
                {loading && <Loader />}
                <Header />
                <Banner />
                <CategorySlider />
                <ImageSlider12 />
                <Cards />
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
                <Services1 />

            </div>

            {/* Sticky footer */}
            <div className="sm:sticky sm:bottom-0 bg-white z-10 shadow-md">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
