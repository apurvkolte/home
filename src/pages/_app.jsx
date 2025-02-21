import React, { useEffect } from 'react';
import Seo from '@/components/common/seo';
import '../scss/index.scss';
import 'remixicon/fonts/remixicon.css'
import Header from '@/components/common/Header';
import Banner from '@/components/common/Banner';
import Cards from '@/components/common/Cards';
import ImageSlider from '@/components/common/ImageSlider';
import Services from '@/components/common/Services';
import Footer from '@/components/common/Footer';
import AnimatedCursor from "@/components/common/AnimatedCursor";
const _app = () => {

    return (
        <div className='w-full h-screen scroll-smooth'>
            <Seo pageTitle="Home Page" />
            <Header />
            <Banner />
            {/* <AnimatedCursor /> */}
            <ImageSlider />
            <Cards />
            <br />
            <Services />
            <Footer />

        </div>
    );
}

export default _app;
