import React from "react";
import { products } from '@/data/products';


const CategoriesPage = () => {
    return (
        <div className="mb-2 mt-5 bg-gray-50 py-12">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-12">Shop by Category</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.slice(0, 6).map((category, index) => (
                        <a
                            href={category.link}
                            key={index}
                            className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                        >
                            <div className="w-32 h-32 overflow-hidden rounded-full mb-4">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-700">{category.name}</h2>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
