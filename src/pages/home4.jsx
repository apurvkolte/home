import React from 'react';
import { FiShoppingCart, FiHeart, FiUser, FiSearch } from 'react-icons/fi';
import { useCart } from '../contexts/cart/cartContext';
import { addItemToCart } from '../contexts/cart/cartReducer';
import Nav from '@/components/common/Nav1';
import ImageSlider1 from '@/components/common/ImageSlider6';
import Footer from '@/components/common/Footer';
import { products } from '@/data/products';
import Link from 'next/link';
const Home = () => {



    const categories = [
        { name: 'Electronics', icon: '🔌', count: 120 },
        { name: 'Clothing', icon: '👕', count: 85 },
        { name: 'Home & Kitchen', icon: '🏠', count: 64 },
        { name: 'Beauty', icon: '💄', count: 42 },
        { name: 'Sports', icon: '⚽', count: 38 },
    ];

    const { dispatch } = useCart();



    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-indigo-600">Florish</span>
                        </div>

                        <div className="flex-1 flex items-center justify-center px-2">
                            <div className="max-w-xl w-full">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiSearch className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Search for products..."
                                        type="search"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <FiHeart className="h-6 w-6" />
                            </button>
                            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <FiShoppingCart className="h-6 w-6" />
                            </button>
                            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <FiUser className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Nav />

            {/* Hero Section */}
            <div className="relative bg-indigo-700">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Summer Collection
                    </h1>
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                        Discover our new arrivals with up to 40% discount. Limited time offer!
                    </p>
                    <div className="mt-10">
                        <a
                            href="#"
                            className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-indigo-700 hover:bg-indigo-50"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            <ImageSlider1 />

            {/* Categories */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 cursor-pointer">
                    {categories.map((category) => (
                        <div key={category.name} className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="p-6 text-center">
                                <span className="text-4xl">{category.icon}</span>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">
                                    {category.name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{category.count} items</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                    <Link href="/products" >
                        <span className="text-indigo-600 cursor-pointer hover:text-indigo-500 font-medium">View all</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 ">
                    {products.slice(5, 13).map((product) => (
                        <div key={product.id} className="group relative bg-[#F6F6F6] border">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between px-4 ">
                                <div>
                                    <h3 className="text-sm text-gray-700 font-bold">
                                        <Link href={`/product-details/${product.id}`}>
                                            <a>
                                                <span aria-hidden="true" className="absolute inset-0 " />
                                                {product.name}
                                            </a>
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">${product.price}</p>
                            </div>
                            <button className="mt-2 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Promo Banner */}
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                    <span className="block">Ready to dive in?</span>
                                    <span className="block">Start your free trial today.</span>
                                </h2>
                                <p className="mt-4 text-lg leading-6 text-indigo-200">
                                    Sign up for our newsletter and get 15% off your first order.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                                >
                                    Sign up for free
                                </a>
                            </div>
                        </div>
                        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                            <img
                                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                                alt="App screenshot"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div >
    );
};

export default Home;