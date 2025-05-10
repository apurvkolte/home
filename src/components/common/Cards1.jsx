import React, { useState } from 'react';
import Card from './Card';
import { motion } from "framer-motion";
import { products } from '@/data/products';
import { categories } from '@/data/categories';

const Cards = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase());

    return (
        <div className='max-w-screen-xl mx-auto h-auto px-4'>
            <h1 className='text-4xl font-normal py-6 tracking-tight leading-none capitalize text-center sm:text-left'>
                <motion.span
                    initial={{ rotate: 90, y: "40%", opacity: 0 }}
                    whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{ ease: [0.52, 1, 0.36, 1], duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='inline-block origin-left font-bold text-zinc-700 tracking-tight leading-none'>
                    Trending Products
                </motion.span>
            </h1>

            <div className='flex flex-wrap justify-center sm:justify-start gap-3 mb-6'>
                {['All', ...categories].map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`py-2 px-4 border rounded-full font-medium transition-colors duration-300 text-sm ${selectedCategory === category
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {filteredProducts.slice(0, 10).map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Cards;
