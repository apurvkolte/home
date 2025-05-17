import React, { useState, useEffect } from 'react';
import Seo from '@/components/common/seo';
import Header from '@/components/common/Header';
import Banner from '@/components/common/Banner';
import Cards from '@/components/common/Cards';
import ImageSlider from '@/components/common/ImageSlider';
import Services from '@/components/common/Services';
import Footer from '@/components/common/Footer';
import AnimatedCursor from '@/components/common/AnimatedCursor';
import CategoriesPage1 from '@/components/category/Categories';
import CategoriesPage2 from '@/components/category/Categories2';
import Loader from '../components/common/Loader';


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
            <Seo pageTitle="Florish - React Ecommerce Template with React Hooks, Redux, Next JS, Admin Panel & Tailwind CSS" />

            <div className="relative bg-white z-50">
                {loading && <Loader />}
                <Header />
                <Banner />
                <CategoriesPage1 />

                <div className='container px-5 sm:px-20 mx-auto bg-slate-50 '>
                    <ImageSlider />
                </div>

                <Cards />
                <br />
                <div className='container sm:px-20 mx-auto bg-[#F8F8F8] '>
                    <CategoriesPage2 />
                </div>

                <div className='-mt-3'>
                    <hr />
                    <Services />
                </div>

            </div>

            {/* Sticky footer */}
            <div className="sm:sticky sm:bottom-0 bg-white z-10 shadow-md">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
