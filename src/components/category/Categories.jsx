import React from "react";
import {
    FaTv,
    FaCamera,
    FaTshirt,
    FaHome,
    FaDumbbell,
    FaShoppingBag,
    FaLaptop,
    FaCouch,
    FaBasketballBall,
    FaHeadphones,
    FaApple,
    FaGamepad,
    FaCar,
    FaBook,
    FaGift,
} from "react-icons/fa";

export const categories = [
    { name: "Electronics", icon: <FaTv />, color: "text-blue-500" },
    { name: "Photography", icon: <FaCamera />, color: "text-pink-500" },
    { name: "Wearables", icon: <FaTshirt />, color: "text-green-500" },
    { name: "Home & Kitchen", icon: <FaHome />, color: "text-yellow-500" },
    { name: "Fitness & Sports", icon: <FaDumbbell />, color: "text-purple-500" },
    { name: "Fashion", icon: <FaShoppingBag />, color: "text-red-500" },
    { name: "Laptops & Computers", icon: <FaLaptop />, color: "text-indigo-500" },
    { name: "Furniture", icon: <FaCouch />, color: "text-teal-500" },
    { name: "Sports Equipment", icon: <FaBasketballBall />, color: "text-orange-500" },
    { name: "Headphones & Audio", icon: <FaHeadphones />, color: "text-gray-500" },
    { name: "Mobile Devices", icon: <FaApple />, color: "text-green-700" },
    { name: "Automotive", icon: <FaCar />, color: "text-blue-700" },
];

const CategoryGrid = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-700 text-center mb-8">
                    Shop by Category
                </h1>
                {/* Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center p-2">
                            <div
                                className={`w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 shadow-md text-3xl ${category.color}`}
                            >
                                {category.icon}
                            </div>
                            <h2 className="text-[12px] sm:text-[14px] font-extrabold tracking-normal text-zinc-500 mt-2 text-center">
                                {category.name}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryGrid;
