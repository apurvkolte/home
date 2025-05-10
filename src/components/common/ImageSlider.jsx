import React from 'react'

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './CardOld';
import { motion } from "framer-motion"
import { products } from '@/data/products'


const ImageSlider = () => {
    let settings = {
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    speed: 1000,
                    infinite: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    speed: 1000,
                    infinite: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <>
            <div className="w-full h-[30rem] bg-slate-50">
                <div className="">
                    <h1 className='text-4xl px-4 py-5 font-semibold text-zinc-700 tracking-tight leading-none overflow-hidden capitalize'>
                        <motion.span
                            initial={{ rotate: 90, y: "40%", opacity: 0 }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8 }}
                            viewport={{ once: true }}
                            className='inline-block origin-left'>
                            Best Sellers
                        </motion.span>
                    </h1>

                    <Slider1 {...settings} >
                        {products.slice(1, 10).map(product => (
                            <Card key={product.id} border="2px" product={product} />
                        ))}
                    </Slider1>
                </div>
            </div><hr />
            <div className="w-full h-[30rem] bg-slate-50 mt-5">
                <div className="">
                    <h1 className='text-4xl font-normal px-4 py-5 tracking-tight leading-none overflow-hidden capitalize'>
                        <motion.span
                            initial={{ rotate: 90, y: "40%", opacity: 0 }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='inline-block origin-left'>
                            Recommended for you
                        </motion.span>
                    </h1>
                    <Slider1 {...settings} >
                        {products.slice(10, 30).map(product => (
                            <Card key={product.id} border="2px" product={product} />
                        ))}
                    </Slider1>
                </div>
            </div>
        </>
    )
}

export default ImageSlider