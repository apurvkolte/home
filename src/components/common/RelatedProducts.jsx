import React from "react";
import Card from "./CardR";
import { products } from "@/data/products";
import { motion } from "framer-motion";

import Slider1 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDisplay = ({ category }) => {
    const product =
        products.length >= 6
            ? products
            : products.filter((item) => item.category === category);

    const settings = {
        speed: 800,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        arrows: true,
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
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto px-4">
                {/* Horizontal Section */}
                <div className="">
                    <h1 className="text-2xl font-bold text-zinc-600 tracking-tight">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            Related Products
                        </motion.span>
                    </h1>
                    <Slider1 {...settings}>
                        {product?.slice(0, 30)?.map((product) => (
                            <div key={product.id} className="px-4">
                                <Card key={product.id} border="2px" product={product} />
                            </div>
                        ))}
                    </Slider1>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
