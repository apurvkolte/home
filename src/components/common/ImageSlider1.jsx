import React from "react";
import Card from "./CardOld copy";
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
        slidesToShow: 4,
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
        <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
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
                <div className="mb-12">
                    <h1 className="text-4xl font-semibold text-zinc-700 tracking-tight leading-none  mb-6">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            Best Sellers
                        </motion.span>
                    </h1>
                    <Slider1 {...settings}>
                        {products.slice(0, 10).map((product) => (
                            <Card key={product.id} border="2px" product={product} />
                        ))}
                    </Slider1>
                </div>

                {/* Vertical Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended for You</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.slice(25, 37).map((product) => (
                            <motion.div
                                key={product.id}
                                className=""
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card product={product} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
