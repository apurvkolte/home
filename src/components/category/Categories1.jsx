import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { categoriesHome } from "@/data/categories";

const CategorySlider = () => {
    const settings = {
        speed: 800,
        infinite: true,
        autoplay: true,
        slidesToShow: 8,
        slidesToScroll: 6,
        arrows: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1280, // lg
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024, // md
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768, // sm
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-50 py-16">
            <div className="container  mx-auto px-4">
                {/* Header */}
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
                    Shop by Category
                </h2>
                {/* Slider */}
                <Slider className="slider-container" {...settings}>
                    {categoriesHome.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-2"
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md mb-2">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full"
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-700 mr-10 py-5 text-center">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CategorySlider;