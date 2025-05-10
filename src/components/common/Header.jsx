import React, { useState } from 'react'
import { PiShoppingCart } from "react-icons/pi";
import { FiHeart, FiBarChart2 } from 'react-icons/fi';
import { LiaUser } from "react-icons/lia";
import { home, electronics, lifestyle, living, fitness, fashion } from '../../data/data';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '../../contexts/cart/cartContext';
const Header = () => {
    const { state, dispatch } = useCart();
    const cartItems = state.cartItems;
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchInput(value);
        // Filter the products based on input
        setFilteredResults(
            products.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase().trim())
            )
        );
    };
    return (
        <div className='w-full h-20 mx-auto flex justify-between items-center px-4 sm:px-20 gap-4 border-b-2 fixed top-0 bg-white z-50'>

            <div className="logo w-40 sm:w-48 md:w-56 h-16 sm:h-20 md:h-24 flex items-center justify-center">
                <Link href="/" passHref legacyBehavior>
                    <a>
                        <img
                            src="/logo.png"
                            alt="Logo"
                            layout="fill"
                            className="w-full h-20 object-contain" />
                    </a>
                </Link>
            </div>

            <div className='menu hidden sm:flex gap-8'>
                <div className='relative group'>
                    <a className="relative uppercase font-medium text-zinc-700 hover:text-zinc-950 text-sm tracking-wide leading-none cursor-pointer group">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[20rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 '>

                        <div className='flex flex-col justify-between gap-3 items-start p-7' >
                            <ul className=''>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>Home</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/home2">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>Home Two</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/home3">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>Home Three</h3>
                                        </a>
                                    </Link>
                                </li>

                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/home4">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>Home Four</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/home5">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>Home Five</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/home6">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>Home Six</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                            </ul>
                        </div>

                        {/* <div className='flex flex-col w-1/3 justify-between gap-3 items-start p-7' >
                            <h3 className='text-sm font-medium capitalize '>Product Details Page</h3>
                            <ul className=''>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                    <a className='cursor-pointer' href="home">
                                        Product Details 1
                                    </a>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                    <a className='cursor-pointer' href="home">
                                        Product Details 2
                                    </a>
                                </li>
                                <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                            </ul>
                        </div>

                        <div className='flex flex-col w-1/3 justify-between gap-3 items-start p-7' >
                            <h3 className='text-sm font-medium capitalize '>Pages</h3>
                            <ul className=''>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                    <a className='cursor-pointer' href="home">
                                        Contact US
                                    </a>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                    <a className='cursor-pointer' href="home">
                                        About us
                                    </a>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                    <a className='cursor-pointer' href="home">
                                        Privacy
                                    </a>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[0.8]'>
                                    <a className='cursor-pointer' href="home">
                                        FAQ
                                    </a>
                                </li>
                                <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                            </ul>
                        </div> */}
                    </div>
                </div>

                <div className='relative group'>
                    <a className='uppercase font-medium text-zinc-700 hover:text-zinc-900 text-sm tracking-wide leading-none cursor-pointer'>
                        Shop
                        <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>

                    </a>
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[20rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap  left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>

                        <div className='flex flex-col justify-between gap-3 items-start p-7'>
                            <h3 className='text-sm font-medium capitalize border-b-2'>Product Details</h3>
                            <ul>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/products">
                                        <a className='cursor-pointer'>
                                            <h3 className='text-sm font-medium capitalize'> Shop</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/product-details/3">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>Product Details One</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/product-details2/2">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'> Product Details Two</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/product-details1/1">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'> Product Details Three</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/ProductsRTL">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'> shop-grid-RTL</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/shop-grid-three-column">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>shop-grid-three-column</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/shop-grid-five-column">
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>shop-grid-five-column</h3>
                                        </a>
                                    </Link>
                                </li>

                                <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                            </ul>
                        </div>


                    </div>
                </div>


                <div className='relative group'>
                    <a className='uppercase font-medium text-zinc-700 hover:text-zinc-900 text-sm tracking-wide leading-none cursor-pointer'>
                        Pages
                        <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[20rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap  left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>

                        <div className='flex flex-col justify-between gap-3 items-start p-7'>
                            <ul className=''>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/dashboard" passHref legacyBehavior>
                                        <a className='cursor-pointer'>
                                            <h3 className='text-sm font-medium capitalize'>Dashboard</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/cart" passHref legacyBehavior>
                                        <a className='cursor-pointer'>
                                            <h3 className='text-sm font-medium capitalize'>Cart</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href='/watchlist' passHref legacyBehavior>
                                        <a className='cursor-pointer'>
                                            <h3 className='text-sm font-medium capitalize'> Watch List</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href="/compare" passHref legacyBehavior>
                                        <a className='cursor-pointer'>
                                            <h3 className='text-sm font-medium capitalize'>Compare Products</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href='/dashboard' passHref legacyBehavior>
                                        <a className='cursor-pointer'>
                                            <h3 className='text-sm font-medium capitalize'>Account</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                    <Link href='/shipping-address' passHref legacyBehavior>
                                        <a className='cursor-pointer' >
                                            <h3 className='text-sm font-medium capitalize'>Shipping Address</h3>
                                        </a>
                                    </Link>
                                </li>
                                <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='relative group'>
                    <a className='uppercase font-medium text-zinc-700 hover:text-zinc-900 text-sm tracking-wide leading-none cursor-pointer'>
                        Collection
                        <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>

                    </a>
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 w-[50rem] hidden group-hover:flex  group-hover:pointer-events-auto flex-col flex-wrap h-[25rem] left-0 top-[52px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                        {fashion.map((item, index) => (
                            <div key={index} className='flex flex-col w-1/4 justify-between gap-3 items-start p-7' >
                                <h3 className='text-sm font-medium capitalize border-b-2 '>{item.title}</h3>
                                <ul className=''>
                                    {item.category.map((cat, i) => (
                                        <li key={i} className='mb-2 text-sm capitalize hover:font-medium hover:opacity-[1] opacity-[0.8]'>
                                            <a className='cursor-pointer' href={cat.url}>
                                                <h3 className='text-sm font-medium capitalize'> {cat}</h3>
                                            </a>
                                        </li>
                                    ))}
                                    <li className='mt-3 border-b-[1px] border-zinc-500'></li>
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>


                <div className='relative group '>
                    <Link href='/about-us' passHref legacyBehavior>
                        <a className='uppercase font-medium text-zinc-700 hover:text-zinc-900 text-sm tracking-wide leading-none cursor-pointer'>
                            About
                            <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>

                        </a>
                    </Link>
                </div>
                <div className='relative group'>
                    <Link href="/contact-us" passHref legacyBehavior>
                        <a className='uppercase font-medium text-zinc-700 hover:text-zinc-900 text-sm tracking-wide leading-none cursor-pointer'>
                            Contact
                            <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </Link>
                </div>


                {/* {["Home", "men", "women", "studio", "kids", "beauty"].map((item, index) => (
                    <a className='uppercase  font-medium text-sm tracking-wide leading-none' href='#'>{item}</a>
                ))} */}

            </div>
            <div className='search-container w-[40rem] sm:w-[30rem] relative'>
                <div className='search-box h-[2.2rem] sm:h-[2.8rem] flex justify-start items-center rounded bg-slate-100'>
                    <input
                        type='text'
                        placeholder='Search for products...'
                        className='w-full h-full px-3 border font-thin rounded text-zinc-500 outline-none focus:bg-slate-50 focus:outline-zinc-200'
                        value={searchInput}
                        onChange={handleSearch}
                    />
                    {searchInput && (
                        <button
                            className='absolute right-10 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:bg-slate-200 hover:text-zinc-600 flex justify-center items-center cursor-pointer rounded w-8 h-8' // Adjusted positioning
                            onClick={() => {
                                setSearchInput('');
                                setFilteredResults([]);
                            }}
                        >
                            <i className="ri-close-line text-xl"></i>
                        </button>
                    )}
                    <Link href='/products' passHref legacyBehavior>
                        <div className='search-icon w-10 h-full text-zinc-500 hover:bg-slate-200 hover:text-zinc-600 flex justify-center items-center cursor-pointer rounded'>
                            <i className="ri-search-line text-xl"></i>
                        </div>
                    </Link>
                </div>
                {filteredResults.length > 0 && (
                    <div className='search-results bg-white border border-slate-200 mt-2 rounded shadow-md max-h-[15rem] overflow-y-auto absolute w-full z-10'>
                        <ul className='divide-y divide-slate-200'>
                            {filteredResults.slice(0, 12).map((result, index) => (
                                <Link key={index} href={`/product-details/${result.id}`} passHref legacyBehavior>
                                    <li
                                        className='p-3 hover:bg-slate-100 cursor-pointer text-sm'
                                    >
                                        {result.name}
                                    </li>
                                </Link>))}
                        </ul>
                    </div>
                )}
            </div>
            <div className='icon flex justify-center items-center gap-5 sm:gap-8 sm:ml-10'>
                {/* Watchlist Icon */}
                <div className="hidden sm:flex relative items-center mt-3">
                    <Link href="/watchlist" passHref legacyBehavior>
                        <a className="flex items-center">
                            <FiHeart className="text-xl text-zinc-600 cursor-pointer" />
                            <span className="absolute top-[-15px] right-[-15px] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-zinc-900 text-white text-xs font-bold">
                                4
                            </span>
                        </a>
                    </Link>
                </div>

                {/* Compare Icon */}
                <div className="hidden sm:flex relative items-center mt-3">
                    <Link href="/compare" passHref legacyBehavior>
                        <a className="flex items-center">
                            <FiBarChart2 className="text-xl text-zinc-600 cursor-pointer" />
                            <span className="absolute top-[-15px] right-[-15px] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-zinc-900 text-white text-xs font-bold">
                                3
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="relative flex items-center sm:mt-3">
                    <Link href="/cart" passHref legacyBehavior>
                        <PiShoppingCart className="text-xl  text-zinc-600 cursor-pointer " />
                    </Link>
                    <span className="absolute top-[-15px] right-[-15px] flex items-center justify-center w-[20px] h-[20px] rounded-full bg-zinc-900 text-white text-xs font-bold">
                        {cartItems?.length}
                    </span>
                </div>

                <div className='relative group ml-0 sm:ml-10'>
                    <LiaUser className="ri-user-line text-2xl sm:text-3xl text-zinc-600 cursor-text " />
                    <div className="absolute inset-x-0 top-full h-[28px] bg-transparent group-hover:block"></div>
                    <div className='absolute z-40 hidden group-hover:flex  w-[10rem] top-[52px]  group-hover:pointer-events-auto flex-col flex-wrap h-auto -right-[75px] bg-zinc-50 bg-opacity-100 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 '>
                        <ul className='flex flex-col w-full justify-between  items-start  text-sm font-medium capitalize'>
                            <Link href="/dashboard" >
                                <li className="block hover:bg-zinc-100 hover:border-2 cursor-pointer p-2 w-full">Dashboard</li>
                            </Link>
                            <Link href="/orders" >
                                <li className="block hover:bg-zinc-100 hover:border-2 cursor-pointer p-2 w-full">Order</li>
                            </Link>
                            <Link href="/profiles" >
                                <li className="block hover:bg-zinc-100 hover:border-2 cursor-pointer p-2 w-full">Profile</li>
                            </Link>
                            <Link href="/login" >
                                <li className="block hover:bg-zinc-100 hover:border-2 cursor-pointer p-2 w-full">Login</li>
                            </Link>
                            <Link href="/shipping-address">
                                <li className="block hover:bg-zinc-100 hover:border-2 cursor-pointer p-2 w-full">Shipping Address</li>
                            </Link>
                        </ul >
                    </div >
                </div >

            </div >

        </div >
    )
}

export default Header