import React from 'react';
import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './CardOld';
import { motion } from "framer-motion";
import { products } from '@/data/products';

const ImageSlider = () => {
    const settings = {
        speed: 1000,
        infinite: true,
        autoplay: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024, // tablets and below
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768, // mobile landscape
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // mobile portrait
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className="w-full min-h-[20rem] bg-slate-50">
                <div>
                    <h1 className="text-2xl md:text-4xl px-4 py-5 font-semibold text-zinc-800 tracking-tight capitalize">
                        <motion.span
                            initial={{ rotate: 90, y: "40%", opacity: 0 }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8 }}
                            viewport={{ once: true }}
                            className="inline-block origin-left">
                            Best Sellers
                        </motion.span>
                    </h1>

                    <Slider1 {...settings}>
                        {products.slice(1, 10).map(product => (
                            <Card key={product.id} border="2px" product={product} />
                        ))}
                    </Slider1>
                </div>
            </section>

            {/* <hr /> */}

            <section className="w-full min-h-[20rem] bg-slate-50 mt-5">
                <div>
                    <h1 className="text-2xl md:text-4xl font-semibold px-4 text-zinc-800 py-5 tracking-tight capitalize">
                        <motion.span
                            initial={{ rotate: 90, y: "40%", opacity: 0 }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-block origin-left">
                            Recommended for you
                        </motion.span>
                    </h1>
                    <Slider1 {...settings}>
                        {products.slice(10, 30).map(product => (
                            <Card key={product.id} border="2px" product={product} />
                        ))}
                    </Slider1>
                </div>
            </section>
        </>
    );
};

export default ImageSlider;
