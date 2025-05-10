import React from "react";
import Card from "./CardOld";
import { products } from "@/data/products";
import { motion } from "framer-motion";

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDisplay = () => {

    const settings = {
        speed: 500,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true, // Enable arrows for navigation
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className=" bg-gradient-to-r from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center">
                    <motion.h1
                        className="text-4xl font-extrabold text-gray-800 tracking-tight"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        Explore Top Picks
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 mt-2 text-lg"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    >
                        Discover products tailored to your taste.
                    </motion.p>
                </div>

                {/* Horizontal Section */}
                <div >

                    <Slider1 {...settings}>
                        {products.slice(0, 10).map((product) => (
                            <Card key={product.id} border="2px" product={product} />
                        ))}
                    </Slider1>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
