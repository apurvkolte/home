import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Banner from '@/components/common/Banner';
import Footer from '@/components/common/Footer';
import Loader from '../components/common/Loader';
import { products } from '@/data/products';
import Services from '@/components/common/Services1';
import Link from 'next/link';
import { useCart } from '../contexts/cart/cartContext';
import { addItemToCart } from '../contexts/cart/cartReducer';

const categories = ['Men', 'Women', 'Accessories', 'New Arrivals'];

export default function Home() {


    return (
        <div className="w-full min-h-screen scroll-smooth flex flex-col">
            <div className="flex-grow">
                <div className="relative bg-white z-50">
                    <Header />
                    <Banner />
                    <main className="font-sans">
                        {/* Categories */}
                        <CategoriesSection categories={categories} />

                        {/* Featured Products */}
                        <FeaturedProductsSection products={products} />


                        {/* Hero Section */}
                        <HeroSection />
                        <Services />
                        {/* Additional sections can be added here */}
                    </main>
                </div>
            </div>

            {/* Footer */}
            <FooterWrapper />
        </div>
    );
}

// Extracted components for better readability and maintainability
function CategoriesSection({ categories }) {
    return (
        <section className="py-12 px-4 bg-[#EEF2FB]">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Shop by Category</h2>
            <div className="flex justify-center flex-wrap gap-6 max-w-6xl mx-auto">
                {/* Men Category */}
                <button
                    className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl w-44 text-center hover:bg-gray-50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 group"
                    aria-label="Shop Men category"
                >
                    <div className="flex flex-col items-center">
                        <div className="mb-4 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                            Men
                        </span>
                    </div>
                </button>

                {/* Women Category */}
                <button
                    className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl w-44 text-center hover:bg-gray-50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 group"
                    aria-label="Shop Women category"
                >
                    <div className="flex flex-col items-center">
                        <div className="mb-4 p-3 bg-pink-50 rounded-full group-hover:bg-pink-100 transition-colors duration-300">
                            <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                            Women
                        </span>
                    </div>
                </button>

                {/* Accessories Category */}
                <button
                    className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl w-44 text-center hover:bg-gray-50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 group"
                    aria-label="Shop Accessories category"
                >
                    <div className="flex flex-col items-center">
                        <div className="mb-4 p-3 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors duration-300">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                            Accessories
                        </span>
                    </div>
                </button>

                {/* New Arrivals Category */}
                <button
                    className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl w-44 text-center hover:bg-gray-50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 group"
                    aria-label="Shop New Arrivals category"
                >
                    <div className="flex flex-col items-center">
                        <div className="mb-4 p-3 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-300">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                            New Arrivals
                        </span>
                    </div>
                </button>
            </div>
        </section>
    );
}

function FeaturedProductsSection({ products }) {
    const featuredProducts = products.slice(20, 26);

    return (
        <section className="py-12 max-w-screen-xl mx-auto " aria-labelledby="featured-products-heading">
            <div className="text-center mb-12">
                <h2 id="featured-products-heading" className="text-3xl font-bold mb-2">
                    Featured Products
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover our carefully curated selection of premium products
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

// Extracted Product Card component for reusability
function ProductCard({ product }) {
    const { dispatch } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addItemToCart(product.id, 1));
    };
    return (
        <article className="group relative p-4 sm:p-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start">
                    <Link href={`/product-details/${product.id}`}><h3 className="text-lg font-semibold cursor-pointer text-gray-900">{product.name}</h3></Link>
                    <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                </div>

                <div className="mt-6 flex space-x-3">
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        aria-label={`Add ${product.name} to cart`}
                    >
                        Add to Cart
                    </button>
                    <button
                        className="flex-shrink-0 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        aria-label={`View details for ${product.name}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Badge for sale/new items could be added here */}
        </article>
    );
}

function HeroSection() {
    return (
        <section className="relative py-20 overflow-hidden mb-12 rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-95"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Discover Your Perfect Style
                </h1>
                <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
                    Trendy collections curated for you. Quality products at affordable prices.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        aria-label="Shop now"
                    >
                        Shop Now
                    </button>
                    <button
                        className="px-8 py-4 border border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        aria-label="View collections"
                    >
                        View Collections
                    </button>
                </div>
            </div>
        </section>
    );
}

function FooterWrapper() {
    return (
        <footer className="sm:sticky sm:bottom-0 bg-white z-10 shadow-md">
            <Footer />
        </footer>
    );
}