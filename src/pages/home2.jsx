import React, { useState, useEffect } from 'react';
import Seo from '@/components/common/seo';
import Header1 from '@/components/common/Header1';
import Nav from '@/components/common/Nav';
import Banner1 from '@/components/common/Banner1';
import Cards from '@/components/common/Cards1';
import ImageSlider1 from '@/components/common/ImageSlider1';
import Footer from '@/components/common/Footer';
import AnimatedCursor from '@/components/common/AnimatedCursor';
import Services1 from '@/components/common/Services1';
import CategoriesPage from '@/components/category/Categories1';
import Loader from '../components/common/Loader';
import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaUsers, FaHandshake, FaChartLine, FaHeart } from 'react-icons/fa';
import { FiAward, FiTarget, FiGlobe } from 'react-icons/fi';
const Home1 = () => {
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
                <Header1 />
                <AnimatedCursor />
                <Nav />
                <Banner1 />
                <CategoriesPage />

                <div className='container px-20 mx-auto '>
                    <ImageSlider1 />
                    <Cards />
                </div>
                <br />

                <section className="container mx-auto text-gray-700 body-font">
                    <div className="lg:w-4/6 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Our Expertise
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
                <Services1 />
            </div>

            {/* Sticky footer */}
            <div className="sm:sticky sm:bottom-0 bg-white z-10 shadow-md">
                <Footer />
            </div>
        </div>
    );
};

export default Home1;
