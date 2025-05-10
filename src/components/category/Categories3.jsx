import React from "react";
import { categoriesHome } from "@/data/categories";
import { products } from '@/data/products';

const CategoryGrid = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
                    Shop by Category
                </h2>
                {/* Category Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {products.slice(3, 30).map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center w-32  transition-transform duration-300 transform hover:scale-105 "
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md mb-3">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover "
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-700 text-center">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryGrid;